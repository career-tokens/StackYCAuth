import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/login",
    signUp: "/signup",
    afterSignIn: "/home",
    afterSignUp: "/home",
    afterSignOut:"/"
  }
});
