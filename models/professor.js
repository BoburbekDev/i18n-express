const router = require('express').Router()
const multer = require('../multer')
const professorController = require('../controllers/professorController')

router.get('/getProfessors', professorController.getProfessors)
router.post('/getProfessorById', professorController.getProfessorById)
router.post('/createProfessor', multer, professorController.createProfessor)
router.post('/updateProfessor', multer, professorController.updateProfessor)
router.post('/deleteProfessor', multer, professorController.deleteProfessor)

module.exports = router