import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <img 
              src="https://i.ibb.co/q302FpTF/AS77-4.png" 
              alt="AS7J7.ma Logo" 
              className="h-16 md:h-20 w-auto"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white uppercase">AS7J7.MA</h1>
              <p className="text-blue-200 text-sm md:text-base">Assistance Routière 24h/24</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Nos Services
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+212520443322" className="flex items-center gap-2 group">
              <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                <Phone className="h-5 w-5 text-red-600" />
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-200">Urgence 24h/24</p>
                <p className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">+212 520 443 322</p>
              </div>
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-500">
            <div className="flex flex-col space-y-4 text-center">
              <button onClick={() => scrollToSection('services')} className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-bold mx-auto">Nos Services</button>
              <div className="pt-4 border-t border-blue-500">
                <p className="text-sm text-blue-200">Urgence 24h/24</p>
                <a href="tel:+212520443322" className="text-lg font-bold text-white hover:text-yellow-300">+212 520 443 322</a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
