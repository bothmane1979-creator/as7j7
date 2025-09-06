import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">À Propos de AS7J7.ma</h2>
            <p className="text-lg text-gray-600 mb-6">
              Spécialisés dans l'assistance routière, nous intervenons 24h/24 et 7j/7 pour vous aider en cas de panne ou d'accident.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nous offrons un service de qualité, avec des techniciens qualifiés et des équipements modernes pour résoudre vos problèmes dans les meilleurs délais.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">15</div>
                <div className="text-gray-600">Ans d'Expérience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fiabilité Garantie</h3>
                <p className="text-gray-600 mt-2">Nos interventions sont assurées et nos techniciens sont certifiés.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Excellence Reconnue</h3>
                <p className="text-gray-600 mt-2">Notre entreprise est reconnue pour la qualité et la rapidité de ses services.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Disponibilité Totale</h3>
                <p className="text-gray-600 mt-2">Nos équipes sont mobilisées 24/7, y compris les jours fériés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
