const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const PersonModel = require('../models/PersonModel');

const getPerson = async (req, res, next) => {
    try {
        // Search query
        const persons = await PersonModel.find({});
        res.status(200).json(persons.map((person) => person.toObject({ getters: false })));
      } catch {
        const error = new Error('Failed to get documents.');
        return next(error);
      }
};

const getPersonById = async (req, res, next) => {
    const id = req.params.id;

    try {
      // Search query
      const person = await PersonModel.findById(id);     
      res.status(200).json(person.toObject({ getters: false }));
    } catch {
      const error = new Error('Failed to get document.');
      return next(error);
    }
};

const createPerson = async (req, res, next) => {

    const { name, address } = req.body;
    const newPerson = new PersonModel({
      id: uuidv4(),
      name: name,
      address: address,
    });
  
    try {
        newPerson.save();
    } catch (err) {
      const error = new Error(' Creating document failed.');
      return next(error);
    }
  
    res.status(201).json(newPerson);
};

const updatePersonById = async (req, res, next) => {  
    const { name, address } = req.body;
    const id = req.params.id;
  
    let person;
    try {
        person = await PersonModel.findByIdAndUpdate(id, {
        name: name,
        address: address,
      });
    } catch {
      const error = new Error('Updating document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deletePersonById = async (req, res, next) => {
    const id = req.params.id;
    
    try {
      await PersonModel.findByIdAndDelete(id);
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

exports.getPerson = getPerson;
exports.getPersonlById = getPersonById;
exports.createPerson = createPerson;
exports.updatePersonById = updatePersonById;
exports.deletePersonById = deletePersonById;