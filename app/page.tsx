"use client";

import React, { useEffect } from "react";
import { useStackApp } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { GlobeDemo } from "@/components/Globe";

export default function Landing() {
  const app = useStackApp();
  const user = app.useUser();

  const router = useRouter();
  useEffect(() => {
    if (user)
      router.push("/home");
  }, []);
  
  return (
    <>
      <GlobeDemo/>
    </>
  );
}