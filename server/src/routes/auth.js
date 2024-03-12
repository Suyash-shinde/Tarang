import { Router } from "express";
import { Register } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";
import { Logout } from "../controllers/user.controller.js";
import { checkAuth } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(checkAuth, Logout);
export default router;