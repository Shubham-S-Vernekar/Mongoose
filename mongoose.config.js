var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/Collage';

module.exports = function() {
    var db = mongoose.connect(uri);
    console.log('DB Connection');
    require('../models/model.supplier');
    return db;
};