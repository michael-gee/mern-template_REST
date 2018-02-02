const mongoose = require('mongoose');
const { Schema } = mongoose;

const MockEntrySchema = new Schema({
  data: {
    type: Object,
    required: true
  }
});

mongoose.model('mock_entries', MockEntrySchema);