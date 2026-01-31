import { LoanSimulator } from "@/components/ui/LoanSimulator";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Simulateur de Prêt Immobilier",
  description: "Calculez vos mensualités, votre capacité d'emprunt et le coût total de votre crédit immobilier avec notre simulateur.",
};

export default function LoanSimulatorPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-rothschild mb-4">Simulateur de Prêt Immobilier</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Estimez vos mensualités et le coût de votre financement en quelques clics.
                </p>
            </div>

            <LoanSimulator />
        </div>
    </div>
  );
}
