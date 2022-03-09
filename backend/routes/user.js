const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/users/:id", auth, userCtrl.getOneUser);
router.put("/users/:id/lastname", auth, userCtrl.updateLastName);
router.put("/users/:id/firstname", auth, userCtrl.updateFirstName);
router.put("/users/:id/email", auth, userCtrl.updateEmail);
router.put("/users/:id/photo", auth, multer, userCtrl.updatePhoto);
router.delete("/users/:id", auth, userCtrl.deleteAccount);

module.exports = router;
