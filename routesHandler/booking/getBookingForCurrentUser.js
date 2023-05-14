const BookedPoll=require('../../models/bookedPolling')
const asyncHandler=require('express-async-handler')

const getBookedCurrentUser=asyncHandler( async(req,res)=>{
    req.user="645609c32bef742bb4c9f41f"

    try {
        const result=await BookedPoll.find().where('userWhoBooked.userId').equals(req.user);
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getBookedCurrentUser}