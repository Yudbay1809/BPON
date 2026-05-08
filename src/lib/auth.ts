import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

const DEFAULT_ADMIN_USERNAME = "superadmin";
const DEFAULT_ADMIN_PASSWORD_HASH =
  "$2b$10$0Bzold1kqHKnnlBQF//wk.B1CAnMGDqfjbFQq.ChI39arZnn6ax6W";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/id/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        if (
          credentials.username === DEFAULT_ADMIN_USERNAME &&
          await bcrypt.compare(credentials.password, DEFAULT_ADMIN_PASSWORD_HASH)
        ) {
          return {
            id: "superadmin",
            email: DEFAULT_ADMIN_USERNAME,
            role: "SUPERADMIN" as Role,
            name: "Super Admin",
          };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as Role;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
