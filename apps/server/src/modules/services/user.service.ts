import { User } from '../../../generated/prisma';
import {
  createUser as createUserRepository,
  deleteUser as deleteUserRepository,
  selectUser as selectUserRepository,
  updateUser as updateUserRepository
} from '../../shared/prisma/repositories/user.repository';

export const createUser = async (name: string, password: string): Promise<User> => {
  return createUserRepository(name, password);
};

export const deleteUser = async (id: number): Promise<User> => {
  return deleteUserRepository(id);
};

export const selectUser = async (id: number): Promise<User | null> => {
  return selectUserRepository(id);
};

export const updateUser = async (id: number, name: string, password: string): Promise<User> => {
  return updateUserRepository(id, name, password);
};
