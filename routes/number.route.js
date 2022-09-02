const { Router } = require('express');
const router = Router();
const { numberController } = require('../controllers/number.controller');

router.get("/numbers", numberController.getNumbers)



module.exports = router;