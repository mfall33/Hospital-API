var db = require("../db");
var Schema = db.Schema;

var PatientSchema = new Schema({
   			firstName:{
        type: String,
        required: true},
            lastName:{
        type: String,
        required: true},
            DOB:{
        type: Date,
        required: true,},
            entryDate:{
        type: Date,
        required: true},
            status:{
        type: String,
        required: false},
            illness:{
        type: String,
        required: true},
            hospitalName:{
        type: String,
        required: true}  
});

let Patient = db.model("Patient", PatientSchema);
module.exports = Patient;