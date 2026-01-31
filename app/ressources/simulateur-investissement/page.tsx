"use client";

import { Simulator } from "@/components/ui/Simulator";

export default function InvestmentSimulatorPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-rothschild mb-4">Simulateur d&apos;Investissement</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Comparez les rendements potentiels entre l&apos;Assurance Vie, les SCPI et le Private Equity.
                </p>
            </div>

            <Simulator />
        </div>
    </div>
  );
}
