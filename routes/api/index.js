const router = require("express").Router();
const studentRoutes = require("./student");
const eventRoutes = require("./event");


router.use("/students", studentRoutes);
router.use("/events", eventRoutes);

module.exports = router;
