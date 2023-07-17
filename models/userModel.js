const mongoose = require('mongoose'); // Erase if already required

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lasttname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('User', userSchema);