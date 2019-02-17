
var createError = require('http-errors');
var auth = function(req, res, next){


    
   //check header or url parameters or post parameters for token
   var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        req.token = token;
        next();
    }else{
       return res.status(403).json({ error : "ForbiddenError", message: "Unauthorized"  })
    }
}

module.exports = auth;