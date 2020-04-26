var db = require("../db");
var Schema = db.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    joinedDate: Date,
    DOB: Date,
    role: String
})

const adminUserSchema = new Schema({
    user: userSchema,
    role: "Admin"
})

const spUserSchema = new Schema({
    user: userSchema,
    role: "SP"
})

const gpUserSchema = new Schema({
    user: userSchema,
    role: "GP"
})

let Admin = db.model("Admin", adminUserSchema);
let SP = db.model("SP", spUserSchema);
let GP = db.model("GP", gpUserSchema);

module.exports.SP = SP;
module.exports.GP = GP;
module.exports.Admin = Admin;

