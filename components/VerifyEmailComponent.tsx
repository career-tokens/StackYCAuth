"use client"
import { validateEmail } from '@/utils/email';
import { Button } from '@nextui-org/react';
import { useStackApp } from '@stackframe/stack';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import EmailAppDropdown from './EmailAppDropdown';
import { useRouter } from 'next/navigation';

const VerifyEmailComponent = () => {

    const app = useStackApp();
  const user = app.useUser();
  const router = useRouter();
    
    useEffect(() => {
        onSubmit();
        document.addEventListener("keydown", onKeyDown);
      
        return () => {
          document.removeEventListener("keydown", onKeyDown);
        }
      }, [])
    
      const onKeyDown = (e:KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSubmit();
        }
      }
  
  const onSubmit = async () => {
        const error = await user?.sendVerificationEmail();
        if (error) {
          toast.error("Error sending email verification");
        } else {
          toast.success("Email verification sent");
        }
  };
  return (
      <div className="w-full h-[60%] px-3 flex flex-col justify-evenly items-center z-[1000]">
      <div className="gap-y-3 text-center">               
      <h1 className="text-[#3aaf9f] dark:text-[#5dd59c] font-bold text-4xl">
             We have sent you an email
          </h1>
          <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
        Click on the email verification link sent to you on {user?.primaryEmail} to verify your account
        </p>
        </div> 
        <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
        Didn{"'"}t receive the email yet?
              <button onClick={onSubmit}
                  className="ml-2 px-3 py-1 rounded bg-black bg-opacity-10 text-black dark:text-white dark:bg-white dark:bg-opacity-20">Send Again</button>
      </p>
      <EmailAppDropdown/>
    </div>
  )
}

export default VerifyEmailComponent