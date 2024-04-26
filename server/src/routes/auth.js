import { Router } from "express";
import { Register } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";
import { Logout } from "../controllers/user.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import {refreshAccessToken} from "../controllers/user.controller.js";
import { adminLogin, newAdmin } from "../controllers/organiser.controller.js";
import { getAllEvents, newEvent, getDetails, handleEntry, getNGOEvents, participantsList} from "../controllers/event.controller.js";
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(verifyJwt, Logout);
router.route("/refresh").post(refreshAccessToken);
router.route("/adminlogin").post(adminLogin);
router.route("/adminregister").post(newAdmin);
router.route("/newevent").post(newEvent);
router.route("/getevents").get(getAllEvents);
router.route("/event/:eventId").get(verifyJwt,getDetails);
router.route("/participate").post(verifyJwt, handleEntry);
router.route("/myevents").post(getNGOEvents);
router.route("/admin/:eventId").get(participantsList)
export default router;
