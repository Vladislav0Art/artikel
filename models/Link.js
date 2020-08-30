const mongoose = require('mongoose');
const { stringify } = require('uuid');
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
  },
  ogInfo: {
    type: Object,
    ogTitle: {
      type: String,
      default: ''
    },
    ogDescription: {
      type: String,
      default: ''
    },
    ogImage: {
      type: Object,
      url: {
        type: String,
        default: ''
      }
    }
  }
});


module.exports = Link = mongoose.model('link', LinkSchema);