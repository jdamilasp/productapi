

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var userSchema = new mongoose.Schema({
    firstName: { type : String, required : true },
    email: { type : String , index: true, unique: true, 
        validate : [ validateEmail, "Email address is invalid format"],
        required : true, dropDups: true },
    password: { type : String, required : true },
    signUpStatus : { type: String, required: true, enum: ["NEW","VERIFY"]}
})
userSchema.plugin(uniqueValidator, { message: "Error, expected `email` to be unique." });

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;