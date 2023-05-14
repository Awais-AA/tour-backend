const BookedPoll=require('../../models/bookedPolling')
const GroupTour=require('../../models/groupTour')
const PollingTour=require('../../models/pollingTour')
const TravelAgentTour=require('../../models/travelAgentTour')
const asyncHandler=require('express-async-handler')

const bookingPoll=asyncHandler( async(req,res)=>{
    req.user="645609c32bef742bb4c9f41f"
    const {pollId,totalSeats,totalPrice,pollType}=req.body

    if(!pollId || !totalSeats  || !totalPrice || !pollType)
    {
        res.status(400)
        throw new Error('All Fields are mandotery')
        
    }
    if(pollType==="travellAgentPoll"){
        try {

            const travelAgentPollResult=await TravelAgentTour.findById(pollId)
            if(totalSeats>travelAgentPollResult.availableSeats){
                res.status(400)
            throw new Error("There is not enough space Available")
            
            }
            const seats=travelAgentPollResult.availableSeats-totalSeats
            await TravelAgentTour.findByIdAndUpdate(pollId,{$set:{availableSeats:seats}})
            await BookedPoll.create({pollId,userWhoBooked:{userId:req.user,totalSeats,totalPrice},pollType})
            res.status(200).json({success:'Booking Successfully done'})
            
        } catch (error) {
            res.status(400)
            throw new Error(error)
            
        }


    }
    if(pollType==="userPoll"){
        try {

            const userPollResult=await PollingTour.findById(pollId)
            if(totalSeats>userPollResult.availableSeats){
                res.status(400)
            throw new Error("There is not enough space Available")
            
            }
            const seats=userPollResult.availableSeats-totalSeats
            await PollingTour.findByIdAndUpdate(pollId,{$set:{availableSeats:seats}})
            await BookedPoll.create({pollId,userWhoBooked:{userId:req.user,totalSeats,totalPrice},pollType})
            res.status(200).json({success:'Booking Successfully done'})
            
        } catch (error) {
            res.status(400)
            throw new Error(error)
            
        }

    }
    if(pollType==="groupPoll"){
        try {

            const groupPollResult=await GroupTour.findById(pollId)
            if(totalSeats>groupPollResult.availableSeats){
                res.status(400)
            throw new Error("There is not enough space Available")
            
            }
            const seats=groupPollResult.availableSeats-totalSeats
            await GroupTour.findByIdAndUpdate(pollId,{$set:{availableSeats:seats}})
            await BookedPoll.create({pollId,userWhoBooked:{userId:req.user,totalSeats,totalPrice},pollType})
            res.status(200).json({success:'Booking Successfully done'})
            
        } catch (error) {
            res.status(400)
            throw new Error(error)
            
        }

    }
    


})

module.exports={bookingPoll}