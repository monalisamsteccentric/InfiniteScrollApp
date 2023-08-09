const { Schema, model } = require('mongoose')

const JobsSchema = new Schema({
    "Job Title": {
        type: String,
        required: true, 
    },
    "Salary Estimate": {
        type: String,
        required: true, 
    },
    "Job Description": {
        type: String,
        required: true, 
    },
    "Company Name": {
        type: String,
        required: true, 
    },
    "Location": {
        type: String,
        required: true, 
    },
    "Size": {
        type: String,
        required: true, 
    }
    , "Easy Apply": {
        type: String,
        required: true, 
    } 
})

const jobs = model('jobs', JobsSchema)

module.exports = jobs