"use client"

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const route = useRouter()
    return (
        <>
            <header
                role="banner"
                className="py-2 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 shadow-lg shadow-slate-900/20 fixed inset-x-0 top-0 z-50 transition-all duration-300">
                <nav aria-label="Main navigation" className="flex  mx-auto justify-between items-center px-4 sm:px-6 lg:px-8">
                    <Button
                        onClick={() => route.back()}
                        aria-label="Magotlho TN Solutions — Go Back"
                        className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg flex items-center space-x-3 group"
                    >
                        <ChevronLeft className="h-5 w-5 text-blue-400 mb-0.5" />
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md scale-125" aria-hidden="true" />
                            <img
                                src="/TN-logo.png"
                                alt="Magotlho TN Solutions logo"
                                width={50}
                                height={50}
                                className="relative rounded-full bg-slate-300 p-1.5 border border-white/50 shadow-lg shadow-black/20 backdrop-blur-xs transition-all duration-300 group-hover:bg-white group-hover:shadow-blue-500/30"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 font-syne">
                                Magotlho TN
                            </span>
                            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                Solutions (PTY) LTD
                            </p>
                        </div>
                    </Button>

                    <div className="lg:flex flex-col items-center gap-0">
                        <h2 className="text-white text-sm font-medium leading-tight">Request a Quote</h2>
                        <span className="text-blue-400 text-xs font-semibold leading-tight">Get a Free Quote</span>
                    </div>

                    <div></div>
                </nav>
            </header>
            <section className="overflow-hidden">
                {children}
            </section>
        </>
    )
}
