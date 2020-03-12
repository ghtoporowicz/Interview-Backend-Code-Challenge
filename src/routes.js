const express = require('express')
const router = express.Router()
const personApi = require('./api/personService')

router.use((request, response, next) => {
    next()
})

router.get('/getPeopleOnApi', async (request, response) => {
    const people = await personService.savePeopleApi();
    console.log(people);
});

module.exports = router