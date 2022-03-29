const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const validate = require("../../helpers/validations/validate");
const {
  userSchemaValidation,
} = require("../../helpers/validations/validations");

router.post("/", validate(userSchemaValidation), userController.createUser);
router.get("/", userController.getUsers);
module.exports = router;
