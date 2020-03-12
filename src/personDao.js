
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://admin:1234@cluster0-yc1q4.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'bornlogic';

const client = new MongoClient(url);

let db;

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
});