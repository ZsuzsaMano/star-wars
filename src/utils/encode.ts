"use server";

import { hash, compare } from "bcrypt";

export const encryptPassword = (password: string): Promise<string> => {
  const saltRounds = 10;
  const encoded = hash(password, saltRounds);
  return encoded;
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return compare(password, hash);
};
