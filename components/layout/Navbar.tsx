"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm py-3" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6 h-full">
                <nav className="flex items-center justify-between h-full">
                    <Link href="/" className="relative z-50">
                        <span className="text-2xl font-serif font-bold text-rothschild tracking-tight">
                            Paulforbe.
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-rothschild transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                    </div>

                    <div className="md:hidden z-50">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-rothschild p-2 transition-transform active:scale-95"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <div className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    )}>
                         {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className="text-2xl font-serif font-medium text-rothschild"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </nav>
            </div>
        </header>
    );
};
