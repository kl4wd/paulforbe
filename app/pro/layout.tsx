import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Professionnel | Paul Forbe - Solutions Entreprises",
  description: "Optimisez la protection et la gestion de votre entreprise : RC Pro, Décennale, Mutuelle, et Épargne Salariale. L'expertise Paul Forbe au service des pros.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
