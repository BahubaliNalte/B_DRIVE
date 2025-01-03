const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        trim: true,
        lowercase: true,
        unique: true,
        minilength: ['3', 'username msut be at least 3 character long ']
    },

    email:{
        type: String,
        required:true,
        trim: true,
        lowercase: true,
        unique: true,
        minilength: ['3', 'username msut be at least 3 character long ']
    },

    password:{
        type: String,
        required:true,
        trim: true,
        lowercase: true,
        unique: true,
        minilength: ['3', 'username msut be at least 3 character long ']
    }
})

const user = mongoose.model('user', userSchema);

module.exports = user;