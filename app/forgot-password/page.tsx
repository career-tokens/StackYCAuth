"use client";

import ForgotPasswordComponent from "@/components/ForgotPasswordComponent";
import { AuroraBackground } from "@/components/ui/aurora-backgroun";
import { useStackApp } from "@stackframe/stack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ForgotPassword = () => {
  const app = useStackApp();
  const user = app.useUser();

  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/home");
  }, []);

  return (
    <div className="flex">
      <style>
        {`
                    .asset{
                        background-image:url(https://assets.mongodb-cdn.com/mms/static/images/auth/login_desktop.png);
                        -webkit-box-align: inherit;
                        background-position: center;
                        background-size: cover;
                    }
                  `}
      </style>
      <div className="w-full h-[100vh] md:w-[400px] md flex flex-col justify-center">
        <AuroraBackground>
          <ForgotPasswordComponent />
        </AuroraBackground>
      </div>
      <div className="asset hidden order-2 md:block md:w-[calc(100vw-400px)] md:absolute md:left-[400px] h-[100vh]"></div>
    </div>
  );
};

export default ForgotPassword;
