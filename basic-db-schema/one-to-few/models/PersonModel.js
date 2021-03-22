const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String },
  address: [ { 
      address1: String,
      address2: String,
      address3: String,
      postcode: String,
      state: String,
      country: String
    }]
});

const PersonModel = mongoose.model('person', personSchema);

module.exports = PersonModel;