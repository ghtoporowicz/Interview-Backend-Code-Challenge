const validator = require('./validator')

const verifyRequest = (req, res, next) => {
    let access_token;
    try{
        access_token = JSON.parse(req.headers.access_token);
    }catch(error){
        console.error("I can't find access_token");
        res.status(401);
        res.send();
        return;
    }

    if(validator.triangularMatrixValidate(access_token)) {
        console.log('authorization confirm');
        next(); 
    } else {
        res.status(401);
        res.send();
    }
}

module.exports = {
    verifyRequest
}