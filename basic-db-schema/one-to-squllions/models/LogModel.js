const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    msg: { type: String },
    host: { type : Schema.Types.ObjectId}
  }, { 
    timestamps: true 
  }
);

const LogModel = mongoose.model('log', logSchema);

module.exports = LogModel;