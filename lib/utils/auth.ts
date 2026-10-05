// Auth.js -> nodemailer -> emailbody  -- code is copied from

// This code -> "I want users to log in using their email. Use Nodemailer to send the login/verification email, and use Prisma to store authentication data."

import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter"; // connects auth js to prisma database
import { prisma } from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),

  providers: [
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
   pages: {
    verifyRequest: "/verify",
  },
});
