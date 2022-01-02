const express = require("express");
const router = express.Router();
const testController = require("../controller/testController");


router.get("/test", testController.sendTest);
router.post("/resolveTest", testController.resolveTest);

module.exports = router;