const User=require('../../models/user')
const asyncHandler=require('express-async-handler')


const currentUser=asyncHandler(async(req,res)=>{
    const result =await User.findById(req.params.id).select('-password').select('-refreshToken')
    if(!result)
    {
        res.status(500)
        return
    }
    res.status(200).json(result)

})

module.exports={currentUser}