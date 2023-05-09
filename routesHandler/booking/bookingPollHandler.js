const BookedPoll=require('../../models/bookedPolling')
const asyncHandler=require('express-async-handler')

const bookingPoll=asyncHandler( async(req,res)=>{
    req.user="645609c32bef742bb4c9f41f"
    const {pollId,totalSeats,totalPrice,pollType}=req.body

    if(!pollId || !totalSeats  || !totalPrice || !pollType)
    {
        res.status(400)
        throw new Error('All Fields are mandotery')
        
    }
    try {
        const result=await BookedPoll.create({pollId,userWhoBooked:{userId:req.user,totalSeats,totalPrice},pollType})
        res.status(200).json({result,success:'Booking Successfully done'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={bookingPoll}