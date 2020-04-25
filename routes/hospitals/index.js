var router = require('express').Router(); 
// individual products routes
router.get('/', function(req, res, next) { 
	res.send("hospital");
});

router.post('/', function(req, res, next) { 
	// need to test these with postman
	// body {hospitalName, bedAmount}
	 Hospital.addNewHospital(req.body, (results) => {
  	console.log(results);
  });
});



 module.exports = router;