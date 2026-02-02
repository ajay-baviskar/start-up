import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<div className="flex items-center">
  <img
    src="https://mixed-yellow-gull.myfilebase.com/ipfs/QmWZegzxfgNPyiDyYE1pxY9Dfw9SwHHB4o1a2bH52Tw3mT"
    alt="Altravionix Logo"
    className="h-12 md:h-15 w-auto object-contain"
  />
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('careers')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              Careers
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('careers')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              Careers
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
