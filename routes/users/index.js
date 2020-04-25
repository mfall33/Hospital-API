var router = require('express').Router(); 
// individual products routes

router.use("/admins", require("./admins"));
router.use("/sps", require("./sps"));
router.use("/gps", require("./gps"));

router.get('/', function(req, res, next) { 
res.send("users");

});

 module.exports = router;