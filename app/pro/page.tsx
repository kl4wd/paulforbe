"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Car, Home, TrendingUp, HeartPulse, Stethoscope, Activity, ArrowRight, CheckCircle2, UserCheck, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Garantie décennale",
    description: "Indispensable pour le BTP. Couvre la réparation des dommages durant 10 ans. Souscription rapide.",
    icon: HardHat,
    color: "bg-blue-600",
  },
  {
    title: "RC Professionnelle",
    description: "Protégez votre entreprise contre les dommages causés aux tiers (clients, fournisseurs).",
    icon: ShieldCheck,
    color: "bg-indigo-600",
  },
  {
    title: "Flotte Auto & Mobilité",
    description: "Assurance pour véhicules de fonction, utilitaires ou engins de chantier.",
    icon: Car,
    color: "bg-sky-600",
  },
  {
    title: "Multirisque Pro",
    description: "La protection complète pour vos locaux, votre matériel et vos stocks.",
    icon: Home,
    color: "bg-violet-600",
  },
  {
    title: "Épargne Salariale & Retraite",
    description: "Dispositifs fiscaux avantageux (PEE, PERCO, Madelin) pour vous et vos salariés.",
    icon: TrendingUp,
    color: "bg-emerald-600",
  },
  {
    title: "Mutuelle d'Entreprise",
    description: "Complémentaire santé collective conforme et performante pour fidéliser vos talents.",
    icon: HeartPulse,
    color: "bg-rose-600",
  },
  {
    title: "Prévoyance TNS & Cadre",
    description: "Sécurisez vos revenus et votre famille en cas de coup dur (arrêt, invalidité, décès).",
    icon: Stethoscope,
    color: "bg-amber-600",
  },
  {
    title: "Protection Dirigeant",
    description: "Garantie Perte d'Emploi (GSC) et assurance Homme Clé pour pérenniser l'activité.",
    icon: Activity,
    color: "bg-slate-600",
  },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Espace Entreprise</h2>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Protégez votre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Activité & Croissance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Des solutions d&apos;assurance et de patrimoine sur-mesure pour les indépendants, TPE et PME.
              Concentrez-vous sur votre métier, nous gérons vos risques.
            </p>
             <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors">
                    Demander un audit gratuit
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    Découvrir nos solutions
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-rothschild mb-4">Nos domaines d&apos;intervention</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
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
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300", service.color)}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
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
            <div className="bg-rothschild rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Pourquoi faire appel à un courtier spécialisé ?</h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Nous comprenons les enjeux spécifiques des professionnels. Gagnez du temps et optimisez votre protection grâce à notre expertise.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rothschild rounded-xl font-bold hover:bg-blue-50 transition-colors"
                        >
                            Contacter le pôle Pro
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                                <UserCheck size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Expertise Métier</h3>
                                <p className="text-blue-100/80">Nous connaissons les risques liés à votre activité et trouvons les contrats les plus adaptés.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Gain de temps</h3>
                                <p className="text-blue-100/80">Ne perdez plus d&apos;heures à comparer les offres. Nous le faisons pour vous.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Indépendance</h3>
                                <p className="text-blue-100/80">Nous ne sommes liés à aucune compagnie. Notre seul intérêt est le vôtre.</p>
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
