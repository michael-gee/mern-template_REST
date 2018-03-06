const express = require('express');
const router = express.Router();
const Auth = require('../controllers/authController');

// AUTH ROUTES
router.post('/log-in', Auth.userLogIn);
router.post('/sign-up', Auth.userSignUp);

router.get('/hello', Auth.requireLocalAuth, (req, res, next) => {
  res.send('Hello!!!');
});

// ********** GITHUB **********
router.get('/github', Auth.githubLogIn);
router.get('/github/callback',
  Auth.githubCallback, Auth.githubSendToken
);

// ********** GOOGLE **********
router.get('/google', Auth.googleLogIn);
router.get('/google/callback',
  Auth.googleCallback, Auth.googleSendToken);

// ********** FACEBOOK **********
router.get('/facebook', Auth.facebookLogIn);
router.get('/facebook/callback',
  Auth.facebookCallback, Auth.facebookSendToken);

// ********** AUTH USER ROUTES **********
router.get('/current-user',
  (req, res, next) => {
    res.send(req.user);
  }
);
router.get('/logout',
  (req, res, next) => {
    req.logout();
    res.redirect('/');
  }
);

// API ROUTES
module.exports = router;