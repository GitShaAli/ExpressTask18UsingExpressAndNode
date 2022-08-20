const path = require('path');

const express = require('express');

const userController = require('../controller/user');

const router = express.Router();

router.get('/',userController.regUserShow);

router.post('/',userController.insertUser);

router.post('/delete/:userId',userController.deleteUser);

module.exports = router;