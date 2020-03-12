const restful = require('node-restful');
const mongoose = restful.mongoose;

const personSchema = new mongoose.Schema({
    name: {type: String, required: true },
    DateOfBirth: {type: String, required: true, default: false },
    Notes: {type: String, required: true, default: false },
    createdAt: {type: Date, default: Date.now }
})


module.exports = restful.model('Person', personSchema);