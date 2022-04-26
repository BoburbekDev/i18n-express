const router = require('express').Router()
const multer = require('../multer')
const proudController = require('../controllers/proudController')

router.get('/getProuds', proudController.getProuds)
router.post('/createProud', multer, proudController.createProud)
router.post('/updateProud', multer, proudController.updateProud)
router.post('/deleteProud', multer, proudController.deleteProud)

module.exports = router