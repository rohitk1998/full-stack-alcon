const express = require('express')
const router = express.Router()
const Alien = require('../models/signup')


// router.get('/' ,async(req,res)=>{
//    try{
//           const aliens = await Alien.find()
//           res.json(aliens)
//    }catch(error){
//       console.log(error)
//    }
// })

router.post('/', async(req,res) => {
   
    const alien = new Alien({
        Username: req.body.username,
        Email: req.body.email,
        Password:req.body.password
    })
    try{
        const a1 =  await alien.save() 
        console.log(a1)
    }catch(err){
        console.log("error ")
    }
})


// router.get('/:email&:password', async(req,res)=>{

//     try{
//         const aliens = await Alien.find({password:req.params.password , email:req.params.email})
//         res.json(aliens)
//  }catch(error){
//     console.log(error)
//  }
// })

module.exports = router