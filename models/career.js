const router = require('express').Router()
const careerController = require('../controllers/careerController')

router.get('/getCareers', careerController.getCareers)
router.post('/createCareer', careerController.createCareer)
router.post('/updateCareer', careerController.updateCareer)
router.post('/deleteCareer', careerController.deleteCareer)

module.exports = router