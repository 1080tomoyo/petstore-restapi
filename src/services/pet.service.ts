import { prisma } from "../lib/prisma";

type CreatePetInput = {
  name: string;
  status?: string;
};

export async function createPet(input: CreatePetInput) {
  return prisma.pet.create({
    data: {
      name: input.name,
      status: input.status ?? null,
      photoUrls: "",
    },
  });
}

export async function listPets() {
  return prisma.pet.findMany({ orderBy: { id: "asc" } });
}

export async function getPetById(petId: number) {
  return prisma.pet.findUnique({ where: { id: petId } });
}
