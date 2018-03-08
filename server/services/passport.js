const passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local').Strategy,
      GithubStrategy = require('passport-github2').Strategy,
      GoogleStrategy = require('passport-google-oauth20').Strategy;
      FacebookStrategy = require('passport-facebook').Strategy,
      mongoose = require('mongoose'),
      User = require('../db/models/User'),
      config = require('../config/keys');

//Turning a user model and turning it into a user ID provided by MongoDB
passport.serializeUser((user, done) => {
  // MongoDB generated user ID
  done(null, user.id);
});

// Turn the socialAuthID string back into a user model 
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.jwtSecret
  }, (payload, done) => {
    User.findById(payload.sub)
      .then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          done(null, false);
        }
      })
      .catch(err => {
        return done(err, false);
      });
  })
);

passport.use(
  new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    User.findOne({ "local.email": email })
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        user.comparePassword(password, function (err, isMatch) {
          if (err) { return done(err) }
          if (!isMatch) { return done(null, false) }

          return done(null, user);
        });
      })
      .catch(err => {
        return done(err);
      })
  })
);

passport.use(
  new GoogleStrategy({
    clientID: config.googleKeys.clientID,
    clientSecret: config.googleKeys.clientSecret,
    callbackURL: config.googleKeys.callbackURL,
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "google.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'google',
            google: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);

passport.use(
  new FacebookStrategy({
    clientID: config.facebookKeys.clientID,
    clientSecret: config.facebookKeys.clientSecret,
    callbackURL: config.facebookKeys.callbackURL,
    profileFields: ['id', 'name', 'emails', 'displayName', 'photos'],
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "facebook.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'facebook',
            facebook: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);

passport.use(
  new GithubStrategy({
    clientID: config.githubKeys.clientID,
    clientSecret: config.githubKeys.clientSecret,
    callbackURL: config.githubKeys.callbackURL,
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "github.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'github',
            github: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);