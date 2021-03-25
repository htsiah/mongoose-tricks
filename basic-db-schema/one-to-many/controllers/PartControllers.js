const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const PartModel = require('../models/PartModel');
const ProductModel = require('../models/ProductModel');

const getPart = async (req, res, next) => {
    try {
      // Search query
      const parts = await PartModel.find({});
      res.status(200).json(parts.map((part) => part.toObject({ getters: false })));
    } catch {
      const error = new Error('Failed to get documents.');
      return next(error);
    }
};

const getPartById = async (req, res, next) => {
    const id = req.params.id;

    try {
      // Search query
      const part = await PartModel.findById(id);     
      res.status(200).json(part.toObject({ getters: false }));
    } catch {
      const error = new Error('Failed to get document.');
      return next(error);
    }
};

const createPart = async (req, res, next) => {
    const { name, cost, price } = req.body;
    const newPart = new PartModel({
      id: uuidv4(),
      name: name,
      cost: cost,
      price: price,
    });
  
    try {
        newPart.save();
    } catch (err) {
      const error = new Error(' Creating document failed.');
      return next(error);
    }
  
    res.status(201).json(newPart);
};

const updatePartById = async (req, res, next) => {  
    const { name, cost, price } = req.body;
    const id = req.params.id;

    let part;
    try {
        part = await PartModel.findByIdAndUpdate(id, {
            name: name,
            cost: cost,
            price: price,
        });
    } catch {
      const error = new Error('Updating document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deletePartById = async (req, res, next) => {
    const id = req.params.id;
    
    try {
      await PartModel.findByIdAndDelete(id);

      // Delete Product Ref
      let products = await ProductModel.find({"parts": { $in : [id] }});
      products.forEach( product => {
        product.parts.pull(id);
        product.save();
      });
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

exports.getPart = getPart;
exports.getPartlById = getPartById;
exports.createPart = createPart;
exports.updatePartById = updatePartById;
exports.deletePartById = deletePartById;