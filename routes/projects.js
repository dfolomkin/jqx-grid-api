const router = require('express').Router();

const controller = require('../controllers/projects');

router.get('/projects/all', controller.getProjects());
router.get('/projects/employee-:id', controller.getEmployeeProjects());
router.get('/projects/:id', controller.getProject());

module.exports = router;
