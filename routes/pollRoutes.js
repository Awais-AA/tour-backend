const router=require('express').Router()
const {createPoll}=require('../routesHandler/polls/createPollHandler')
const {getAllPoll}=require('../routesHandler/polls/getAllPollshandler')



router.post('/poll/', createPoll)
router.get('/all-poll/', getAllPoll)


module.exports=router