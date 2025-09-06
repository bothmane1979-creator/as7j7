import React from 'react';
import { Wrench, Battery, Fuel, Truck, AlertTriangle, Key, Settings, Car } from 'lucide-react';
import EmergencyGeoLocation from './EmergencyGeoLocation';

const Services: React.FC = () => {
  const services = [
    { icon: <Car className="h-8 w-8" />, title: 'Pneu Crevé', description: 'Remplacement ou réparation de votre pneu sur place.' },
    { icon: <Battery className="h-8 w-8" />, title: 'Panne de Batterie', description: 'Démarrage par câbles ou remplacement de la batterie.' },
    { icon: <Fuel className="h-8 w-8" />, title: 'Panne de Carburant', description: 'Livraison de carburant directement sur votre lieu de panne.' },
    { icon: <Truck className="h-8 w-8" />, title: 'Véhicule en Panne', description: 'Remorquage sécurisé vers le garage de votre choix.' },
    { icon: <AlertTriangle className="h-8 w-8" />, title: 'Remorquage Accident', description: 'Prise en charge et remorquage de votre véhicule accidenté.' },
    { icon: <Settings className="h-8 w-8" />, title: 'Erreur de Carburant', description: 'Vidange du réservoir et nettoyage du circuit de carburant.' },
    { icon: <Key className="h-8 w-8" />, title: 'Clés Enfermées', description: 'Ouverture de votre véhicule en toute sécurité, sans dommage.' },
    { icon: <Wrench className="h-8 w-8" />, title: 'Problèmes Mineurs', description: 'Diagnostic et réparation de petites pannes sur place.' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services d'Assistance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de solutions pour vous dépanner sur la route, quelle que soit la situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-5 rounded-full inline-block mb-5 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <EmergencyGeoLocation />
        </div>
      </div>
    </section>
  );
};

export default Services;
