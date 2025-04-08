const mongoose = require('mongoose')


const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String
})

const FeedbackModel = mongoose.model("feedback",FeedbackSchema)
module.exports = FeedbackModel