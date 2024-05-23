"use client";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import LoginComponent from "@/components/LoginComponent";
import { AuroraBackground } from "@/components/ui/aurora-backgroun";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login: React.FC = () => {

  const router = useRouter();

  return (
    <div
      className="flex flex-col-reverse lg:flex-row"
    >
      <div className="h-screen flex flex-col justify-center w-full lg:w-[70%] bg-white dark:bg-gray-900">
        <AuroraBackground>
          <div className="text-center flex flex-col gap-y-8 z-[1000]">
            <h1 className="text-[#3aaf9f] dark:text-[#5dd59c] font-bold text-4xl">
              Login to Your Account
            </h1>
            <LoginComponent/>
          </div>
        </AuroraBackground>
      </div>

      <div className="bg-[#3aaf9f] dark:bg-[#5dd59c] h-screen flex flex-col justify-center w-full lg:w-[30%]">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl dark:text-gray-900">Hello Friend!</h2>
          <div className="text-[#eeeeee] w-fit mx-auto dark:text-gray-900">
            <p>Enter your personal details</p>
            <p>and start your journey with us</p>

            <Link href="/signup">
              <button 
                className="dark:text-gray-900 uppercase px-4 py-2 w-[100%] rounded-full border-2 dark:border-gray-900 mt-8"
                aria-label="Sign up"
              >
                Sign up
              </button>
            </Link>
            <p className="mt-4 hidden sm:block lg:hidden">Scroll Below to Login</p>
            <p className="mt-4 sm:hidden">Swipe Below to Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;