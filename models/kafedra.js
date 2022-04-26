const router = require('express').Router()
const kafedraController = require('../controllers/kafedraController')

router.post('/createKafedra', kafedraController.createKafedra)
router.post('/getKafedraByFakultetId', kafedraController.getKafedraByFakultetId)
module.exports = router