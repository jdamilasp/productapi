var express = require('express');
var router = express.Router();

/** POST : login */
router.post('/login', function(req, res, next){

  res.status(200).json({ message : req.url , token: "JWT_TOKEN"})

});

/** POST : signup */
router.post('/signup', function( req, res){

  res.status(200).json({ message : req.url })
});

module.exports = router;
