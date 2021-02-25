const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected !!!")
});


app.use(cors())
app.use(express.json())
const alienRouter = require('./routes/signup')
app.use('/signup',alienRouter);


app.use(cors())
app.use(express.json())
const loginRouter = require('./routes/login')
app.use('/login',loginRouter);

app.listen(3000 , ()=>{
    console.log("Server started")
})