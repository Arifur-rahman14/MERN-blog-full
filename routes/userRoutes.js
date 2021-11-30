const app = require("express");
const router = app.Router();
const {
    register,
    registerValidations,
    login,
    loginValidations
} = require("../controllers/userControllers");
router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);
module.exports = router;