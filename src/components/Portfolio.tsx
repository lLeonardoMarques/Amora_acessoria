import React, { useState } from 'react';
import { portfolioItems } from '../data/content';
import { PortfolioItem, Language } from '../types';
import { Eye, MapPin, Calendar, Users, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface PortfolioProps {
  language: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const categories = isPt
    ? [
        { id: 'todos', label: 'Todos os Eventos' },
        { id: 'casamentos', label: 'Casamentos' },
        { id: 'corporativos', label: 'Corporativos' },
        { id: 'celebracoes', label: '15 Anos & Celebrações' },
        { id: 'sociais', label: 'Eventos Sociais' }
      ]
    : [
        { id: 'todos', label: 'All Events' },
        { id: 'casamentos', label: 'Weddings' },
        { id: 'corporativos', label: 'Corporate' },
        { id: 'celebracoes', label: 'Galas & Parties' },
        { id: 'sociais', label: 'Social & Intimate' }
      ];

  const filteredItems = selectedCategory === 'todos'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem) => {
    setActiveLightboxItem(item);
    setActiveGalleryIndex(0);
  };

  const nextImage = () => {
    if (!activeLightboxItem) return;
    setActiveGalleryIndex((prev) => (prev + 1) % activeLightboxItem.galleryImages.length);
  };

  const prevImage = () => {
    if (!activeLightboxItem) return;
    setActiveGalleryIndex((prev) =>
      prev === 0 ? activeLightboxItem.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#F4ECE4] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-[#9E743B] font-semibold">
            {isPt ? 'Galeria de Produções' : 'Curated Portfolio'}
          </span>
          <h2 className="mt-3 font-serif-title text-3xl sm:text-5xl text-[#2C0E1E] font-normal">
            {isPt ? 'Histórias Que Tivemos a Honra de Orquestrar' : 'Stories We Were Honored to Orchestrate'}
          </h2>
          <div className="w-16 h-[2px] bg-[#C59E65] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5D4653]">
            {isPt
              ? 'Uma seleção de celebrações com alma, bom gosto e momentos que ficaram marcados para sempre.'
              : 'A curated selection of celebrations infused with genuine warmth, refined taste, and unforgettable moments.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-[#4A1733] text-[#FAF5EF] border-[#4A1733] shadow-md font-semibold'
                  : 'bg-[#FAF5EF] text-[#5D4653] border-[#DFCFC2] hover:border-[#671F43] hover:text-[#2C0E1E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-[#FAF5EF] border border-[#DFCFC2] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#4A1733]/15 hover:border-[#671F43]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Subtle Hover Overlay */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#EAE0D6]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient and Hover Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E1E]/90 via-[#2C0E1E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <span className="self-end px-3 py-1 rounded-full bg-[#FAF5EF]/95 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#4A1733] font-semibold">
                    {item.categoryLabel}
                  </span>

                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#EBD8BE] font-medium mb-1">
                      <Eye className="w-4 h-4 text-[#C59E65]" />
                      {isPt ? 'Clique para ver galeria completa' : 'Click to view full gallery'}
                    </span>
                    <p className="text-sm text-white/95 line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Corner Category Badge (Always Visible) */}
                <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-200">
                  <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#C5A880]/40 text-[10px] uppercase tracking-widest text-[#6A4B3A] font-semibold">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <h3 className="font-serif-title text-xl text-[#351425] font-normal group-hover:text-[#4A1E34] transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-[#8C7362] font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A67C46]" />
                    {item.location.split(',')[0]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#A67C46]" />
                    {item.guestsCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#2C1824]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border border-[#C5A880]/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            {/* Top Close Bar */}
            <div className="p-4 sm:p-6 border-b border-[#E8DFD5] flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#A67C46] font-semibold">
                  {activeLightboxItem.categoryLabel}
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#351425] font-light">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-2 rounded-full bg-[#F5EFEB] text-[#4A1E34] hover:bg-[#4A1E34] hover:text-[#FAF7F2] transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8">
              {/* Main Lightbox Image with Arrows */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-black/5 mb-6">
                <img
                  src={activeLightboxItem.galleryImages[activeGalleryIndex]}
                  alt={`${activeLightboxItem.title} foto ${activeGalleryIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {activeLightboxItem.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#351425] shadow-md transition-all"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#351425] shadow-md transition-all"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#351425]/80 text-[#FAF7F2] text-xs font-mono">
                  {activeGalleryIndex + 1} / {activeLightboxItem.galleryImages.length}
                </div>
              </div>

              {/* Thumbnail strip */}
              {activeLightboxItem.galleryImages.length > 1 && (
                <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto pb-2">
                  {activeLightboxItem.galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeGalleryIndex === idx
                          ? 'border-[#4A1E34] ring-2 ring-[#C5A880]'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Event Metadata & Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-y border-[#E8DFD5] mb-6 text-sm text-[#5C4855]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A67C46]" />
                  <span>{activeLightboxItem.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A67C46]" />
                  <span>{activeLightboxItem.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#A67C46]" />
                  <span>{activeLightboxItem.guestsCount}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#351425] mb-2">
                  {isPt ? 'Sobre Este Projeto' : 'About This Project'}
                </h4>
                <p className="text-sm sm:text-base text-[#5C4855] leading-relaxed">
                  {activeLightboxItem.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#351425] mb-3">
                  {isPt ? 'Destaques da Assessoria Amora:' : 'Amora Advisory Highlights:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLightboxItem.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs bg-[#F5EFEB] text-[#4A1E34] border border-[#E3D7CC]"
                    >
                      <Sparkles className="w-3 h-3 text-[#A67C46]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="p-4 sm:p-6 border-t border-[#E8DFD5] bg-[#F5EFEB] flex items-center justify-between">
              <span className="text-xs text-[#8C7362] font-script text-2xl">
                Amora Assessoria & Eventos
              </span>
              <a
                href="#contato"
                onClick={() => setActiveLightboxItem(null)}
                className="px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium bg-[#4A1E34] text-[#FAF7F2] hover:bg-[#351425] transition-all"
              >
                {isPt ? 'Quero um Evento Como Este' : 'Plan an Event Like This'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
