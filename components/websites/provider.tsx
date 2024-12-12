"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow">
              {children}
            </main>
      <Footer/>
        </div>
    </ThemeProvider>
  );
};
