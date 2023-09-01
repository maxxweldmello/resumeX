const router = require('express').Router()//router
const bcrypt = require('bcryptjs')//hash
const jwt = require('jsonwebtoken')//cookies
const User = require('../model/User')//User.js path
const {RegisterV, LoginV} = require('./validation')//validation path

router.post('/signup', async (req, res) => {
    const isNotValid = RegisterV(req.body)
    if (isNotValid) return res.json({isNotValid})
    const {password: inPass, confpassword: inConfPass, username, email} = req.body
    //hashing
    const password = await bcrypt.hash(inPass, 10)
    const confpassword = await bcrypt.hash(inConfPass, 10)
    const newUser = new User({
        username: username,
        email: email,
        password: password,
        confpassword: confpassword
    })

    const oldUser = await User.findOne({ email: req.body.email})
    if(oldUser) return res.json({message: 'This Email has already registered!'})
    try{
        newUser.save()//stores data in database
    } catch(err){
        console.log(err)
    }
})



router.put('/login', async (req, res) => {
    const isNotValid = LoginV(req.body)
    if (isNotValid) return res.json({isNotValid})
    const user = await User.findOne({ email: req.body.email})//find outs usinf database
    if(!user) return res.json({message: 'Email or Password is incorrect'})
    const ValidPass = await bcrypt.compare(req.body.password, user.password)
    if (!ValidPass) return res.json({message: 'Email or Password is incorrect'})

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { //token for cookies
        expiresIn: process.env.JWT_EXPIRES
    })
    const cookieOptions = {
        httpOnly: true,
        expiresIn: new Date(Date.now() * process.env.COOKIE_EXPIRES * 25 * 60 * 60 * 1000)
    }
    res.cookie('logUser', token, cookieOptions)
    res.json({message: 'User has been logged in:!'})
})


module.exports = router