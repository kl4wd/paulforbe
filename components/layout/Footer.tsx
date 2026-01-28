import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="text-3xl font-serif font-bold text-rothschild block mb-6">
            Paulforbe.
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Fusionnant expertise séculaire et innovation technologique pour sublimer votre patrimoine.
          </p>
        </div>
        <div>
           <h4 className="font-bold text-rothschild mb-6 text-lg">Cabinet</h4>
           <ul className="space-y-4 text-sm text-gray-600 font-medium">
             <li><Link href="/" className="hover:text-rothschild transition-colors">Accueil</Link></li>
           </ul>
        </div>
        <div>
           <h4 className="font-bold text-rothschild mb-6 text-lg">Ressources</h4>
           <ul className="space-y-4 text-sm text-gray-600 font-medium">
             <li><Link href="/contact" className="hover:text-rothschild transition-colors">Contact</Link></li>
           </ul>
        </div>
        <div>
           <h4 className="font-bold text-rothschild mb-6 text-lg">Légal</h4>
           <ul className="space-y-4 text-sm text-gray-600 font-medium">
             <li><Link href="/mentions-legales" className="hover:text-rothschild transition-colors">Mentions légales</Link></li>
             <li><Link href="/confidentialite" className="hover:text-rothschild transition-colors">Politique de confidentialité</Link></li>
           </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Paulforbe. Tous droits réservés.
      </div>
    </footer>
  );
};
