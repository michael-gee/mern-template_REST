const mongoose = require('mongoose');
const config = require('../config/keys');
mongoose.Promise = global.Promise;
let MONGO_URL;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
  MONGO_URL = process.env.MONGODB_URI
} else {
  mongoose.connect(config.mongoConfig);
  MONGO_URL = config.mongoConfig;
}

const db = mongoose.connection;

db.on('error', err => {
  console.log(`There was an error connecting to the database: ${err}`)
});
db.once('open', () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGO_URL}`
  )
});

module.exports = db;