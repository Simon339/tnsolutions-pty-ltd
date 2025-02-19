'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import { MobileMenu } from './MobileMenu';

const ROUTES = [
    {
      id: 1,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      name: "About Us",
      path: "#about",
    },
    {
      id: 4,
      name: "Services",
      path: "#services",
    },
    {
      id: 5,
      name: "Gallery",
      path: "#gallery",
    },
    {
      id: 6,
      name: "Contact Us",
      path: "#contact"
    },
  ];
  

export default function Header() {
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
        <header className='fixed inset-x-0 top-0 z-50 py-2 backdrop-blur-md bg-black-100/75'>
            <nav className='container flex max-w-screen-xl justify-between items-center'>
                <Link href={'/'}>
                    <div>
                        <img
                            src="/images/TN_logo.png"
                            alt="Logo"
                            width={45}
                            height={45}
                        />
                    </div>
                </Link>

                <ul className='md:flex hidden items-center gap-6 text-sm font-light text-muted-foreground'>
                    {ROUTES.map((route) => (
                        <li key={route.id} className="hover:text-[#014421] text-gray-800 font-bold transition-colors">
                            <Link
                                href={route.path}
                                className={cn(
                                    "hover:text-[#014421]",
                                    activeSection === route.path && "text-[#00A5A5] font-bold"
                                )}
                            >
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div></div>
                <MobileMenu />
            </nav>
        </header>
    );
}
