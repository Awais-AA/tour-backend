const TravelAgentTour=require('../../models/travelAgentTour')
const asyncHandler=require('express-async-handler')

const getTravellAgentPoll=asyncHandler( async(req,res)=>{
    

    try {
        const result=await TravelAgentTour.find().where('startDate').gte(Date.now());
        res.status(200).json({result,success:'Get Travell Agent Tours Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getTravellAgentPoll}