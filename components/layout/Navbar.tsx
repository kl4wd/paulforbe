"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSection } from "@/context/SectionContext";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
    const [mobilePourquoiNousOpen, setMobilePourquoiNousOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { activeTitle } = useSection();

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled ? "bg-white/50 backdrop-blur-3xl border-b border-white/20 shadow-lg py-3" : "bg-transparent py-5" 
        )}>
            <div className="container mx-auto px-6 h-full relative">
                <nav className="flex items-center justify-between h-full">
                    <Link href="/" className="relative z-50 flex items-center gap-2 group">
                        <span className="text-4xl font-great-vibes text-rothschild tracking-wide relative top-1">
                            Paul Forbe
                        </span>
                    </Link>

                    <div className={cn(
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none",
                        activeTitle ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-20%]"
                    )}>
                        <span className="text-xl font-serif font-bold text-rothschild whitespace-nowrap">
                            {activeTitle}
                        </span>
                    </div>

                    <div className={cn(
                        "hidden md:flex items-center gap-8 transition-opacity duration-300",
                        activeTitle ? "opacity-100" : "opacity-100" 
                    )}>
                            <Link 
                                href="/"
                                className="text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity"
                            >
                                Accueil
                            </Link>

                        {/* Nouveau menu "Pourquoi nous ?" */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity">
                                Pourquoi nous ?
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-64">
                                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <Link href="/pro" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Espace Pro</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Solutions entreprises</div>
                                    </Link>
                                    <Link href="/avis" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Avis Clients</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Retours d'expérience</div>
                                    </Link>
                                    <Link href="/equipe" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Notre Équipe</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Vos experts dédiés</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity">
                                Ressources
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-72">
                                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <Link href="/ressources/simulateur-investissement" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Investissement</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Simulateur SCPI & Private Equity</div>
                                    </Link>
                                    <Link href="/ressources/simulateur-pret" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Prêt Immobilier</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Calculez vos mensualités</div>
                                    </Link>
                                    <Link href="/faq" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">FAQ</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Questions fréquentes</div>
                                    </Link>
                                    </div>
                            </div>
                        </div>

                        <Link 
                            href="/contact"
                            className="text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="md:hidden z-50">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-rothschild p-2 transition-transform active:scale-95"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col pt-32 px-10 gap-8 transition-all duration-500 md:hidden",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    )}>
                        <Link 
                            href="/"
                            className="text-3xl font-serif font-bold text-rothschild"
                            onClick={() => setIsOpen(false)}
                        >
                            Accueil
                        </Link>

                        <div className="space-y-4">
                            <button 
                                onClick={() => setMobilePourquoiNousOpen(!mobilePourquoiNousOpen)}
                                className="flex items-center gap-2 text-3xl font-serif font-bold text-rothschild w-full justify-between"
                            >
                                Pourquoi nous ?
                                <ChevronDown size={24} className={cn("transition-transform", mobilePourquoiNousOpen && "rotate-180")} />
                            </button>
                            
                            {mobilePourquoiNousOpen && (
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-rothschild/20">
                                    <Link 
                                        href="/pro"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        Espace Pro
                                    </Link>
                                    <Link 
                                        href="/avis"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        Avis Clients
                                    </Link>
                                    <Link 
                                        href="/equipe"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        Notre Équipe
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                                className="flex items-center gap-2 text-3xl font-serif font-bold text-rothschild w-full justify-between"
                            >
                                Ressources
                                <ChevronDown size={24} className={cn("transition-transform", mobileSubmenuOpen && "rotate-180")} />
                            </button>
                            
                            {mobileSubmenuOpen && (
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-rothschild/20">
                                    <Link 
                                        href="/ressources/simulateur-investissement"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        Simulateur Investissement
                                    </Link>
                                    <Link 
                                        href="/ressources/simulateur-pret"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        Simulateur Prêt
                                    </Link>
                                    <Link 
                                        href="/faq"
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-600 block"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link 
                            href="/contact"
                            className="text-3xl font-serif font-bold text-rothschild"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
