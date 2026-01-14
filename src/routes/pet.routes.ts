import { Router } from "express";
import * as petController from "../controllers/pet.controller";

const router = Router();

router.post("/", petController.addPet);
router.get("/", petController.getPets);
router.get("/:petId", petController.getPetById);

export default router;
