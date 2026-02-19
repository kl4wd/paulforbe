"use client";

import { motion } from "framer-motion";
import { 
    ShieldCheck, 
    Landmark, 
    PiggyBank, 
    Home, 
    TrendingUp, 
    HeartHandshake, 
    Users, 
    ArrowRight, 
    CheckCircle2, 
    Clock, 
    FileText 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Assurance Vie & PER",
    description: "Préparez votre avenir et votre retraite avec des solutions d'épargne performantes et fiscales.",
    icon: TrendingUp,
    color: "bg-emerald-600",
  },
  {
    title: "Crédit Immobilier",
    description: "Négociation de vos taux et assurance emprunteur pour optimiser le coût de vos acquisitions.",
    icon: Home,
    color: "bg-blue-600",
  },
  {
    title: "Gestion de Patrimoine",
    description: "Stratégie globale pour développer, structurer et transmettre votre patrimoine.",
    icon: Landmark,
    color: "bg-indigo-600",
  },
  {
    title: "Investissement Immo",
    description: "Conseil en investissement locatif, SCPI, et dispositifs de défiscalisation.",
    icon: PiggyBank,
    color: "bg-violet-600",
  },
  {
    title: "Prévoyance Famille",
    description: "Protégez vos proches : capitaux décès, garantie accidents de la vie, dépendance.",
    icon: HeartHandshake,
    color: "bg-rose-600",
  },
  {
    title: "Succession & Transmission",
    description: "Anticipez la transmission de vos biens pour alléger la fiscalité de vos héritiers.",
    icon: Users,
    color: "bg-amber-600",
  },
  {
    title: "Bilan Retraite",
    description: "Audit complet de vos droits et mise en place de solutions pour maintenir votre niveau de vie.",
    icon: FileText,
    color: "bg-slate-600",
  },
  {
    title: "assurance I.A.R.D",
    description: "Assurances Auto, Habitation et protection Juridique haut de gamme.",
    icon: ShieldCheck,
    color: "bg-sky-600",
  },
];

export default function ParticulierPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-slate-900 text-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         {/* Changed accent color to Gold/Orange for Particulier feel vs Blue for Pro */}
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[100px] opacity-10 pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Espace Particulier</h2>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight">
              Valorisez votre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-300">Famille & Patrimoine</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Une approche globale et personnalisée pour construire, gérer et transmettre votre patrimoine en toute sérénité.
            </p>
             <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-orange-50 transition-colors">
                    Faire un bilan patrimonial
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Nos Expertises
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-rothschild mb-4">Votre tranquillité, notre priorité</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-orange-100 transition-all group"
              >
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300", service.color)}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            {/* Changed background to a warm grey/slate instead of rothschild to differentiate slightly or keep consistency? Keeping rothschild for brand consistency but maybe different accent color overlay */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Pourquoi choisir Paul Forbe ?</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Parce que chaque situation est unique, nous vous offrons un accompagnement sur-mesure, alliant expertise technique et relation humaine.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            Prendre rendez-vous
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Approche Familiale</h3>
                                <p className="text-gray-400">Nous protégeons vos intérêts et ceux de vos proches sur le long terme.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Disponibilité</h3>
                                <p className="text-gray-400">Un conseiller dédié qui vous connaît et répond présent à chaque étape de votre vie.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Indépendance Totale</h3>
                                <p className="text-gray-400">Nous sélectionnons librement les meilleures solutions du marché pour vous.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
