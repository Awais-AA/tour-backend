const GroupTour =require('../../models/groupTour')
const asyncHandler=require('express-async-handler')

const getTravellGroupTour=asyncHandler( async(req,res)=>{
    

    try {
        const result=await GroupTour.find().where('startDate').gte(Date.now());
        res.status(200).json({result,success:'Get Group Tours Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getTravellGroupTour}