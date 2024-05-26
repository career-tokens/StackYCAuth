"use client"

import VerifyEmailComponent from '@/components/VerifyEmailComponent';
import { AuroraBackground } from '@/components/ui/aurora-backgroun';
import { useStackApp } from '@stackframe/stack';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const VerifyEmail = () => {

    const app = useStackApp();
    const user = app.useUser();
  
    const router = useRouter();
    useEffect(() => {
      if (!user) {
        toast.error("User not found. Please login/signup first.");
        router.push("/login");
      }
      else if (user && user.primaryEmailVerified) {
        toast.success("Email is already verified. Redirecting to home page.");
        router.push("/home");
      }
    }, []);

  return (
      <div className="flex flex-row-reverse">
          <style>
              {
                  `
                    .asset{
                        background-image:url(https://assets.mongodb-cdn.com/mms/static/images/auth/login_desktop.png);
                        -webkit-box-align: inherit;
                        background-position: center;
                        background-size: cover;
                    }
                  `
              }
          </style>
      <div className='w-full h-[100vh] md:w-[400px] md flex flex-col justify-center'>
        <AuroraBackground>
          <VerifyEmailComponent />
          </AuroraBackground>
          </div>
          <div className="asset hidden order-2 md:block md:w-[calc(100vw-400px)] md:absolute md:left-0 h-[100vh]">  
      </div>
    </div>
  )
}

export default VerifyEmail