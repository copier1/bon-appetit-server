const express = require("express");
const router = express.Router();

const DataManagementController = require("../controllers/data-management-controller");

router.get("/populate", DataManagementController.populate);
router.delete("/clear", DataManagementController.clear);

module.exports = router;
