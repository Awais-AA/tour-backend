const PollingTour=require('../../models/pollingTour')
const asyncHandler=require('express-async-handler')

const getAllPoll=asyncHandler( async(req,res)=>{
    

    try {
        const result=await PollingTour.find().where('startDate').gte(Date.now());
        res.status(200).json({result,success:'Get Poll  Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getAllPoll}