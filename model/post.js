const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  author_id: { type: String, require: true },
  is_public: { type: Boolean, require: true, default: false },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('post', postSchema);
