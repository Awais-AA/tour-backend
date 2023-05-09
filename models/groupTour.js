const mongoose=require('mongoose')


const groupTourSchema=mongoose.Schema(
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
    totalPrice:
    {
        type:Number,
        required:[true,'Total Price is required']
    },
  totalSeats:{
    type:Number,
    required:[true,'Total Seats is Required'],

  },
  totalDays:{
    type:Number,
    required:[true,'Total Days is Required'],

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

module.exports=mongoose.model('GroupTour',groupTourSchema)