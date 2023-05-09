const FamousPlaces=require('../../models/famousPlaces')
const asyncHandler=require('express-async-handler')

const createFamousPlace=asyncHandler( async(req,res)=>{
    const {title,image,historical,cultural,religous,pics}=req.body
  

    if(!title || !image || !historical || !cultural || !religous || !pics)
    {  console.log(req.body[0]);
        res.status(400)
        throw new Error('All Fields are mandotery')
        
    }

    try {
        const result=await FamousPlaces.create({title,image,historical,cultural,religous,pics})
        res.status(200).json({result,success:'Group Tour Poll created Successfully'})
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={createFamousPlace}