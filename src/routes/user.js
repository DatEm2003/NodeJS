const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/UsersController');

router.post('/store', usersController.store);
router.get('/register', usersController.register);
router.post('/login', usersController.ktlogin);
router.get('/', usersController.login);

module.exports = router;