const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth')

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users/:id',auth, userCtrl.getOneUser)
router.put('/users/:id/lastname', auth, userCtrl.updateLastName)

module.exports = router;