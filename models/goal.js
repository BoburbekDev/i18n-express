const router = require('express').Router()
const goalController = require('../controllers/goalController')

router.get('/getGoals', goalController.getGoals)
router.post('/createGoal', goalController.createGoal)
router.post('/updateGoal', goalController.updateGoal)
router.post('/deleteGoal', goalController.deleteGoal)

module.exports = router