var db = require("../db");
var Schema = db.Schema;

var IllnessSchema = new Schema({
    illnessName:{
        type: String,
        required: true,
        unique: true}
});

let Illness = db.model("Illness", IllnessSchema);
module.exports = Illness;