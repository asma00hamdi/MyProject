const mongoose = require ('mongoose')

const message = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    sender: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    receiver: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });
  module.exports = mongoose.model('message',message);
  