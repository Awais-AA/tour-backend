const mongoose=require('mongoose')


const userSchema=mongoose.Schema(
{
    username:{
        type:String,
        required:[true,'username is required'],
        unique:true,
    },
    email: {
        type: String,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
        required: [true, "E-mail is Required"],
        unique: [true, "E-mail Already Exist"],
        lowercase: true,
      },
      password: {
        type: String,
        required: [true, "Please Add Password"],
        minlength: 6,
      },
    phoneNo:{
        type:String,
        required:[true,'PhoneNo is required']

    },
    isEmailVerified: {
        type: Boolean,
        default: false,
      },
      isPhoneNoVerified: {
        type: Boolean,
        default: false,
      },
      userType:{
        type:String,
        default:"client"

      },
    refreshToken:{
        type:String,
        default:"",
    },
    

},
{
    timestamps:true,
}

)

module.exports=mongoose.model('User',userSchema)