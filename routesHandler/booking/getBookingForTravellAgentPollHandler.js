const BookedPoll=require('../../models/bookedPolling')
const asyncHandler=require('express-async-handler')

const getAllBookedTravellAgent=asyncHandler( async(req,res)=>{
    

    try {
        const result=await BookedPoll.find().where('pollType').equals("travellAgentTour");
        res.status(200).json({result,success:'Poll created Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getAllBookedTravellAgent}