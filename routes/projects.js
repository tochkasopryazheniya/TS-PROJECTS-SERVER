var express = require('express');
var router = express.Router();
const projectsController = require('../controllers/projects-controller');

router.get('/', projectsController.getProjects)
router.get('/:id', projectsController.getOneProject)

router.post('/send', projectsController.sendProject)

module.exports = router;