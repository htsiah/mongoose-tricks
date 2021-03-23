const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partSchema = new Schema({
  name: { type: String },
  cost: { type: Schema.Types.Decimal128 },
  price: { type: Schema.Types.Decimal128 }
});

const PartModel = mongoose.model('part', partSchema);

module.exports = PartModel;