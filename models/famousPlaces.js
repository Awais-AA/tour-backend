const mongoose=require('mongoose')


const famousPlacesSchema=mongoose.Schema(
{
    title:{
        type:String,
        required:[true,'Title is Required'],
    },
    image:{
        type:String,
        required:[true,'Image Url is Required'],
    },
    historical:
    {
        type:Array,
        required:[true,'Historical Places are required']
    },
  cultural:{
    type:Array,
    required:[true,'Cultural Places are Required'],

  },
  religous:{
    type:Array,
    required:[true,'Religous Places are Required'],

  },
    pics:
    {
        type:Array,
        required:[true,'Pic url is required']
    },
   

},
{
    timestamps:true
}
)

module.exports=mongoose.model('FamousPlaces',famousPlacesSchema)