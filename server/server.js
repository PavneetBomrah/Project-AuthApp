const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.js')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000 
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('Connected to MongoDB')
})
.catch((err) =>{
    console.log('Error connecting to MongoDB',err)
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("App is Running")
})
app.use('/api/auth',authRoutes)


app.listen(PORT,()=>{
    console.log(`Backend has started running at http://localhost:${PORT}`)
})