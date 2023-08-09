const express = require('express')
const cors = require('cors')
const app = express()
const getJobs = require('./controllers/getJobs.js')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/jobs', getJobs)

app.listen(4000, ()=>{
  console.log('server running...')
})

