"use client";

import Image from "next/image";

const partners = [
  { name: "Generali", logo: "generali.png" },
  { name: "Kaufman", logo: "kaufman.png" },
  { name: "Crédit Agricole", logo: "creditagricole.png" },
  { name: "Bouygues Immobilier", logo: "bouyguesimmobilier.png" },
  { name: "Altarea Cogedim", logo: "altareacogedim.png" },
  { name: "Icade", logo: "icade.png" },
  { name: "Cardif", logo: "cardif.png" },
  { name: "April", logo: "april.png" },
  { name: "Vinci Immobilier", logo: "vinciimmobilier.png" },
  { name: "Les Nouveaux Constructeurs", logo: "lesnouveauxconstructeurs.png" },
  { name: "Nexity", logo: "nexity.png" },
  { name: "Spirit", logo: "spirit.png" },
  { name: "Catella Résidentiel", logo: "catellaresidentiel.png" },
  { name: "MetLife", logo: "metlife.png" },
  { name: "Zephir", logo: "zephir.png" },
  { name: "Eiffage Immo", logo: "eiffageimmo.png" }
];

export const Partners = () => {
    return (
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
             <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Ils nous font confiance</p>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="animate-marquee flex whitespace-nowrap gap-16 items-center px-4">
                    {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                           <div className="h-16 w-auto min-w-[120px] relative flex items-center justify-center">
                                <img 
                                    src={`/partners/${partner.logo}`} 
                                    alt={partner.name}
                                    className="h-full w-auto object-contain max-h-16"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden text-xl font-serif font-bold text-gray-400">{partner.name}</span>
                           </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-16 items-center px-4">
                     {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                           <div className="h-16 w-auto min-w-[120px] relative flex items-center justify-center">
                                <img 
                                    src={`/partners/${partner.logo}`} 
                                    alt={partner.name}
                                    className="h-full w-auto object-contain max-h-16"
                                     onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden text-xl font-serif font-bold text-gray-400">{partner.name}</span>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
