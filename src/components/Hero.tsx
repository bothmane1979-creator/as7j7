import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative text-white py-20 min-h-[calc(100vh-88px)] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://i.ibb.co/SwCtDxZk/page-as7j7.png)'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-blue-900/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-center mx-auto">
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/q302FpTF/AS77-4.png" 
              alt="AS7J7.ma" 
              className="h-24 md:h-32 w-auto mx-auto mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase">
            AS7J7.MA
          </h1>
          <h2 className="text-2xl md:text-4xl text-blue-200 mb-8">
            Votre Assistance Routière de Confiance au Maroc
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Service disponible 24h/24 et 7j/7 - Intervention rapide partout au Maroc
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:+212520443322"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 animate-pulse-red"
            >
              <Phone className="h-5 w-5" />
              Appel d'Urgence
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2"
            >
              Demander un Devis
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="flex flex-col items-center gap-2 text-white">
              <Clock className="h-8 w-8 text-yellow-400" />
              <p className="font-semibold">Disponibilité</p>
              <p className="text-sm text-blue-200">24h/24 - 7j/7</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <MapPin className="h-8 w-8 text-yellow-400" />
              <p className="font-semibold">Zone d'intervention</p>
              <p className="text-sm text-blue-200">Tout le Maroc</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Phone className="h-8 w-8 text-yellow-400" />
              <p className="font-semibold">Intervention</p>
              <p className="text-sm text-blue-200">Rapide & efficace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
