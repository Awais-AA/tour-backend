const router=require('express').Router()
const {loginHandler}=require('../routesHandler/auth/loginHandler')
const {registerHandler}=require('../routesHandler/auth/registerHandler')
const {logoutHandler}=require('../routesHandler/auth/logoutHandler')

router.post('/register', registerHandler)
router.post('/login', loginHandler)
router.get('/logout', logoutHandler)
router.post('/forget-password', registerHandler)



module.exports=router