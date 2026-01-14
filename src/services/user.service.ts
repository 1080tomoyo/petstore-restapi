import { prisma } from "../lib/prisma";

type CreateUserInput = {
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
};

export async function createUser(input: CreateUserInput) {
  return prisma.user.create({ data: input });
}

export async function getByUsername(username: string) {
  return prisma.user.findUnique({ where: { username } });
}
