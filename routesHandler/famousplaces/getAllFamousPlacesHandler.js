const FamousPlaces =require('../../models/famousPlaces')
const asyncHandler=require('express-async-handler')

const getAllFamousPlaces=asyncHandler( async(req,res)=>{
    

    try {
        const result=await FamousPlaces.find();
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getAllFamousPlaces}