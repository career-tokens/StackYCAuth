/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { Suspense, useEffect, useState } from "react";
import {Link, Button} from "@nextui-org/react";
import TogglerButton from "./togglerbutton/togglerbutton";
import { usePathname } from "next/navigation";
import { useStackApp, useUser } from "@stackframe/stack";

export default  function NavbarMenu() {
  const user = useUser();
  const app = useStackApp();
  const route = usePathname();

  return (
    <nav className="navbar w-[100vw] flex top-0  p-5 fixed justify-end items-center gap-x-4 bg-transparent">
          {route!="/login"&&route!="/signup"&&route!="/home"&&<Button className="text-white" as={Link} color="success" href="/login" variant="shadow">
            Login
      </Button>}
      {route == "/home" && user && <Button onClick={() => user.signOut()}
        className="text-white" as={Link} color="danger" variant="shadow">
            Sign Out
          </Button>}
              <TogglerButton/>
    </nav>
  );
}
