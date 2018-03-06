const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      passport = require('passport'),
      cors = require('cors');
      dbConnection = require('./db'),
      config = require('./config/keys'),
      port = process.env.PORT ? process.env.PORT : 5000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "development") {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
  }
  res.header('Access-Control-Allow-METHODS', 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description");
  next();
});

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api', require('./api/rootRoutes'));
app.use('/auth', require('./api/authRoutes'));

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});
