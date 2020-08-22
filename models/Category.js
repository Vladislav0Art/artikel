const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  iconColor: {
    type: String,
    required: false
  }
});


module.exports = Category = mongoose.model('category', CategorySchema);