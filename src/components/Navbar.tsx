import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenQuoteModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = language === 'pt'
    ? [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Processo', href: '#processo' },
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contato', href: '#contato' }
      ]
    : [
        { label: 'Home', href: '#inicio' },
        { label: 'About', href: '#sobre' },
        { label: 'Services', href: '#servicos' },
        { label: 'Process', href: '#processo' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Testimonials', href: '#depoimentos' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contato' }
      ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5EF]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(44,14,30,0.06)] border-b border-[#DFCFC2]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleScrollTo(e, '#inicio')}
          className="group flex items-center transition-transform duration-200 hover:scale-[1.01]"
        >
          <Logo size="md" variant="dark" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-[0.18em] font-medium text-[#4A3843] hover:text-[#671F43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9E743B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher + CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#F4ECE4] border border-[#DFCFC2] p-0.5 rounded-full text-[11px] font-medium tracking-wider">
            <button
              onClick={() => onLanguageChange('pt')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === 'pt'
                  ? 'bg-[#4A1733] text-[#FAF5EF] shadow-sm font-semibold'
                  : 'text-[#67515D] hover:text-[#2C0E1E]'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === 'en'
                  ? 'bg-[#4A1733] text-[#FAF5EF] shadow-sm font-semibold'
                  : 'text-[#67515D] hover:text-[#2C0E1E]'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA "Solicitar Orçamento" */}
          <a
            href="#contato"
            onClick={(e) => {
              if (onOpenQuoteModal) {
                e.preventDefault();
                onOpenQuoteModal();
              } else {
                handleScrollTo(e, '#contato');
              }
            }}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF5EF] bg-[#4A1733] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#2C0E1E] hover:shadow-lg hover:shadow-[#4A1733]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#C59E65]" />
              {language === 'pt' ? 'Solicitar Orçamento' : 'Request a Quote'}
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
            className="p-2 text-xs font-semibold text-[#4A1E34] bg-[#F2EAE0] rounded-full"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#351425] hover:bg-[#F2EAE0] rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#E8DFD5] shadow-2xl transition-all duration-300 animate-fadeIn">
          <div className="px-6 py-8 flex flex-col gap-5 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base uppercase tracking-[0.18em] font-serif font-medium text-[#351425] hover:text-[#C5A880] py-2 border-b border-[#EFE7E0] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contato"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) {
                    e.preventDefault();
                    onOpenQuoteModal();
                  } else {
                    handleScrollTo(e, '#contato');
                  }
                }}
                className="w-full text-center py-3 px-6 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F2] bg-[#4A1E34] rounded-full shadow-md"
              >
                {language === 'pt' ? 'Solicitar Orçamento' : 'Request a Quote'}
              </a>

              <p className="text-center text-xs text-[#8C7362] font-script text-xl pt-2">
                Você sonha, a gente realiza
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
