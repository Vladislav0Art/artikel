const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  descr: {
    type: String,
    required: false,
  },
  href: {
    type: String,
    required: true
  },
  catId: {
    type: String,
    required: true,
  }
});


module.exports = Link = mongoose.model('link', LinkSchema);