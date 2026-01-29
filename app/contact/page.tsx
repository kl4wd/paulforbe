"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-6">
       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-5xl font-serif font-bold text-rothschild mb-6">Parlons de votre avenir.</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Nos experts sont à votre disposition pour un audit confidentiel et sans engagement.
                </p>
                
                <div className="space-y-4 text-gray-600 mb-8">
                    <p><strong>Adresse :</strong> 9 Rue du 4 Septembre, 75002 Paris</p>
                    <p><strong>Email :</strong> contact@paulforbe.com</p>
                </div>


                <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border border-white/50 relative group">
                    <div className="absolute inset-0 bg-rothschild/20 pointer-events-none z-10 mix-blend-overlay" />
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.524966603093!2d2.333550376846985!3d48.86728797133334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c8801d0bf%3A0x66c04f9e31d8c19!2s9%20Rue%20du%204%20Septembre%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1706555555555!5m2!1sfr!2sfr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: "grayscale(100%) invert(100%) contrast(80%) sepia(20%) hue-rotate(180deg)" }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale transition-all duration-700 hover:grayscale-0"
                    />
                </div>
            </div>

            <GlassCard className="p-10">
                <form className="space-y-6" onSubmit={async (e) => {
                    e.preventDefault();
                    if (!confirm("Voulez-vous envoyer ce message ?")) return;
                    
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    formData.append('type', 'contact');
                    
                    const submitBtn = form.querySelector('button');
                    if (submitBtn) { 
                        submitBtn.disabled = true; 
                        submitBtn.textContent = "Envoi en cours..."; 
                    }
                    
                    try {
                        const res = await fetch('/api/send-email', {
                            method: 'POST',
                            body: formData
                        });
                        
                        if (res.ok) {
                            alert("Message envoyé avec succès !");
                            form.reset();
                        } else {
                            alert("Une erreur est survenue.");
                        }
                    } catch {
                        alert("Erreur de connexion.");
                    } finally {
                        if (submitBtn) {
                             submitBtn.disabled = false;
                             submitBtn.textContent = "Envoyer"; 
                        }
                    }
                }}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-sm font-semibold text-gray-600">Prénom</label>
                             <input name="firstName" type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rothschild focus:ring-1 focus:ring-rothschild outline-none transition-all" />
                        </div>
                         <div className="space-y-2">
                             <label className="text-sm font-semibold text-gray-600">Nom</label>
                             <input name="lastName" type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rothschild focus:ring-1 focus:ring-rothschild outline-none transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-600">Email</label>
                         <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rothschild focus:ring-1 focus:ring-rothschild outline-none transition-all" />
                    </div>
                     <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-600">Message</label>
                         <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rothschild focus:ring-1 focus:ring-rothschild outline-none transition-all"></textarea>
                    </div>
                    <Button className="w-full">Envoyer</Button>
                </form>
            </GlassCard>
       </div>
    </div>
  )
}
