const GroupTour =require('../../models/groupTour')
const User = require("../../models/user");
const asyncHandler=require('express-async-handler')

const getTravellGroupTour=asyncHandler( async(req,res)=>{
    

    try {
        const result=await GroupTour.find().where('startDate').gte(Date.now()).where('availableSeats').gte(1);
        finalResult = result.map((n) => {
            const startdate = new Date(n.startDate);
            const enddate = new Date(n.endDate);
      
            const user = User.findById(n.createdBy);
            const newobj = {
              ...n._doc,
              createdBy: user.username,
              startDate: startdate.toLocaleDateString(),
              endDate: enddate.toLocaleDateString(),
            };
      
            return newobj;
          });
          res.status(200).json(finalResult);
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
        
    }
    


})

module.exports={getTravellGroupTour}