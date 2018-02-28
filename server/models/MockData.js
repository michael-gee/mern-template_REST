const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostsSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  content: {
    type: Array
  },
});

const PostsModel = mongoose.model('posts', PostsSchema);

module.exports = PostsModel;