// // const shoppingcart = require('../models/shoppingcart'); 
// const Account = require('./models/user');
// const customer = require('./models/customer');
// const bookDetail = require('./models/bookDetail');
// const express = require('express')
// const router = express.Router()

// exports.doShoppingCart = async (req, res) => {
//     const bookID = req.body.bookID
//     const book = await dbHandler.getDocumentById(bookID, "Book")
//     const orderDB = await dbHandler.getCart(req.session.user.name)
//     if (orderDB == null) {
//         let cart = req.session["cart"]
//         //chưa có hàng trong sesssion, đây là sản phẩm đầu tiên
//         if (!cart) {
//             let dict = { user: req.session.user.name, books: [], totalPrice: book.price };
//             book.qty = 1;
//             book.money = book.price * book.qty
//             dict.books.push(book);
//             req.session["cart"] = dict
//             console.log(dict)
//         } else {
//             dict = req.session["cart"]
//             var oldBookIndex = dict.books.findIndex(b => b._id == book._id)
//             if (oldBookIndex == -1) {
//                 book.qty = 1;
//                 book.money = book.price * book.qty
//                 dict.books.push(book);
//             }
//             else {
//                 const oldBook = dict.books[oldBookIndex];
//                 oldBook.qty += 1;
//                 oldBook.money = oldBook.price * oldBook.qty
//             }
//             dict.totalPrice += book.price;
//             req.session["cart"] = dict
//             console.log(dict)
//         }
//         await dbHandler.updateCart(req.session.user.name, req.session["cart"])
//         res.redirect('/details?id=' + bookID)
//     }   

//     else {
//         let cart = req.session["cart"]
//         if (!cart) {
//             let dict = orderDB;
//             var oldBookIndex = dict.books.findIndex(b => b._id == book._id)
//             if (oldBookIndex == -1) {
//                 book.qty = 1;
//                 book.money = book.price * book.qty
//                 dict.books.push(book);
//             }
//             else
//             {
//                 const oldBook = dict.books[oldBookIndex];
//                 oldBook.qty += 1;
//                 oldBook.money = oldBook.price * oldBook.qty
//             }
//             dict.totalPrice += book.price;
//             req.session["cart"] = dict
//             console.log(dict)
//         } else {
//             dict = req.session["cart"]
//             var oldBookIndex = dict.books.findIndex(b => b._id == book._id)
//             if (oldBookIndex == -1) {
//                 book.qty = 1;
//                 book.money = book.price * book.qty
//                 dict.books.push(book);
//             }
//             else {
//                 const oldBook = dict.books[oldBookIndex];
//                 oldBook.qty += 1;
//                 oldBook.money = oldBook.price * oldBook.qty
//             }
//             dict.totalPrice += book.price;
//             delete dict._id;
//             req.session["cart"] = dict
//             console.log(dict)
//         }
//         await dbHandler.updateCart(req.session.user.name, req.session["cart"])
//         res.redirect('/details?id=' + bookID)
//     }
// }

exports.getCart = async (req, res) => {
    // const cart = req.session["cart"]
    // if (cart) {
    //     res.render('ShoppingCart', { order: cart, user: req.session.user })
    // }
    // else {
    //     const orderDB = await dbHandler.getCart(req.session.user.name)
    //     console.log(orderDB);
    //     res.render('ShoppingCart', { order: orderDB, user: req.session.user })
    // }

    res.render('shoppingcart')
}
