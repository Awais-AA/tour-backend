const mongoose=require('mongoose')



const pollingTourSchema=mongoose.Schema(
{
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    source:{
        type:String,
        required:[true,'Source is Required'],
    },
    destination:{
        type:String,
        required:[true,'Destination is Required'],
    },
  totalSeats:{
    type:Number,
    required:[true,'Total Seats is Required'],

  },
  availableSeats:{
    type:Number,
    required:[true,'Available Seats is Required'],

  },
    totalPrice:
    {
        type:Number,
        required:[true,'Total Price is required']
    },
    totalDays:
    {
        type:Number,
        required:[true,'Total Days is required']
    },
    startDate:
    {
        type:Date,
        required:[true,'Starting date is required']
    },
    endDate:
    {
        type:Date,
        required:[true,'Ending date is required']
    },

},
{
    timestamps:true
}
)

module.exports=mongoose.model('PollingTour',pollingTourSchema)