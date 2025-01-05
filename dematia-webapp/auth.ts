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
 /* pages: {
    signIn: "/api/auth",
  },*/
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        // Appeler le backend avec les informations utilisateur
        const res = await fetch("http://localhost:3002/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            picture: user.image, // URL de l'image de profil
          }),
        });

        if (!res.ok) {
          console.error("Erreur lors de l'envoi des données au backend.");
          return false; // Empêche la connexion si l'envoi échoue
        }

        return true; // Continue la connexion si tout s'est bien passé
      } catch (error) {
        console.error("Erreur lors de la tentative d'envoi :", error);
        return false; // Empêche la connexion en cas d'erreur
      }
    },
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