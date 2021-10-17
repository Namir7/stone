const sha256 = require("sha256");

class AuthController {
  showLoginPage(req, res) {
    const loginPage = `${__dirname}/client/index.html`;

    res.sendFile(loginPage);
  }

  login(req, res) {
    const pass = sha256(process.env.PASSWORD);

    if (req.body.pass === pass) {
      res.json("password correct");
    } else {
      res.json("incorrect password!!!");
    }
  }
}

module.exports = new AuthController();
