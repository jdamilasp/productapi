var jwt = require('jsonwebtoken');

const tmpToken = require('./../config/dummy').jwt;
const tmpSecret = require('./../config/dummy').secret;

const createToken = function(user){
    return jwt.sign({ email : user.email, _id : user._id, signUpStatus: user.signUpStatus }, tmpSecret);
}

const removeToken = function(){

}

const getToken = function(){
    return tmpToken;
}
const setToken = function(code){
    tmpToken = code;
}
const token = {
    getToken : getToken,
    setToken : setToken,
    createToken : createToken,
    removeToken : removeToken
}

module.exports = token;