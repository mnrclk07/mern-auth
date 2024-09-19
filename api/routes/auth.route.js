import exspress from "express";
import { signup } from "../controllers/auth.controller.js";

const router = exspress.Router();

router.post("/signup", signup);

export default router;
