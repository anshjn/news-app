const mongoose = require('mongoose');

const topStoriesSchema = new mongoose.Schema({
    article: {
        type: Object,
        required: true
      }
})

module.exports = new mongoose.model('top-stories', topStoriesSchema);