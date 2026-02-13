"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "C’est quoi exactement la gestion de patrimoine ?",
    answer: "La gestion de patrimoine, c’est le fait de bien organiser son argent et ses biens pour atteindre ses objectifs : épargner, investir, préparer sa retraite, acheter un bien immobilier ou protéger sa famille."
  },
  {
    question: "Est-ce que la gestion de patrimoine est réservée aux personnes riches ?",
    answer: "Pas du tout. La gestion de patrimoine s’adresse à toutes les personnes qui veulent prendre de bonnes décisions financières, quel que soit leur niveau de revenus. Même avec un petit budget, il est possible de mettre en place des solutions adaptées."
  },
  {
    question: "Pourquoi se faire accompagner par un professionnel ?",
    answer: "Un professionnel vous aide à y voir clair, à éviter les erreurs et à faire des choix adaptés à votre situation. Il vous accompagne étape par étape, avec des explications simples, sans jargon compliqué."
  },
  {
    question: "Quels types de placements existent ?",
    answer: "Il existe différents placements selon vos objectifs : épargner en toute sécurité, faire fructifier votre argent sur le long terme, préparer votre retraite, financer des projets futurs. Le rôle du conseiller est de vous proposer les solutions les plus adaptées à votre profil."
  },
  {
    question: "Est-ce que investir veut dire prendre des risques ?",
    answer: "Investir comporte toujours une part de risque, mais le risque peut être maîtrisé. En fonction de votre situation et de vos objectifs, votre conseiller choisit des solutions plus ou moins sécurisées et répartit les investissements pour limiter les risques."
  },
  {
    question: "Pourquoi investir dans l’immobilier ?",
    answer: "L’immobilier permet de se constituer un patrimoine, percevoir des revenus complémentaires, préparer sa retraite et bénéficier d’avantages fiscaux. C’est un placement concret et rassurant pour beaucoup de personnes."
  },
  {
    question: "Quelle est la différence entre l’immobilier neuf et l’ancien ?",
    answer: "L’immobilier neuf offre souvent moins de travaux, des frais de notaire réduits, des logements mieux isolés et parfois des avantages fiscaux. L’immobilier ancien peut aussi être intéressant selon les projets. Le choix dépend de votre situation."
  },
  {
    question: "À quoi servent les assurances dans la gestion de patrimoine ?",
    answer: "Les assurances permettent de se protéger face aux imprévus : protéger ses proches, sécuriser ses revenus, préparer l’avenir. Elles font partie intégrante d’une stratégie patrimoniale équilibrée."
  },
  {
    question: "Les professionnels et indépendants peuvent-ils être accompagnés ?",
    answer: "Oui. Les indépendants, professions libérales et chefs d’entreprise ont souvent des besoins spécifiques. Un accompagnement permet d’optimiser leurs revenus, de préparer leur retraite et de protéger leur activité."
  },
  {
    question: "Comment se passe le premier rendez-vous ?",
    answer: "Le premier rendez-vous est un moment d’échange, sans engagement. Le conseiller prend le temps de comprendre votre situation, de répondre à vos questions et de vous expliquer les solutions possibles de manière claire et accessible."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className={cn("border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300", isOpen && "shadow-md border-rothschild/20")}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={cn("text-lg font-serif font-bold transition-colors", isOpen ? "text-rothschild" : "text-gray-800")}>
          {question}
        </span>
        <div className={cn("p-2 rounded-full transition-colors flex-shrink-0 ml-4", isOpen ? "bg-rothschild text-white" : "bg-slate-100 text-gray-500")}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-slate-50 pt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-full shadow-sm text-rothschild">
                <HelpCircle size={24} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-rothschild mb-6">
              Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-rothschild to-emerald-600">Fréquentes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez ici les réponses aux questions que vous vous posez le plus souvent sur la gestion de patrimoine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqData.map((item, index) => (
            <AccordionItem 
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}

          <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-rothschild mb-2">Vous avez une autre question ?</h3>
             <p className="text-gray-500 mb-6">Notre équipe est là pour vous répondre personnellement.</p>
             <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-rothschild text-white font-medium rounded-full hover:bg-opacity-90 transition-colors">
                Contactez-nous
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
