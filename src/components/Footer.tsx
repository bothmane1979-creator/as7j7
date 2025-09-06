import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://i.ibb.co/q302FpTF/AS77-4.png" 
                alt="AS7J7.ma" 
                className="h-16 w-auto"
              />
              <h3 className="text-xl font-bold uppercase">AS7J7.MA</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance pour tous vos besoins d'assistance routière au Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-400 transition-colors">Nos Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-400 transition-colors">À Propos</button></li>
              <li><button onClick={() => scrollToSection('president')} className="text-gray-300 hover:text-red-400 transition-colors">Le Mot du Fondateur</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Pneu Crevé</li>
              <li>Panne de Batterie</li>
              <li>Panne de Carburant</li>
              <li>Véhicule en Panne</li>
              <li>Remorquage Accident</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm text-gray-400">Urgences 24h/24</p>
                  <a href="tel:+212520443322" className="text-white font-bold hover:text-red-400">+212 520 443 322</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contact@as7j7.ma" className="text-gray-300 hover:text-red-400">contact@as7j7.ma</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm text-gray-400">Zone d'intervention</p>
                  <p className="text-gray-300">Tout le Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          <p className="uppercase">© 2025 AS7J7.MA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
