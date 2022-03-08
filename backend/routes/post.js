const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

router.post('/post', auth,  multer, postCtrl.createPost)
router.get('/post', auth,   postCtrl.getAllPosts)
router.delete('/post/:id', auth, postCtrl.deletePost)
router.put('/post/:id/like', auth, postCtrl.likePost)
router.post('/post/:id/comments', auth,  postCtrl.createComment)
router.get('/post/:id/comments',auth,  postCtrl.getComments)

module.exports = router;