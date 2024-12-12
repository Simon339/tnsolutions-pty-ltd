'use client'

import { useState, useEffect } from 'react';
import { ROUTES } from '@/data';
import Link from 'next/link';
import cn from 'clsx';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

export default function Header() {
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
        <header className='fixed inset-x-0 top-0 z-50 py-2 backdrop-blur-md bg-black-100/75'>
            <nav className='container flex max-w-screen-xl justify-between items-center'>
                <Link href={'/'}>
                    <div>
                        <Image
                            src="/TN_logo.png"
                            alt="Logo"
                            width={45}
                            height={45}
                        />
                    </div>
                </Link>

                <ul className='md:flex hidden items-center gap-6 text-sm font-light text-muted-foreground'>
                    {ROUTES.map((route) => (
                        <li key={route.id} className="hover:text-[#014421] text-black/100 font-bold transition-colors">
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
