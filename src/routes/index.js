var express = require('express');
var router = express.Router();
var routesResend = require('./api/routesResend')

router.use('/api', routesResend);

module.exports = router;
