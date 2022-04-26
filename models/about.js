const router = require('express').Router()
const multer = require('../multer')
const aboutController = require('../controllers/aboutController')

router.get('/getAbouts', aboutController.getAbouts)
router.post('/createAbout', multer, aboutController.createAbout)
router.post('/updateAbout', multer, aboutController.updateAbout)
router.post('/deleteAbout', multer, aboutController.deleteAbout)

module.exports = router