

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var passwordHash = require('password-hash');
var uuidv4 = require('uuid/v4');
var token = require('./../auth/token');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var userSchema = new mongoose.Schema({
    firstName: { type : String, required : true },
    email: { type : String , index: true, unique: true, 
        validate : [ validateEmail, "Email address is invalid format"],
        required : true, dropDups: true },    
    password: { type : String, required : true, minlength : 6 },
    signUpStatus : { type: String, required: true, enum: ["NEW","VERIFY"]},
    apiKey: { type: String},
    token: { type: String }
})
userSchema.plugin(uniqueValidator, { message: "Error, expected `email` to be unique." });
userSchema.pre('save', function(next) {
    if(!passwordHash.isHashed(this.password)){
        this.password = passwordHash.generate(this.password);        
    }
    if(!this.apiKey){
        this.apiKey = uuidv4()
    }
    if(!this.token){
        this.token = token.createToken(this);
    }
    next();
  });
  
var userModel = mongoose.model('User', userSchema);

module.exports = userModel;