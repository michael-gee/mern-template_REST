const JWT = require('jsonwebtoken'),
      config = require('../config/keys');

exports.generateToken = (user) => {
  return JWT.sign({
    iss: 'MERN Template Token',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, config.jwtSecret);
}
