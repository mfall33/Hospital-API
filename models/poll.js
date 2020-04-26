var db = require("../db");
var Schema = db.Schema;

var PollSchema = new Schema({
   		authorName: {
            type: String,
            required: true
        },
        pollStatus: {
            type: String,
            required: true
        },
        patientID: {
            type: ObjectId,
            required: true
        },
        urgency: {
            type: String,
            required: false
        }, 
        timestamps: true
        // ^ make sure this works when we come to creating polls
});

// turn on created date automation

let Poll = db.model("Poll", PollSchema);
module.exports = Poll;