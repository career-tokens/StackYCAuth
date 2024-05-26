"use client"
import { AuroraBackground } from '@/components/ui/aurora-backgroun'
import Features from '@/components/ui/features'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { useStackApp, useUser } from '@stackframe/stack'
import { useRouter } from 'next/navigation'

const Home = () => {

    const app = useStackApp();
    const user = app.useUser();
  
    const router = useRouter();
  useEffect(() => {
    if (!user)
      router.push("/");
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
      <AuroraBackground>
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
        <div className="text-2xl sm:text-3xl font-bold dark:text-white text-center">
          NextJS Auth Starter Pack using Stack
        </div>
        <Link
          href=""
          id="blog"
        >
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Click here to view code
          </button>
        </Link>
        <Features />
        </motion.div>
        </AuroraBackground>
    </div>
  )
}

export default Home