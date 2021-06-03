const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lessons: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Course', CourseSchema);
