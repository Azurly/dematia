import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
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