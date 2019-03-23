const db = require("../models");

module.exports = {
  findAll: function (req, res, collection) {
    db[collection]
      .find(req.query)
      .sort({
        name: 1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res, collection) {
    db[collection]
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res, collection) {
    db[collection]
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res, collection) {
    db[collection]
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res, collection) {
    db[collection]
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkLogin: function (req, res, collection) {

    const { username, password } = req.body;

    db[collection].findOne({
        username: username
      })
      .then(user => {
        if (!user) {
          return res.redirect('/login');
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
              req.session.isLoggedIn = true;
              req.session.user = user;
              return req.session.save(err => {
                console.log(err);
                res.redirect('/');
              });
            }
            res.redirect('/login');
          })
          .catch(err => {
            console.log(err);
            res.redirect('/login');
          });
      })
      .catch(err => console.log(err));
  }
};