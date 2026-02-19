import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe | Paul Forbe",
  description: "Découvrez les experts de Paul Forbe, dédiés à la gestion et l'optimisation de votre patrimoine. Une approche humaine et stratégique.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
