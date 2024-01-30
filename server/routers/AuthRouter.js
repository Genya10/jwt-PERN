const {Router} = require("express");
const AuthController = require("../controllers/AuthController");
const AuthValidator = require("../validators/AuthValidator");

const router = Router();

router.post("/sign-in",AuthValidator.signIn, AuthController.signIn);
router.post("/sign-up",AuthController.signUp);
router.post("/logout", AuthValidator.logOut, AuthController.logOut);
router.post("/refresh",AuthValidator.refresh, AuthController.refresh);


module.exports = router;