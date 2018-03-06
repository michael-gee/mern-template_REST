const mongoose = require('mongoose');
const { Schema } = mongoose;

const MockEntrySchema = new Schema({
  data: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('mock_entries', MockEntrySchema);