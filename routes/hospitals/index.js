var router = require('express').Router(); 
const bodyParser = require("body-parser");
var Hospitals = require("../../models/hospital");

router.use(bodyParser.json());

// READ
router.get('/', function(req, res, next) { 
	var hospitalsProjection = { 
        __v: false,
        _id: false
    };

    Hospitals.find({}, hospitalsProjection, function (err, hospitals) {
        if (err) return next(err);
        res.json(hospitals);
    });    
});

// CREATE
router.post('/', function(req, res, next) { 
	// need to test these with postman
	// console.log(req.body);
	// body {hospitalName, bedAmount}
	 Hospitals.addHospital(req.body, (results, err) => {
	 	if (err) throw err;
  		console.log(results);
  	});
	 res.redirect("/api");
});

// UPDATE
// DELETE

 module.exports = router;