const express = require('express'),
      passport = require('passport'),
      token = require('../controllers/tokenController'),
      User = require('../db/models/User');
      
require('../services/passport');

exports.requireAuth = passport.authenticate('jwt', { session: false });

exports.userLogIn = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.status(200).json({ token: accessToken });
}

exports.userSignUp = (req, res, next) => {
  const name = 'Michael Gee',
        email = 'michaelgee221@gmail.com',
        password = 'test';

  console.log(req.body);

  // User.findOne({ "local.email": email })
  //   .then(existingUser => {
  //     if (existingUser) {
  //       return res.status(422).send({ error: 'Email is already in use.' });
  //     }

  //     const newUser = new User({
  //       provider: 'local',
  //       local: {
  //         displayName: name,
  //         email: email,
  //         password: password,
  //         photoURL: 'https://firebasestorage.googleapis.com/v0/b/chat-box-217e3.appspot.com/o/default-user-image.png?alt=media&token=bf477e99-aae0-4073-993f-83cd4042d755'
  //       }
  //     });

  //     newUser.save()
  //       .then(user => {
  //         const accessToken = token.generateToken(req.user);
  //         res.redirect(`/token?token=${accessToken}`);
  //       })
  //       .catch(err => {
  //         next(err);
  //       });
  //   })
  //   .catch(err => {
  //     next(err);
  //   });
}

exports.githubLogIn = passport.authenticate('github');
exports.githubCallback = passport.authenticate('github', { failureRedirect: '/error' });
exports.githubSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}

exports.googleLogIn = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/error' });
exports.googleSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}

exports.facebookLogIn = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/error' });
exports.facebookSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}
