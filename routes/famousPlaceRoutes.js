const router=require('express').Router()
const {createFamousPlace}=require('../routesHandler/famousplaces/createFamousPlacesHandler')
const {getAllFamousPlaces}=require('../routesHandler/famousplaces/getAllFamousPlacesHandler')



router.post('/famous-place/', createFamousPlace)
router.get('/famous-place/', getAllFamousPlaces)



module.exports=router