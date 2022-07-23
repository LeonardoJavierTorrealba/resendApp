const express = require('express');
const router = express.Router();
const resendApiController = require('../../controllers/api/resendApiController')


router.get('/');
router.get('/resendPendientes', resendApiController.resendInvoicer)


module.exports = router;