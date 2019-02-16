var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash')
var Users = require('./../models/users');
var TOKEN = require('./../auth/token');
var CONSTANTS = require('./../config/constants');

/**
 * @api {post} /api/v1/users/password/validate User Password Validate
 * @apiVersion 1.0.0
 * @apiName UserPasswordValidate
 * @apiGroup Users 
 * @apiDescription Check, Given `email` matach to correct format and `email` exist in DB. if email exist, password convert to hash and checking hash with DB.
 * @apiPermission none
 * 
 * @apiParam {String} email User `email` is requried
 * @apiParam {String} password User `password` is requried
 * @apiParam {Boolean} [rememberme] User `rememberme` is optional. default `false`.
 * 
 * @apiSuccessExample {json} Success-Response:   
 *     {
 *       "status": "valid",
 *       "email" : "abc@gmail.com", 
 *       "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *     }
 *
 * @apiError ValidationError `email` and `password` are required  
 * @apiError ValidationError `password` is required  
 * @apiError EmailValidationError `email` address is invalid format  
 * @apiError PasswordValidationError `password` is invalid 
 * @apiError NotFoundError `email` not found value : `abc@gmail.com` 
 * 
 * @apiErrorExample Error-Response:
 *     Error 404 Not Found
 *     {
 *       "error": "NotFoundError",
 *       "message": "email not found. value : `abc@gmail.com`"
 *     }
 */
router.post('/password/validate', function(req, res, next) {
  
  var emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!req.body.email){
    return res.status(400).json({ error: "ValidationError", message: "`email` is required"});
  
  }else if(!req.body.password){
    return res.status(400).json({ error: "ValidationError", message: "`password` is required"});
  
  }else if(!emailRegx.test(String(req.body.email).toLowerCase())){
    return res.status(400).json({error : "EmailValidationError", message: "`email` is invalid format. value: `" + req.body.email +"`"})
  
  }else{
    
    Users.findOne({ email : req.body.email}, function(err, result){
      if(err){
        return res.status(500).json({ err : err })
            
      }else{
        if(result){          
          // TODO : 01 : Here need convert password to hash and match it
          // NOTE : rememberme -> true. jwt token expire time should be 30 days. false -> 2 days 
          // var hashPassword = passwordHash.generate(req.body.password);
          // if(result.password === hashPassword)
          if(result.password === req.body.password){
            return res.status(200).json({ status : 'valid', email : req.body.email, token : TOKEN.createToken(result)});
          }else{
            return res.status(200).json({ error : "PasswordValidationError", message: "`password` is invalid" });
          }
        }else{
          return res.status(404).json({ error : "NotFoundError", message: "email not found. value: `" + req.body.email + "`"  })
        }
      }
    });
  }
});


/**
 * @api {post} /api/v1/users Create New User
 * @apiVersion 1.0.0
 * @apiName CreateUser
 * @apiGroup Users 
 * @apiDescription Create New User for Given FirstName, Email, Password. If not exist in DB given email.
 * @apiPermission none
 * 
 * @apiParam {String} firstName User First Name
 * @apiParam {String} email User Email
 * @apiParam {String} password User Password. Minimum length 6
 * 
 * 
 * @apiSuccessExample {json} Success-Response:   
 *     {
 *       "status": "success",
 *       "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" 
 *     }
 *
 * @apiError ValidationError `firstName`, `email` and `password` are required
 * @apiError EmailValidationError `email` address is invalid format
 * @apiError UserAlreadyExist Given `email` Already in DB
 * 
 *
 * @apiErrorExample Error-Response:
 *     Error 404 Bad Request
 *     {
 *       "error": "ValidationError",
 *       "message": "User validation failed: password: Path `password` is required."
 *     }
 */
router.post('/', function(req, res, next) {

  const newUser = new Users({ 
    email : req.body.email, 
    firstName: req.body.firstName, 
    password: req.body.password,
    signUpStatus: CONSTANTS.users.new
  });

  newUser.save(function(err, result){    
    if(err){        
      if(err.message === "User validation failed: email: Error, expected `email` to be unique."){
        return res.status(400).json({ error: "UserAlreadyExist", message: err.message + " Value: `" + req.body.email +"`." });
      }else if(err.message === "User validation failed: email: Email address is invalid format"){
        return res.status(400).json({ error: "EmailValidationError", message: err.message + " Value: `" + req.body.email +"`." });
      }else{
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
    return res.status(200).json({ status: "success", token: TOKEN.getToken(), email: req.body.email });
  })  
});



module.exports = router;
