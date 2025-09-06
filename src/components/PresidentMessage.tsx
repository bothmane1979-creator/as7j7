import React from 'react';
import { Quote } from 'lucide-react';

const PresidentMessage: React.FC = () => {
  return (
    <section id="president" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Le Mot du Fondateur</h2>
          
          <div className="relative">
            <Quote className="h-16 w-16 text-red-500 mx-auto mb-8 opacity-50" />
            
            <div className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
              <p className="mb-6">
                "Notre mission est claire : être à vos côtés dans les moments difficiles. Chaque appel est une responsabilité que nous prenons très au sérieux."
              </p>
              
              <p className="mb-6">
                "Nous investissons continuellement dans la formation de nos techniciens et la modernisation de nos équipements pour garantir votre sécurité."
              </p>
              
              <p className="font-semibold text-red-400">
                "Merci de nous faire confiance pour vous accompagner sur les routes."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 mt-12">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-800">SI</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-1 uppercase">SAID IDOUFKIR</h3>
              <p className="text-xl text-gray-300 uppercase">Fondateur de AS7J7.MA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
