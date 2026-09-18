import React from 'react';
import { partnersLogos } from '../data/content';
import { Language } from '../types';
import { Sparkles } from 'lucide-react';

interface PartnersProps {
  language: Language;
}

export const Partners: React.FC<PartnersProps> = ({ language }) => {
  const isPt = language === 'pt';

  return (
    <section className="py-20 bg-[#F5EFEB] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#A67C46]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C7362] font-semibold">
            {isPt ? 'Curadoria de Confiança' : 'Curated Elite Partners'}
          </span>
        </div>
        <h3 className="font-serif-title text-2xl sm:text-3xl text-[#351425] font-light mb-12">
          {isPt
            ? 'Trabalhamos com os Melhores Fornecedores do Mercado'
            : 'Partnered with the Most Reputable Luxury Vendors'}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partnersLogos.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] transition-all duration-300 group hover:border-[#C5A880] hover:shadow-md hover:-translate-y-0.5 flex flex-col items-center justify-center min-h-[90px]"
            >
              <span className="font-serif text-base sm:text-lg text-[#6A5A50] group-hover:text-[#4A1E34] transition-colors font-medium tracking-wide">
                {partner.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#A67C46] mt-1 opacity-80 group-hover:opacity-100">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
