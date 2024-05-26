"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
