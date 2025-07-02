const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("auth route")
})

router.get('/verify/:token',async (req,res)=>{
    const token = await authController.verify(req.params.token)
    if(token.valid){
        res.status(200).send('Token Verified')
    }
    else{
        res.status(401).send('Invalid Token')
    }
})

router.get('/login',async (req,res)=>{
    const {email,password} = req.query
    // const {user,token} = authController.login(email,password)
    const result = await authController.login(email, password)
    if (result.error) {
        return res.status(result.status).json({ error: result.error });
    }
    res.json(result)  
})

router.get('/register',async (req,res)=>{
    const {name,email,password} = req.query
    const result = await authController.register(name, email, password);
    if (result.error) {
        return res.status(result.status).json({ error: result.error });
    }
    res.json(result);
})

module.exports = router