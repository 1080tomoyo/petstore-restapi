import { Request, Response } from "express";
import * as petService from "../services/pet.service";

export async function addPet(req: Request, res: Response) {
  try {
    const { name, status } = req.body ?? {};
    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "name is required" });
    }

    const pet = await petService.createPet({ name, status });
    return res.status(201).json(pet);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "internal error" });
  }
}

export async function getPets(_req: Request, res: Response) {
  const pets = await petService.listPets();
  return res.json(pets);
}

export async function getPetById(req: Request, res: Response) {
  const petId = Number(req.params.petId);
  if (Number.isNaN(petId)) return res.status(400).json({ message: "invalid petId" });

  const pet = await petService.getPetById(petId);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  return res.json(pet);
}
