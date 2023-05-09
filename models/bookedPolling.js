const mongoose=require('mongoose')


const bookedPollSchema=mongoose.Schema(
{
    pollId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    pollType:{
        type:String,
        required:true,


    },

    userWhoBooked:{
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        totalSeats:{
            type:Number,
            required:true,
            
        },totalPrice:{
            type:Number,
            required:true,
        }
    },

},
{
    timestamps:true,
}
)

module.exports=mongoose.model('BookedPoll',bookedPollSchema)