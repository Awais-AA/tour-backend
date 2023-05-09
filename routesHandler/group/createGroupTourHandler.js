const GroupTour=require('../../models/groupTour')
const asyncHandler=require('express-async-handler')

const createGroupTour=asyncHandler( async(req,res)=>{
    req.user="645609c32bef742bb4c9f41f"
    const {source,destination,totalSeats,availableSeats,totalPrice,totalDays,startDate,endDate}=req.body

    if(!source || !destination || !totalSeats || !availableSeats || !totalPrice|| !totalDays|| !startDate || !endDate)
    {
        res.status(400)
        throw new Error('All Fields are mandotery')
        
    }

    try {
        const result=await GroupTour.create({createdBy:req.user,source,destination,totalSeats,availableSeats,totalPrice,totalDays,startDate,endDate})
        res.status(200).json({result,success:'Group Tour Poll created Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={createGroupTour}