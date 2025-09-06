import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre demande de devis ! Nous vous contacterons très prochainement.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Devis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Besoin d'une intervention ou d'un devis ? Contactez-nous. Nos équipes sont disponibles 24h/24.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-lg"><Phone className="h-6 w-6 text-red-600" /></div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Urgences 24h/24</h4>
                <p className="text-gray-600 mb-1">Appelez immédiatement en cas d'urgence</p>
                <a href="tel:+212520443322" className="text-xl font-bold text-red-600 hover:text-red-700">+212 520 443 322</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-lg"><Phone className="h-6 w-6 text-gray-700" /></div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Devis et Informations</h4>
                <p className="text-gray-600 mb-1">Pour vos demandes de devis</p>
                <a href="tel:+212520111122" className="text-lg font-semibold text-gray-700 hover:text-gray-900">+212 520 111 122</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-lg"><Mail className="h-6 w-6 text-gray-700" /></div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 mb-1">Envoyez-nous vos questions</p>
                <a href="mailto:contact@as7j7.ma" className="text-lg font-semibold text-gray-700 hover:text-gray-900">contact@as7j7.ma</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-lg"><MapPin className="h-6 w-6 text-gray-700" /></div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Zone d'intervention</h4>
                <p className="text-gray-600">Tout le territoire marocain.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <img src="https://i.ibb.co/5hYyDD5z/AS77-5.png" alt="Demande de devis" className="h-20 md:h-24 w-auto mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 uppercase">AS7J7.MA - Demande de Devis</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Nom complet" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Téléphone" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="votre@email.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Type de service *</label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Sélectionnez un service</option>
                  <option value="pneu">Pneu Crevé</option>
                  <option value="batterie">Panne de Batterie</option>
                  <option value="carburant">Panne de Carburant</option>
                  <option value="remorquage">Véhicule en Panne</option>
                  <option value="accident">Remorquage Accident</option>
                  <option value="cles">Clés Enfermées</option>
                  <option value="autre">Problèmes Mineurs</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Description de votre problème</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Description de votre problème"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />Envoyer ma Demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
