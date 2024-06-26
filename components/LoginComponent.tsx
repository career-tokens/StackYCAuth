/* eslint-disable @next/next/no-img-element */
"use client";
import { useStackApp } from "@stackframe/stack";
import Link from "next/link";
import React, { useState, useEffect, FormEvent } from "react";
import { toast } from "sonner";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const app = useStackApp();

  const onSubmit = async () => {
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    // this will redirect to app.urls.afterSignIn if successful, you can customize it in the StackServerApp constructor
    const errorCode = await app.signInWithCredential({ email, password });
    // It is better to handle each error code separately, but we will just show the error code directly for simplicity here
    if (errorCode) {
      toast.error(errorCode.message);
    }
  };
  return (
    <>
      <div className="flex items-center gap-4 pt-8 w-fit mx-auto">
        <img
          onClick={async () => {
            // this will redirect to the OAuth provider's login page
            await app.signInWithOAuth("google");
          }}
          alt="Google Login"
          src="https://img.icons8.com/color/48/google-logo.png"
          className="w-[60px] h-[60px] p-2 flex justify-center items-center rounded-lg cursor-pointer shadow-md dark:shadow-sm dark:!shadow-white transition-shadow"
        />
        <img
          onClick={async () => {
            // this will redirect to the OAuth provider's login page
            await app.signInWithOAuth("github");
          }}
          alt="Github Login"
          src="https://img.icons8.com/color-glass/48/github--v1.png"
          className="w-[60px] h-[60px] p-2 flex justify-center items-center rounded-lg cursor-pointer shadow-md dark:shadow-sm dark:!shadow-white transition-shadow"
        />
      </div>

      <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
        Or use your email account for registration.
      </p>
      <form
        className="flex w-[300px] mx-auto flex-col pt-3 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        aria-labelledby="login-form-title"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="dark:text-white px-4 py-2 outline-[#3aaf9f] bg-gray-200 bg-opacity-[80%] rounded dark:border-2 dark:border-[#5dd59c] dark:bg-transparent"
          type="email"
          placeholder="Email"
          required
          aria-required="true"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="dark:text-white px-4 py-2 outline-[#3aaf9f] bg-gray-200 bg-opacity-[80%] rounded dark:border-2 dark:border-[#5dd59c] dark:bg-transparent"
          type="password"
          placeholder="Password"
          required
          aria-required="true"
        />
        <Link
          href="/forgot-password"
          className="text-[#3aaf9f] dark:text-[#5dd59c]"
        >
          Forgot password?
        </Link>
        <button
          className="dark:text-gray-950 uppercase bg-[#3aaf9f] dark:bg-[#5dd59c] px-4 py-2 text-white rounded mt-8"
          type="submit"
          aria-label="Login"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
