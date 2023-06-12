exports.isAdmin = function(req, res, next) {
    if (req.session && req.session.admin)
      return next();
    else
      return res.sendStatus(401);
};

exports.isCustomer = function(req, res, next) {
    if (req.session && req.session.user)
      return next();
    else
      return res.sendStatus(401);
};


