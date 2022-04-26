const router = require('express').Router()
const fakultetController = require('../controllers/fakultetController')

router.get('/getFakultets', fakultetController.getFakultets)
router.post('/createFakultet', fakultetController.createFakultet)
router.post('/deleteFakultet', fakultetController.deleteFakultet)
router.post('/updateFakultet', fakultetController.updateFakultet)

module.exports = router 