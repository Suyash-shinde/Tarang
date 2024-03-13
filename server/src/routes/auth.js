import { Router } from "express";
import { Register } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";
import { Logout } from "../controllers/user.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import {refreshAccessToken} from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(verifyJwt, Logout);
router.route("/refresh").post(refreshAccessToken);
export default router;