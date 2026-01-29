"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative z-10 glass-card p-12 md:p-16 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-9xl font-serif font-bold text-rothschild/10 mb-4 select-none">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-rothschild mb-6">Page introuvable</h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
          La page que vous recherchez semble avoir été déplacée ou n&apos;existe plus.
        </p>
        
        <Link href="/">
          <Button className="px-8 py-3 text-lg">
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
