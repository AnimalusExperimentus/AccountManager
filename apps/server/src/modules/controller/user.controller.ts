import { Request, Response } from "express";
import {
  createUser as createUserService,
  deleteUser as deleteUserService,
  selectUser as getUserService,
  updateUser as updateUserService
} from "../services/user.service";

/**
 * Retrieves a user by ID
 * @param req - Express request object with user ID in params
 * @param res - Express response object
 * @returns 200 with user data or 500 with error message
 * 
 * Response: { id: 1, name: 'John', password: 'hashed...' }
 */
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserService(Number(req.params.id));
    res.status(200).json(user)
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
}

/**
 * Creates a new user with name and password
 * @param req - Express request with name and password in body
 * @param res - Express response object
 * @returns 201 with created user or 500 with error
 * 
 * Body: { name: 'John', password: 'secure123' }
 * Response: { id: 1, name: 'John', password: 'hashed...' }
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await createUserService(name, password)
    res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
}

/**
 * Updates an existing user
 * @param req - Express request with user ID in params and name/password in body
 * @param res - Express response object
 * @returns 200 with updated user or 500 with error
 * 
 * PUT /api/users/1
 * Body: { name: 'Jane', password: 'newsecure123' }
 * Response: { id: 1, name: 'Jane', password: 'hashed...' }
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await updateUserService(Number(req.params.id), name, password);
    res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
}

/**
 * Deletes a user by ID
 * @param req - Express request with user ID in params
 * @param res - Express response object
 * @returns 200 with deleted user or 500 with error
 * 
 * Response: { id: 1, name: 'John', password: 'hashed...' }
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(Number(req.params.id));
    res.status(200).json(user)
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
}


