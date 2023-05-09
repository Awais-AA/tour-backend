const TravelAgentTour =require('../../models/travelAgentTour')
const asyncHandler=require('express-async-handler')

const travellAgentPoll=asyncHandler( async(req,res)=>{
    req.user="645609c32bef742bb4c9f41f"
    const {source,destination,totalSeats,availableSeats,totalPrice,totalDays,startDate,endDate}=req.body

    if(!source || !destination || !totalSeats || !availableSeats || !totalPrice|| !totalDays|| !startDate || !endDate)
    {
        res.status(400)
        throw new Error('All Fields are mandotery')
        
    }

    try {
        const result=await TravelAgentTour.create({createdBy:req.user,source,destination,totalSeats,availableSeats,totalPrice,totalDays,startDate,endDate})
        res.status(200).json({result,success:'Travell Agent Poll created Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={travellAgentPoll}