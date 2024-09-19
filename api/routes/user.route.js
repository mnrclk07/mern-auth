import exspress from "express";
import { test } from "../controllers/user.controller.js";

const router = exspress.Router();

router.get("/", test);

export default router;
