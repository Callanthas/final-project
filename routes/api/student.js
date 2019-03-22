const router = require("express").Router();
const controller = require("../../controllers/appController");
const collection = 'Student';


router.route("/")
  .get((req, res) => {
    controller.findAll(req, res, collection);
  })
  .post((req, res) => {
    controller.create(req, res, collection);
  });

router
  .route("/:id")
  .get((req, res) => {
    controller.findById(req, res, collection);
  })
  .put((req, res) => {
    controller.update(req, res, collection);
  })
  .delete((req, res) => {
    controller.remove(req, res, collection);
  });


router.route("/login")
  .post((req, res) => {
    console.log("logging in " +  collection);
    controller.checkLogin(req, res, collection);
  })
module.exports = router;