"use client";

import { Simulator } from "@/components/ui/Simulator";
import { GlassCard } from "@/components/ui/GlassCard";
import { ClipboardCheck, TrendingUp, Building2, Briefcase, ShieldCheck, Landmark, Compass, PiggyBank, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";

const expertise = [
  { 
      title: "Planification patrimoniale", 
      desc: "La planification patrimoniale est un sujet qui occupe un nombre croissant de ménages de nos jours. Familles recomposées, délocalisations, diversification du patrimoine et bien d’autres raisons justifient une intervention préalable pour garantir une transmission réussie des avoirs aux prochaines générations.",
      icon: Compass 
  },
  { 
      title: "Stratégie immobilier & Asset management", 
      desc: "Dans un marché immobilier de plus en plus complexe, bâtir ou optimiser un portefeuille d’actifs immobiliers requiert services sur mesure et conseils en stratégie d’investissement immobilier. Les équipes spécialisées en capital markets de Paul Forbe déploient leur savoir-faire et leur vision globale du secteur pour vous permettre de créer toute la valeur à laquelle vous aspirez.",
      icon: Building2 
  },
  { 
      title: "Réduction d'impôt", 
      desc: "Les dispositifs de la loi française vous permettent de réduire vos impôts en investissant. Le cabinet Paul Forbe vous propose des solutions d’investissement immobilier en fonction de votre stratégie patrimoniale personnelle.",
      list: ["Défiscalisation immobilière (Lois Pinel, Malraux, Loueur en Meublé, Girardin, Monuments Historiques, Déficits Fonciers, Murs de Boutique, Viagers, etc)."],
      icon: PiggyBank 
  },
  { 
      title: "Stratégie d'investissement", 
      desc: "Un éventail de facteurs peut déterminer votre stratégie d’investissement personnelle. Cela comprend votre appétence aux risques et les retours que vous espérez obtenir sur vos investissements, ainsi que les actifs, régions ou secteurs qui vous intéressent. Le temps que vous pensez passer à investir devrait aussi définir votre stratégie.",
      icon: Target 
  },
];

const sectors = [
  { 
      title: "L'audit patrimonial", 
      desc: "Pour construire l’architecture de votre patrimoine, le cabinet Paul Forbe élabore au préalable un audit patrimonial. L’audit patrimonial est un bilan de votre patrimoine et de votre situation (situation civile et familiale, professionnelle, budgétaire, fiscale, prévoyance).", 
      icon: ClipboardCheck 
  },
  { 
      title: "Les placements financiers", 
      desc: "Paul Forbe est partenaire de multiples maisons de gestion que nous avons sélectionnés sur les différents marchés et qui nous permettent de vous proposer des produits totalement adaptés à vos objectifs en matière de placements financiers.", 
      icon: TrendingUp 
  },
  { 
      title: "L'immobilier", 
      desc: "L’immobilier est un outil fondamental de votre patrimoine car il vous fait bénéficier de l’effet de levier du crédit que ce soit pour l’immobilier de jouissance (résidence principale et résidence secondaire) ou pour l’immobilier de rendement (location). D’autant que des dispositifs de la loi française vous permettent en parallèle de réduire vos impôts en investissant.", 
      icon: Building2 
  },
  { 
      title: "Les services aux Pro", 
      desc: "Paul Forbe assiste les professionnels avec des solutions patrimoniales dédiées aux entreprises. Quelques exemples de nos interventions :",
      list: [
          "Garantie décennale",
          "Assurance Responsabilité civile professionnel",
          "Assurance Auto/Moto professionnel",
          "Assurance Propriétaire professionnel",
          "Epargne-Retraite (art 83, PerIN, Percoll, PerO, loi Madelin)",
          "Complémentaire santé",
          "Prévoyance décès , incapacité et invalidité",
          "Garanties en cas d'arrêt d'activité (maladie, accident, faillite)."
      ],
      icon: Briefcase 
  },
  { 
      title: "Les assurances", 
      desc: "Paul Forbe dispose d'une large gamme de produits d'assurances minutieusement sélectionnés parmi les meilleurs du marché afin de couvrir et prévoir tous les risques :",
      list: [
          "Assurance Auto / Moto / Scooter / Trotinette",
          "Assurance habitation",
          "Garantie des accidents de la vie",
          "Prévoyance décès",
          "Complémentaire santé",
          "Protection juridique",
          "Assurance emprunteur"
      ],
      icon: ShieldCheck 
  },
  { 
      title: "Le financement", 
      desc: "L'effet de levier d'un investissement immobilier passe bien évidement par un financement parfaitement réalisé. En tant que courtier en credit Paul Forbe accompagne ses clients à chaque étape de leur financement afin qu'il soit totalement optimisé.", 
      icon: Landmark 
  },
];

export default function Home() {

  return (
    <div className="min-h-screen">
      <section className="relative pt-8 pb-8 lg:pt-12 lg:pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center mb-8 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <h2 className="text-sm font-bold tracking-[0.2em] text-rothschild/60 uppercase mb-3">Conseil en gestion de patrimoine</h2>
             <h1 className="text-4xl lg:text-5xl font-serif font-bold text-rothschild mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
               Une équipe au coeur de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-rothschild to-blue-600">stratégie patrimoniale.</span>
             </h1>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
               Notre métier de conseil en gestion de patrimoine consiste à vous accompagner pour optimiser tous les sujets qui concernent votre patrimoine : épargne, placements, investissement immobilier, impôts, retraite, prévoyance...
             </p>
           </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10 mb-8">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
              <Simulator />
           </motion.div>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-y border-white/50 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-0">
               <div className="space-y-1">
                  <div className="text-4xl font-serif font-bold text-rothschild">2014</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">notre année de création</div>
               </div>
               <div className="space-y-1">
                  <div className="text-4xl font-serif font-bold text-rothschild">100%</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">indépendant</div>
               </div>
               <div className="space-y-1">
                  <div className="text-4xl font-serif font-bold text-rothschild text-nowrap">+2000</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">projets réalisés</div>
               </div>
            </div>

         </div>
      </section>

      <section className="py-10 relative">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-rothschild mb-10 text-center">Notre Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {expertise.map((item, i) => (
                    <GlassCard key={i} hoverEffect className="p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                         <div className="w-14 h-14 shrink-0 bg-blue-50/80 rounded-2xl flex items-center justify-center text-rothschild">
                              <item.icon size={28} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold font-serif text-rothschild mb-2">{item.title}</h3>
                              <p className="text-gray-600 leading-relaxed text-sm mb-3">{item.desc}</p>
                              {item.list && (
                                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                      {item.list.map((li, idx) => (
                                          <li key={idx}>{li}</li>
                                      ))}
                                  </ul>
                              )}
                          </div>
                     </GlassCard>
                ))}
            </div>
         </div>
      </section>

      <section className="relative bg-slate-50 py-10 overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-rothschild mb-4">Nos Domaines d&apos;Intervention</h2>
                <div className="w-20 h-1 bg-rothschild/20 mx-auto rounded-full" />
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Découvrez nos domaines d&apos;expertise à travers une approche sur-mesure. (Faites défiler horizontalement)
                </p>
        </div>

        <div className="container mx-auto relative px-6">
            <Timeline className="w-full">
                {sectors.map((sector, i) => (
                    <TimelineItem key={i}>
                        <GlassCard 
                            hoverEffect={true} 
                            enableAnimation={true}
                            className="h-full flex flex-col p-6 md:p-8 border border-blue-100/50 bg-white/80 backdrop-blur-md shadow-xl min-h-[400px]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-rothschild to-blue-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rothschild/20">
                                    <sector.icon size={32} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-rothschild">
                                    {sector.title}
                                </h3>
                            </div>
                            
                            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                    {sector.desc}
                                </p>
                                
                                {sector.list && (
                                    <ul className="grid gap-2">
                                        {sector.list.map((li, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rothschild mt-2 shrink-0" />
                                                <span className="text-sm font-medium text-gray-600 leading-snug">
                                                    {li}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </GlassCard>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
      </section>
    </div>
  );
}
