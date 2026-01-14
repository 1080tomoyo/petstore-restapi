import { Router } from "express";
import * as userController from "../controllers/user.controller";

const router = Router();

router.post("/", userController.createUser);
router.get("/:username", userController.getByUsername);

export default router;
