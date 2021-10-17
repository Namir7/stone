const Router = require("express");
const router = new Router();
const controller = require("./authController");

router.get("/", controller.showLoginPage);
router.post("/", controller.login);

module.exports = router;
