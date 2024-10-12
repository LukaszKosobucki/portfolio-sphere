"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { GlobalProvider } from "./context/global-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GlobalProvider>{children}</GlobalProvider>
    </ThemeProvider>
  );
}

export default Providers;
