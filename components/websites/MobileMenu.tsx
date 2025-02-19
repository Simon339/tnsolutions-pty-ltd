/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data";
import cn from 'clsx';
import React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };
    const initialHash = window.location.hash;
    if (initialHash) {
      setActiveSection(initialHash);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="border-none">
        <Button variant="ghost" className="p-0 md:hidden">
          <Menu className="h-24 w-24 text-white font-medium mr-3" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#87cfebb2] text-white backdrop-blur-xlb">
        <VisuallyHidden>
          <h2>Mobile Menu</h2>
        </VisuallyHidden>
        
        <nav className="flex flex-col gap-4">
          {ROUTES.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={cn(
                "p-3 hover:text-white hover:bg-[#014421] hover:rounded-xl",
                activeSection === route.path ? "text-white font-bold rounded-xl bg-[#00A5A5]" : ""
              )}
              onClick={() => setOpen(false)}
            >
              {route.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}


