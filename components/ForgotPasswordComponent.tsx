"use client"
import { validateEmail } from '@/utils/email';
import { Button } from '@nextui-org/react';
import { useStackApp } from '@stackframe/stack';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const ForgotPasswordComponent = () => {
    const [sent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const stackApp = useStackApp();
    
    useEffect(() => {
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
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email');
      return;
    }
    await stackApp.sendForgotPasswordEmail(email);
    toast.success("Email sent successfully!");

      setSent(true);
  };
  return (
      <div className="w-full h-[60%] flex flex-col justify-evenly items-center z-[1000]">
      <div className="gap-y-3 text-center">               
      <h1 className="text-[#3aaf9f] dark:text-[#5dd59c] font-bold text-4xl">
              Reset your password
          </h1>
          <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
        Enter your email to reset your password
        </p>
        </div> 
 
              <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-[300px] dark:text-white px-4 py-2 outline-[#3aaf9f] bg-gray-200 bg-opacity-[80%] rounded dark:border-2 dark:border-[#5dd59c] dark:bg-transparent"
          type="email"
          placeholder="Email"
          required
          aria-required="true"
              />

                  <Button onClick={onSubmit} color="success" className="light:bg-[#3aaf9f]">
                     {!sent?"Send Password Reset Email":"Resend Email"}
        </Button>
        <p className="pt-3  text-[#3aaf9f] dark:text-[#5dd59c]">
        Don{"'"}t wish to reset?
        <Link href="/login">
                  <span className="ml-2 px-3 py-2 rounded bg-white bg-opacity-10">Go Back</span>
              </Link>
        </p>
    </div>
  )
}

export default ForgotPasswordComponent