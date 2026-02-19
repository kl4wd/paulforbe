"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSection } from "@/context/SectionContext";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    // Mobile menu states
    const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
    const [mobileNousConnaitreOpen, setMobileNousConnaitreOpen] = useState(false);
    const [mobileRessourcesOpen, setMobileRessourcesOpen] = useState(false);

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
                    <Link href="/" className="relative z-50 flex items-center gap-3 group">
                        <span className="text-3xl md:text-4xl font-great-vibes text-rothschild tracking-wide relative top-1">
                            Paul Forbe
                        </span>
                         <span className="hidden md:block w-px h-8 bg-rothschild/20" />
                        <span className="hidden md:block text-xs font-serif font-bold text-rothschild/80 uppercase tracking-widest mt-1">
                            Gestion Privée
                        </span>
                    </Link>

                    <div className={cn(
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none md:hidden lg:block",
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
                        
                        {/* Menu "Notre expertise" */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity">
                                Notre expertise
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-56">
                                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <Link href="/particulier" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Espace Particulier</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Famille & Patrimoine</div>
                                    </Link>
                                    <Link href="/pro" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Espace Professionnel</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Solutions Entreprises</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Menu "Nous connaître" */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-serif font-bold text-rothschild hover:opacity-80 transition-opacity">
                                Nous connaître
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-64">
                                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <Link href="/equipe" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Notre Équipe</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Vos experts dédiés</div>
                                    </Link>
                                    <Link href="/faq" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">FAQ</div>
                                        <div className="text-xs text-gray-500 mt-0.5">Questions fréquentes</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Menu "Ressources" */}
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
                                    <Link href="/ressources/interets-composes" className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="text-sm font-serif font-bold text-rothschild group-hover/item:translate-x-1 transition-transform">Intérêts Composés</div>
                                        <div className="text-xs text-gray-500 mt-0.5">La puissance de l&apos;épargne</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/contact"
                            className="px-6 py-2.5 bg-rothschild text-white rounded-full text-sm font-bold hover:bg-rothschild/90 transition-colors shadow-lg shadow-rothschild/20"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="md:hidden z-50 flex items-center gap-4">
                        <span className="text-[10px] font-serif font-bold text-rothschild uppercase tracking-widest">
                            Gestion Privée
                        </span>
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-rothschild p-2 transition-transform active:scale-95"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 transition-all duration-500 md:hidden overflow-y-auto pb-8",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    )}>
                        {/* Mobile Menu Content */}
                        
                        <div className="space-y-4">
                            <button 
                                onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                                className="flex items-center gap-2 text-2xl font-serif font-bold text-rothschild w-full justify-between"
                            >
                                Notre expertise
                                <ChevronDown size={20} className={cn("transition-transform", mobileExpertiseOpen && "rotate-180")} />
                            </button>
                            
                            {mobileExpertiseOpen && (
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-rothschild/20">
                                    <Link 
                                        href="/particulier"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Espace Particulier
                                    </Link>
                                    <Link 
                                        href="/pro"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Espace Professionnel
                                    </Link>
                                </div>
                            )}
                        </div>

                         <div className="space-y-4">
                            <button 
                                onClick={() => setMobileNousConnaitreOpen(!mobileNousConnaitreOpen)}
                                className="flex items-center gap-2 text-2xl font-serif font-bold text-rothschild w-full justify-between"
                            >
                                Nous connaître
                                <ChevronDown size={20} className={cn("transition-transform", mobileNousConnaitreOpen && "rotate-180")} />
                            </button>
                            
                            {mobileNousConnaitreOpen && (
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-rothschild/20">
                                    <Link 
                                        href="/equipe"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Notre Équipe
                                    </Link>
                                    <Link 
                                        href="/faq"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={() => setMobileRessourcesOpen(!mobileRessourcesOpen)}
                                className="flex items-center gap-2 text-2xl font-serif font-bold text-rothschild w-full justify-between"
                            >
                                Ressources
                                <ChevronDown size={20} className={cn("transition-transform", mobileRessourcesOpen && "rotate-180")} />
                            </button>
                            
                            {mobileRessourcesOpen && (
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-rothschild/20">
                                    <Link 
                                        href="/ressources/simulateur-investissement"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Simulateur Investissement
                                    </Link>
                                    <Link 
                                        href="/ressources/simulateur-pret"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Simulateur Prêt
                                    </Link>
                                    <Link 
                                        href="/ressources/interets-composes"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-600 block"
                                    >
                                        Intérêts Composés
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link 
                            href="/contact"
                            className="text-2xl font-serif font-bold text-rothschild mt-4"
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
