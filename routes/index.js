var router = require('express').Router(); 
// mount our 'products' router onto the API router
// let's mount a few more
router.use('/hospitals', require('./hospitals'));
router.use('/patients', require('./patients'));
router.use('/users', require('./users'));

module.exports = router;