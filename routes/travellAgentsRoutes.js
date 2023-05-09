const router=require('express').Router()
const {travellAgentPoll}=require('../routesHandler/travellagent/createTravellAgentPollHandler')
const {getTravellAgentPoll}=require('../routesHandler/travellagent/getAllTravellAgentTour')



router.post('/travell-agent-poll/', travellAgentPoll)
router.get('/travell-agent-poll/', getTravellAgentPoll)



module.exports=router

