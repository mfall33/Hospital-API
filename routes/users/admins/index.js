var router = require('express').Router(); 
// individual products routes
router.get('/', function(req, res, next) { 
res.send("admins");

});

 module.exports = router;