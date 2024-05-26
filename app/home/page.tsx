"use client";
import { AuroraBackground } from "@/components/ui/aurora-backgroun";
import Features from "@/components/ui/features";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStackApp, useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

const Home = () => {
  const app = useStackApp();
  const user = app.useUser();

  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, []);

  return (
    <div>
      <style>
        {/* proper styling to help identify the focused element for accessibility */}
        {`
            *:focus{
              outline-color:red;
            }

            .nav{
              a:focus{
                outline:2px solid red !important;
              }
            }

            div:focus{
              outline:none;
              border:2px solid red !important;
            }
          `}
      </style>
      <AuroraBackground className="h-[170vh] md:h-screen">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center gap-y-12 justify-evenly px-4"
        >
          <div className="text-2xl sm:text-3xl font-bold text-center text-[#3aaf9f] dark:text-[#5dd59c]">
            NextJS Auth Starter Pack using Stack
          </div>
          {!user?.primaryEmailVerified && (
            <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
              You need to verify your email to view the code.
              <Link href="/verify-email">
                <span className="ml-2 px-3 py-2 rounded bg-white bg-opacity-10">
                  Verify here
                </span>
              </Link>
            </p>
          )}
          <Link href="https://github.com/career-tokens/StackYCAuth" id="code">
            <button
              disabled={!user?.primaryEmailVerified}
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 disabled:opacity-0.5"
            >
              Click here to view code
            </button>
          </Link>
          <Features />
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Home;
