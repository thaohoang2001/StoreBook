const express = require('express');
const router = express.Router();
const authController = require("../controller/auth")

router.post('/login', authController.handleLogin);

router.get('/logout', authController.handleLogout);

router.get('/login', authController.getLogin);

module.exports = router;