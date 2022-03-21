/**
 * Required modules for model
 */
const mongoose = require('mongoose');

/**
 * Model schema
 */
const UserSchema = new mongoose.Schema({
  name: String
});

/**
 * Export of model
 */
module.exports = mongoose.model('User', UserSchema);
 