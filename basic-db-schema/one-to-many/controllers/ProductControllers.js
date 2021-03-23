const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const ProductModel = require('../models/ProductModel');

const getProduct = async (req, res, next) => {
    try {
        // Search query
        const products = await ProductModel.find({}).populate("parts");
        res.status(200).json(products.map((product) => product.toObject({ getters: false })));
      } catch {
        const error = new Error('Failed to get documents.');
        return next(error);
      }
};

const getProductById = async (req, res, next) => {
    const id = req.params.id;

    try {
      // Search query
      const product = await ProductModel.findById(id).populate("parts");     
      res.status(200).json(product.toObject({ getters: false }));
    } catch {
      const error = new Error('Failed to get document.');
      return next(error);
    }
};

const createProduct = async (req, res, next) => {
    const { name, manufacturer } = req.body;
    const newProduct = new ProductModel({
      id: uuidv4(),
      name: name,
      manufacturer: manufacturer
    });
  
    try {
        newProduct.save();
    } catch (err) {
      const error = new Error(' Creating document failed.');
      return next(error);
    }
  
    res.status(201).json(newProduct);
};

const updateProductById = async (req, res, next) => {  
    const { name, manufacturer } = req.body;
    const id = req.params.id;

    let product;
    try {
        product = await ProductModel.findByIdAndUpdate(id, {
            name: name,
            manufacturer: manufacturer,
        });
    } catch {
      const error = new Error('Updating document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deleteProductById = async (req, res, next) => {
    const id = req.params.id;
    
    try {
      await ProductModel.findByIdAndDelete(id);
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const addPartById = async (req, res, next) => {
    const id = req.params.id;
    const { partid } = req.body;
    
    try {
      const product = await ProductModel.findOne({_id: id});
      product.parts.push(partid);
      product.save();
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deletePartById = async (req, res, next) => {
    const id = req.params.id;
    const { partid } = req.body;
    
    try {
        product = await ProductModel.findByIdAndUpdate(id, { 
            $pull: { parts: partid } 
        });
    } catch {
        const error = new Error('Deleting part failed.');
        return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

exports.getProduct = getProduct;
exports.getProductlById = getProductById;
exports.createProduct = createProduct;
exports.updateProductById = updateProductById;
exports.deleteProductById = deleteProductById;
exports.addPartById = addPartById;
exports.deletePartById = deletePartById;