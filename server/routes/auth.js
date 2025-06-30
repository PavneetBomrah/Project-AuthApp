const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("auth route")
})

router.get('/verify/:token',(req,res)=>{
    if(req.params.token == 'hola'){
        res.status(200).send('Token Verified')
    }
    else{
        res.status(401).send('Invalid Token')
    }
})

module.exports = router