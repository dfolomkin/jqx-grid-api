const router = require('express').Router();

const controller = require('../controllers/employees');

router.get('/employees/all', controller.getEmployees());
router.get('/employees/:id', controller.getEmployee());

module.exports = router;
