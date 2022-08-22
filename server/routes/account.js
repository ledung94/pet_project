const express = require("express")
const router = express.Router()
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const message = require("../enum/message");
const Account = require("../model/Account");

// @route POST api/account/login
// @decs Login
// @access public

router.post('/login', async (req, res) => {
    const { mail, password } = req.body;

    if(!mail || !password) return res.status(400).json({
        success: false,
        message: message.LOGIN_ERROR
    })

    try {
        const account = await Account.findOne({mail})

        if(!account) return res.status(400).json({
            success: false,
            message: message.ACCOUNT_NOT_EXISTED
        })

        const passwordValid = await argon2.verify(account.password, password)
        if(!passwordValid) return res.status(400).json({
            success: false,
            message: message.LOGIN_ERROR
        })

        const token = jwt.sign(
            {
                _id: account._id,
            },
            process.env.TOKEN_SECRET
        )

        res.json({ 
            success: true, 
            message: message.LOGIN_SUCCESS, 
            token });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

// @route POST api/account/register
// @decs Create
// @access public

router.post('/register', async (req, res) => {
    const { name, mail, password } = req.body;

    if(!mail || !password || !name) return res.status(400).json({
        success: false,
        message: message.REGISTER_ERROR
    })

    try {
        const account = await Account.findOne({mail})

        if(account) return res.status(400).json({
            success: false,
            message: message.ACCOUNT_EXISTED
        })

        const hashedPassword = await argon2.hash(password)
        const newAccount = new Account({
            name,
            password: hashedPassword,
            mail
        })

        await newAccount.save()

        const token = jwt.sign(
            {
                _id: account._id,
            },
            process.env.TOKEN_SECRET
        )

        res.json({ 
            success: true, 
            message: message.REGISTER_SUCCESS, 
            token });
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

module.exports = router