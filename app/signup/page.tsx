"use client";

import SignUpComponent from "@/components/SignUpComponent";
import { AuroraBackground } from "@/components/ui/aurora-backgroun";
import { useStackApp } from "@stackframe/stack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignUp: React.FC = () => {
  const app = useStackApp();
  const user = app.useUser();

  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/home");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[#3aaf9f] dark:bg-[#5dd59c] h-screen grid place-items-center w-full lg:w-[30%]">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl dark:text-gray-950">
            Welcome Back!
          </h2>
          <div className="text-[#eeeeee] w-fit mx-auto dark:text-gray-950">
            <p>To keep connected with us please</p>
            <p>please login with your personal info</p>

            <Link href="/login">
              <button
                className="dark:text-gray-950 dark:border-gray-950 uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8"
                aria-label="Login"
              >
                Login
              </button>
            </Link>
            <p className="mt-4 hidden sm:block lg:hidden">
              Scroll Below to Register
            </p>
            <p className="mt-4 sm:hidden">Swipe Below to Register</p>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center w-full lg:w-[70%]">
        <AuroraBackground>
          <div className="text-center flex flex-col gap-y-8 z-[1000]">
            <h1
              id="signup-form-title"
              className="text-[#3aaf9f] font-bold text-4xl dark:text-[#5dd59c]"
            >
              Create Account
            </h1>
            <SignUpComponent />
          </div>
        </AuroraBackground>
      </div>
    </div>
  );
};

export default SignUp;
