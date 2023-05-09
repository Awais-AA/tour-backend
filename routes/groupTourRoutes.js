const router=require('express').Router()
const {createGroupTour}=require('../routesHandler/group/createGroupTourHandler')
const {getTravellGroupTour}=require('../routesHandler/group/getAllGroupTourHandler')



router.post('/group-tour/',createGroupTour)
router.get('/group-tour/',getTravellGroupTour)


module.exports=router