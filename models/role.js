'use strict'
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const roleSchema = new Schema({
     ruleName: String,
     description: String
 });

 const Roles = mongoose.model('Roles', roleSchema);

 module.exports = Roles;