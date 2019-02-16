
var createError = require('http-errors');

const auth = function(req, res, next){

    //next(createError(403));
    next();
}

module.exports = auth;