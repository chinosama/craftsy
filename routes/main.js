const express = require('express');
const router = express.Router();
const {index} = require('../controllers/maincontroller')

router.get('/',index)




module.exports = router;