import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
import { ZodError } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },

      },
      authorize: async (credentials) => {
        try {
          const user = null
          const { email, password } = await signInSchema.parseAsync(credentials)
          const response = await fetch("http://localhost:3002/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}),
          }
          );

          if (!response.ok) return null;

          if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.")
          }

          return (await response.json()) ?? null
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
    Google
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Si l'ID provient de `token`, convertissez-le en string avant de l'ajouter à `session.user`.
      session.user = { 
        ...session.user,
        id: String(token.id), // Convertit en string pour correspondre au type attendu
      };
      return session;
    },
    async jwt({ token, user }) {
      // Si un utilisateur est disponible, ajoutez l'ID à `token`.
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

})