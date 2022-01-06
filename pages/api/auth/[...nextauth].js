import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

require("dotenv").config();

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		// OAuth authentication providers...
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	jwt: true,
	secret: process.env.SECRET,
	callbacks: {
		jwt: async ({ token, account }) => {
			if (account?.access_token) {
				token.access_token = account.accessToken;
				token.
				console.log(token)
				console.log(account)
			}
			return token;
		},
		redirect: async ({ url, baseUrl }) => {
			if (url.endsWith("/sign-in")) {
				return url;
			}
			return baseUrl;
		},
		signIn: async ({ account, profile }) => {
			if (account.provider === "google") {
				return profile.email_verified;
			}
			return true; // Do different verification for other providers that don't have `email_verified`
		},
	},
});
