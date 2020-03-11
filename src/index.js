const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(cors());
server.use(bodyParser.json({limit: '10mb', extended: true}));
server.use(bodyParser.urlencoded({extended: true}));

server.listen(3030, () => console.log('server on port 8080'));