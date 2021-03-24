const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const HostModel = require('../models/HostModel');

const getHost = async (req, res, next) => {
    try {
        // Search query
        const Hosts = await HostModel.find({});
        res.status(200).json(Hosts.map((Host) => Host.toObject({ getters: false })));
      } catch {
        const error = new Error('Failed to get documents.');
        return next(error);
      }
};

const getHostById = async (req, res, next) => {
    const id = req.params.id;

    try {
      // Search query
      const Host = await HostModel.findById(id);     
      res.status(200).json(Host.toObject({ getters: false }));
    } catch {
      const error = new Error('Failed to get document.');
      return next(error);
    }
};

const createHost = async (req, res, next) => {
    const { name, ipaddr } = req.body;
    const newHost = new HostModel({
      id: uuidv4(),
      name: name,
      ipaddr: ipaddr
    });
  
    try {
        newHost.save();
    } catch (err) {
      const error = new Error(' Creating document failed.');
      return next(error);
    }
  
    res.status(201).json(newHost);
};

const updateHostById = async (req, res, next) => {  
    const { name, ipaddr } = req.body;
    const id = req.params.id;

    let Host;
    try {
        Host = await HostModel.findByIdAndUpdate(id, {
            name: name,
            ipaddr: ipaddr,
        });
    } catch {
      const error = new Error('Updating document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

const deleteHostById = async (req, res, next) => {
    const id = req.params.id;
    
    try {
      await HostModel.findByIdAndDelete(id);
    } catch {
      const error = new Error('Deleting document failed.');
      return next(error);
    }
  
    res.status(200).json({ status: 'success' });
};

exports.getHost = getHost;
exports.getHostlById = getHostById;
exports.createHost = createHost;
exports.updateHostById = updateHostById;
exports.deleteHostById = deleteHostById;