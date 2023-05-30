const express = require('express');
const router = express.Router()
const dataController = require('../controller/dataController.js')

router.get('/', dataController.getData())

module.exports = router

