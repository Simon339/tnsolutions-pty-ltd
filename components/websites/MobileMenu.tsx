"use client"

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/data"
import cn from 'clsx';
import React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = ROUTES.map(route => document.getElementById(route.path.slice(1))); 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, { threshold: 0.5 }); 
        
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
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
  <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-black text-white backdrop-blur-md">
    <VisuallyHidden>
      <h2>Mobile Menu</h2>
    </VisuallyHidden>
    <nav className="flex flex-col gap-4">
      {ROUTES.map((route, index) => (
        <a
          key={route.path}  
          href={route.path}
          className={cn(
            "hover:text-[#014421]",
            activeSection === route.path && "text-[#00A5A5] font-bold"
          )}
          onClick={() => setOpen(false)}
        >
          {route.name}
        </a>
      ))}
    </nav>
  </SheetContent>
</Sheet>

  )
}

