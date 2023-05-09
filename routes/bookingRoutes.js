const router=require('express').Router()
const {getAllBookedGroup}=require('../routesHandler/booking/getBookingForGroupPoll')
const {bookingPoll}=require('../routesHandler/booking/bookingPollHandler')
const {getAllBookedTravellAgent}=require('../routesHandler/booking/getBookingForTravellAgentPollHandler')
const {getAllBookedPolling}=require('../routesHandler/booking/getBookingForPollingHandler')
const {getBookedCurrentUser}=require('../routesHandler/booking/getBookingForCurrentUser')


router.post('/booking-poll/', bookingPoll)
router.get('/booking-poll/', getBookedCurrentUser)
router.get('/book-group-tour/', getAllBookedGroup)
router.get('/book-travell-agent-tour/', getAllBookedTravellAgent)
router.get('/book-polling-tour/', getAllBookedPolling)


module.exports=router