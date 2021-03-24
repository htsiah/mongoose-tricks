const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostSchema = new Schema({
  name: { type: String },
  ipaddr: { type: String }
});

const HostModel = mongoose.model('host', hostSchema);

module.exports = HostModel;