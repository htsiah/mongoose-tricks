const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const LogModel = require('../models/LogModel');

const getLog = async (req, res, next) => {
    try {
        // Search query
        const Logs = await LogModel.find({});
        res.status(200).json(Logs.map((Log) => Log.toObject({ getters: false })));
      } catch {
        const error = new Error('Failed to get documents.');
        return next(error);
      }
};

const getLogById = async (req, res, next) => {
    const id = req.params.id;

    try {
      // Search query
      const Log = await LogModel.findById(id);     
      res.status(200).json(Log.toObject({ getters: false }));
    } catch {
      const error = new Error('Failed to get document.');
      return next(error);
    }
};

const createLog = async (req, res, next) => {
    const { msg, host} = req.body;
    const newLog = new LogModel({
      id: uuidv4(),
      msg: msg,
      host: host
    });
  
    try {
        newLog.save();
    } catch (err) {
      const error = new Error(' Creating document failed.');
      return next(error);
    }
  
    res.status(201).json(newLog);
};

const updateLogById = async (req, res, next) => {  
    const { msg, host } = req.body;
    const id = req.params.id;

    let Log;
    try {
        Log = await LogModel.findByIdAndUpdate(id, {
            msg: msg,
            host: host
        });
    } catch {
      const error = new Error('Updating document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deleteLogById = async (req, res, next) => {
    const id = req.params.id;
    
    try {
      await LogModel.findByIdAndDelete(id);
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

exports.getLog = getLog;
exports.getLoglById = getLogById;
exports.createLog = createLog;
exports.updateLogById = updateLogById;
exports.deleteLogById = deleteLogById;