import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, ...rest } = req.body ?? {};
    if (!username || typeof username !== "string") {
      return res.status(400).json({ message: "username is required" });
    }

    const user = await userService.createUser({ username, ...rest });
    return res.status(201).json(user);
  } catch (e: any) {
    console.error(e);
    return res.status(400).json({ message: "failed to create user" });
  }
}

export async function getByUsername(req: Request, res: Response) {
  const raw = req.params.username;
  const username = Array.isArray(raw) ? raw[0] : raw;

  const user = await userService.getByUsername(username);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
}
