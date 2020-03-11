const express = require('express')
const router = express.Router()

router.use((request, response, next) => {
    next()
})

router.get('/confirm', (request, response) => {
    console.log('oia eu');
})

module.exports = router