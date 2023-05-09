const jwt = require('jsonwebtoken')
const User = require('../models/user')

const verifyToken = async (req, res, next) => {
    if (req.headers?.authorization?.startsWith('Bearer')) {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1]
        try {
            const verify = jwt.verify(token, process.env.ACCESS_TOKEN)
            
            if (verify) {
                req.user = await User.findById({ _id: verify.id }).select('-password').select('-refreshToken')
                if(req.user){
                    next()
                }
                if(!req.user){
                    res.status(500)
                    res.send('user not found')
                    return
                }

                

            }
            if (!verify) {
                res.status(401)
                throw new Error('User not authroized')
            }

        } catch (error) {
            res.status(403)
            res.send(error.message)

        }

    }
    if (!req.headers.authorization) {
        res.status(401)
        res.send('No token, Not Authroized')
    }
}
const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        const isAdmin = req.user.isAdmin

        if (!isAdmin) {
            res.status(401)
            throw new Error('You are not Admin')
        }

        if (isAdmin) {
            next()
        }

    })}
    const verifyTokenAndAuthorization = (req, res, next) => {
        
        verifyToken(req, res, () => {
            const isAdmin = req.user.isAdmin

            currentUserId=(req.user._id.toString() == req.params.id)?true:false
            if (isAdmin || currentUserId) {
                next()
            }
            if(!currentUserId){
            res.status(401)
                throw new Error("Not Authoriozed")
            }
            
        })
    
}

module.exports = { verifyToken, verifyTokenAdmin,verifyTokenAndAuthorization}