const router = require("express").Router();
const controller = require("../../controllers/appController");
const collection = 'Supervisor';


router.route("/")
  .get((req, res) => {
    controller.findAll(req, res, collection);
  })
  .post((req, res) => {
    console.log(req.body);
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

  router
  .route("/username/:username")
  .get((req, res) => {
    controller.findByUsername(req, res, collection);
  })
module.exports = router;
