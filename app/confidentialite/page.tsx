import { GlassCard } from "@/components/ui/GlassCard";

export default function Confidentialite() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-rothschild mb-12">Politique de Confidentialité</h1>
        
        <GlassCard className="p-10 space-y-8 text-gray-600">
            <section>
                <h2 className="text-xl font-bold text-rothschild mb-4">1. Collecte des données</h2>
                <p>
                    Nous collectons les données que vous nous transmettez via nos formulaires de contact (nom, prénom, email, message). Ces données sont nécessaires au traitement de votre demande.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-rothschild mb-4">2. Utilisation des données</h2>
                <p>
                    Vos données sont utilisées exclusivement par <strong>Paulforbe</strong> pour :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Répondre à vos demandes de contact.</li>
                    <li>Réaliser des simulations patrimoniales personnalisées.</li>
                </ul>
                <p className="mt-4">Elles ne sont jamais vendues à des tiers.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-rothschild mb-4">3. Sécurité</h2>
                <p>
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité de vos données personnelles.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-rothschild mb-4">4. Vos droits</h2>
                <p>
                    Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <strong>contact@paulforbe.com</strong>.
                </p>
            </section>
        </GlassCard>
      </div>
    </div>
  );
}
