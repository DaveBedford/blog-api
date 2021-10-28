const express = require('express');
const router = express.Router(); 
const blogController = require('../controllers/blogController');

router.get('/posts', blogController.posts);
router.get('/posts/:id', blogController.getPostById);
router.post('/post', blogController.post);
router.patch('/update/:id', blogController.updatePost);
router.delete('/delete/:id', blogController.deletePost);

module.exports = router;