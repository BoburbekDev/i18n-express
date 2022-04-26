const router = require('express').Router()
const processController = require('../controllers/processController')

router.get('/getProcesss', processController.getProcesss)
router.post('/createProcess', processController.createProcess)
router.post('/updateProcess', processController.updateProcess)
router.post('/deleteProcess', processController.deleteProcess)

module.exports = router