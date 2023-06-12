const Account = require('../models/user');
const customer = require('../models/customer');
// const bcrypt = require('bcryptjs');


exports.handleLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        // console.log(user)
        let user = await Account.findOne({ email: username });
        if (user == null) {
            return res.render('login', { errors: 'Username or password is incorrect' })
        }
        if (user.password == password ){
            if (user.Role == 'customer') {
                req.session.user = user;
                req.session.email = username;
                req.session.customer = true;
                res.redirect('/customer');
            }
            else if (user.Role == 'admin') {
                    req.session.user = user;
                    req.session.email = username;
                    req.session.admin = true;
                    res.redirect('/admin');
                }
        } 
        else {
            return res.render('login', { errors: 'Username or password is incorrect' })
        }


    } catch (error) {
        console.log(error);
    }
};

exports.handleLogout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

exports.getLogin = async (req, res) => {
    res.render('login');
}