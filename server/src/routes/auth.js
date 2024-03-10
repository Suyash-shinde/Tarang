import { Router } from "express";
import { Register } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
export default router;