var router = require('express').Router(); 

router.get("/", (req, res) => {
	res.send("Welcome to the Hospital API!")

});
		
router.use('/hospitals', require('./hospitals'));
router.use('/patients', require('./patients'));
router.use('/users', require('./users'));

module.exports = router;