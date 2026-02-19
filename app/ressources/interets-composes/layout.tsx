import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculatrice d'intérêts composés | Paul Forbe",
  description: "Simulez la croissance de votre épargne avec notre calculatrice d'intérêts composés. Visualisez l'effet de vos versements et des intérêts sur le long terme.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
