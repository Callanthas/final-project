const router = require("express").Router();
const controller = require("../../controllers/studentController");
const collection = 'Student';


router.route("/")
  .get((req, res) => {
    controller.findAll(req, res, collection);
  })
  .post((req, res) => {
    controller.create(req, res, collection);
  });
/*
router
  .route("/:id")
  .get(studentController.findById)
  .put(studentController.update)
  .delete(studentController.remove);
*/
module.exports = router;
