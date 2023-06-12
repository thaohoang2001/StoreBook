const express = require('express')
const router = express.Router()
// const multer = require('multer')
const mongoose = require('mongoose');
const customerController = require('../controller/customer')
const { isCustomer } = require("../middlerware/auth");
const upload = require('../middlerware/upload');



router.get("/customer", isCustomer, customerController.getCustomer)

router.get("/customer/bookDetail", isCustomer, customerController.getBookDetail)

router.get("/customer/orderDetail", isCustomer, customerController.getOrderDetail)

router.post("/customer/doAddToCart", isCustomer, customerController.postAddtocart)

router.get("/customer/getRemoveFromCart", isCustomer, customerController.getRemoveFromCart)

router.get('/customer/updateProfile', isCustomer, customerController.getProfile);

router.post('/customer/doUpdateProfileCustomer', isCustomer, upload.single('image'), customerController.updateProfile);

router.post('/customer/doSearchBook', isCustomer, customerController.doSearchBook);

module.exports = router;
