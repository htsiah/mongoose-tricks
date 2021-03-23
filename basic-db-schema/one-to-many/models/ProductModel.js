const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  manufacturer: { type: String },
  parts: [ { type: Schema.Types.ObjectId, ref: "part" }]
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;