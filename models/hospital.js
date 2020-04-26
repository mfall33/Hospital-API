var db = require("../db");
var Schema = db.Schema;

var HospitalSchema = new Schema({
    hospitalName:{
        type: String,
        required: true,
        unique: true},
    bedAmount:{
        type: Number,
        required:false,
        unique:false}
});

let Hospital = db.model("Hospital", HospitalSchema);
module.exports = Hospital;

module.exports.addHospital = function(hospitalCreds, callback){
    let hospital = new Hospital();
    hospital.hospitalName = hospitalCreds.hospitalName;
    hospital.bedAmount = hospitalCreds.bedAmount;
    hospital.save((err, result) => {
        // Duplicate entry for existing entry is 409 status code
        if(err) console.log(err);
        // need to pass res in so we can redirect in this case ^
        else{
         callback({
          messaage:"New Hospital Added!",
          hospital:result
        });
     }
    });
}

module.exports.removeHospital = function(hospitalName){
    
}
