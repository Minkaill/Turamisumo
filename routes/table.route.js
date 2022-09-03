const { Router } = require('express');
const { tableController } = require('../controllers/table.controller');
const router = Router();
const { userController } = require("../controllers/user.controller")

router.post('/table', tableController.postTable);
router.post("/table/change", tableController.postTableChange);
router.patch('/table/:tableId', tableController.bookingTable)
router.get('/table', tableController.getTable);

module.exports = router;
