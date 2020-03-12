const personDao = require('../personDao')
const personApi = require('../api/person')

const savePeople = people => {
    people.map( person => {
        const personModel = {
            Name: person.Name,
            DateOfBirth: person.DateOfBirth,
            Notes: person.Notes,
            displayCount: 0
        }
        personDao.save(person)
    });

}

const savePeopleApi = async () => {
    const people = await personApi.getPeople();
    savePeople(people);
}

module.exports = {
    savePeople,
    savePeopleApi
}
