var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Supplier_name: {
        type:String,
        required:true
    },
    Supplier_ID:{
        type:Number,
        unique:true,
        required:true
    },  
    email :{
        type:String,
        unique:true,
        required:true
},
age:{
    type : Number
 }
});

var Supplier = mongoose.model('SupplierInformation', UserSchema);

module.exports = Supplier;