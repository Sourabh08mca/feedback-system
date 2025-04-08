const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const FeedbackModel = require('./models/Feedback')


const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/feedback-system")

app.post('/' ,(req ,res) => {
    FeedbackModel.create(req.body)
    .then(feedback => res.json(feedback))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running ")
})