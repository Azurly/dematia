// src/controllers/authController.ts

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

};

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  
};