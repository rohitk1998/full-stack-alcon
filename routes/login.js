const express = require('express')
const router = express.Router()
const Login = require('../models/login')
const Alien = require('../models/signup')




router.post('/', async(req,res) => {
   
    const alien = new Login({
        Email: req.body.email,
        Password:req.body.password
    })
   
    const a1 =  await Alien.findOne({ Email : `${alien.Email}`, Password : `${alien.Password}` });
    if(a1 !== null){
        console.log(`hey ${a1.Username} you have logged in sucessfully !!`)
        res.json(a1);
    }
    else{
        console.log("please provide right credentials")
    }
})



module.exports = router