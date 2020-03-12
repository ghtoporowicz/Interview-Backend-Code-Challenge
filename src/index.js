const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authentication = require('./authentitcation/authentication')
const router = require('./routes')
const personService = require('./api/personService')
const server = express();

server.use(cors());
server.use(bodyParser.json({limit: '10mb', extended: true}));
server.use(bodyParser.urlencoded({extended: true}));
server.use(authentication.verifyRequest);
server.use('/api', router);



server.listen(3030, () => console.log('server on port 3030'));