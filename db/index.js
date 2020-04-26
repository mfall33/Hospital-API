var mongoose = require("mongoose");

mongoose.connect(process.env.DBPATH)
  .then(function(data){
    console.log("DB Connection established..." + process.env.DBPATH);
  })
  .catch((err) => {
  	if(err) throw err;
  });

module.exports = mongoose;
