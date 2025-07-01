const axios = require('axios')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')


const login = async (email,password) => {
    User.findOne(email)
    .then(user =>{
        if(!user){
            return {error: 'User not found', status: 404}
        }
        const isValidPassword = bcrypt.compareSync(password,user.password)
        if(!isValidPassword){
            return {error: 'Invalid password', status: 401}
        }
            const token = jwt.sign({email},process.env.SECRET_KEY)
            return {user,token}
        })
        .catch(error =>{
            return {error: 'Error', status: 500}
        })
}
const register = async () => {

}
const verify = async () => {

}