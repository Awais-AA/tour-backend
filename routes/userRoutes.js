const router=require('express').Router()
const {updateUser}=require('../routesHandler/user/updateUserHandler')
const {currentUser}=require('../routesHandler/user/currentUserHandler')
const {deleteUser}=require('../routesHandler/user/deleteUserHandler')
const {getAllUser}=require('../routesHandler/user/userHandler')
const {verifyTokenAdmin}=require('../middleware/auth')
const {verifyTokenAndAuthorization}=require('../middleware/auth')



router.put('/update-user/:id',verifyTokenAndAuthorization, updateUser)
router.delete('/delete-user/:id',verifyTokenAdmin, deleteUser)
router.get('/user/:id', currentUser)
router.get('/users', getAllUser)


module.exports=router