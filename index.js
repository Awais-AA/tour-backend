const env = require('dotenv').config()
const connectDB=require('./config/db')
const express=require('express')
const cookieParser=require('cookie-parser')

const cors=require('cors')
const corsOptions = require('./config/corsOptions')
const credentials  = require('./middleware/credentials')
const {error_handler} = require('./middleware/error_middlware')

const app=express()
connectDB()





app.use(cookieParser())
app.use(credentials)
app.use(cors(corsOptions))

app.use(express.urlencoded({extended:false}))
app.use(express.json())




app.use('/api/v1/',require('./routes/userRoutes'))
app.use('/api/v1/',require('./routes/authRoutes'))
app.use('/api/v1/',require('./routes/pollRoutes'))
app.use('/api/v1/',require('./routes/bookingRoutes'))
app.use('/api/v1/',require('./routes/groupTourRoutes'))
app.use('/api/v1/',require('./routes/travellAgentsRoutes'))
app.use('/api/v1/',require('./routes/famousPlaceRoutes'))
app.use('/',require('./routes/refresh'))
app.use('/',require('./routes/logoutRoute'))

app.use(error_handler)

const port=process.env.PORT ||6000
app.listen(port,()=>{
    console.log(`port listening on ${port}`);
})