import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Particulier | Paul Forbe - Gestion de Patrimoine",
  description: "Des solutions sur-mesure pour votre patrimoine : Assurance Vie, Crédit Immobilier, Défiscalisation et Transmission. Un accompagnement dédié à votre famille.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
