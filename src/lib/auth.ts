import { betterAuth } from "better-auth";
export const auth = betterAuth({
  appName: "NextJS BLOG",
  baseURL: process.env.BASE_URL,
  secret: process.env.BETTER_AUTH_SECRET || "BETTER_AUTH_SECRET",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,

    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    disableSessionRefresh: false,
    cookieCache: {
			enabled: true, // Enable caching session in cookie (default: `false`)	
			maxAge: 300 // 5 minutes
		}
  },advanced: {
    		useSecureCookies: process.env.NODE_ENV === "production",

    defaultCookieAttributes: {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production"
		},
  }
});
