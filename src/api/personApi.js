const axios = require('axios')

const getPeople = async () => {
    let response = await axios.get('https://us-east4-sandbox-254919.cloudfunctions.net/interview-code-challenge-api')
    return response.data.people;
}

module.exports = {
    getPeople
}