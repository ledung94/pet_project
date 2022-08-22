const message = require("../enum/message")
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization')

    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({
        success: false,
        message: message.TOKEN_NOT_FOUND
    })

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req._id = decoded._id
        next()
    } catch (error) {
        console.log(error.message);
        res.status(403).json({
            success: false,
            message: message.TOKEN_INVALID
        })
    }
}

module.exports = auth