const UserService = require("../services/userService");
const { success, error } = require("../helpers/httpResponses");

class UserController {
  async createUser(req, res, next) {
    try {
      const existsUserEmail = await UserService.existsUser(req.body.email);
      if (existsUserEmail) {
        return error(res, "El usuario ya existe", 400);
      }
      const user = await UserService.createUser(req.body);
      success(res, user);
    } catch (err) {
      next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();
      success(res, users);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
