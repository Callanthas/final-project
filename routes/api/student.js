const router = require("express").Router();
const studentController = require("../../controllers/studentController");


router.route("/")
  .get(studentController.findAll)
  .post(studentController.create);

router
  .route("/:id")
  .get(studentController.findById)
  .put(studentController.update)
  .delete(studentController.remove);

module.exports = router;
