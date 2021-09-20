const express = require('express')
const router = express.Router()

const verifAccount = require('./verifAccount')


router.post('/', verifAccount.findByAccount)

module.exports = router