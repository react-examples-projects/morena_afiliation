const express = require("express");
const router = express.Router();

// sub-routers
const userRouters = require("./user");

router.use("/user", userRouters);

module.exports = router;
