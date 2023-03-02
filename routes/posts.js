var express = require('express');
var router = express.Router();
const postsController = require('../controllers/posts-controller')


router.get('/', postsController.getPosts)
router.get('/:id', postsController.getOnePost)

router.post('/send', postsController.sendPost)

router.get('/delete/:id', postsController.deletePost)

module.exports = router;
