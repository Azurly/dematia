// src/controllers/authController.ts

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log("Requête reçue avec email:", email, "et password:", password);

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email et mot de passe requis." });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    console.log("Utilisateur trouvé:", user);

    if (!user) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect 22." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log("Mot de passe valide:", isValidPassword);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect 33." });
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    console.log("Token généré:", accessToken);

    res.json({ id: user.id, email: user.email, accessToken, name: user.name });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    // Validation simple (ajoutez une lib comme zod/joi pour des règles plus robustes)
    if (!email || !password || !name) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Cet email est déjà utilisé." });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    res.status(201).json({
      message: "Utilisateur créé avec succès.",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        password: newUser.password,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
};