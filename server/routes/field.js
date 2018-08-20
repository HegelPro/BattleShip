const express = require('express')
const controller = require('../controllers/field')
const router = express.Router()

router.post('/', controller.generatyField)
// router.get('/', controller.getField)

module.exports = router