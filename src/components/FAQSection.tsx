import React, { useState } from 'react';
import { faqData } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F5EFEB] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#C5A880]/40 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#A67C46]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#6A4B3A] font-semibold">
              {isPt ? 'Tire Suas Dúvidas' : 'Frequently Asked Questions'}
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#351425] font-light">
            {isPt ? 'Perguntas Frequentes' : 'Clear Answers, Total Peace of Mind'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base text-[#5C4855]">
            {isPt
              ? 'Tudo o que você precisa saber sobre o nosso modelo de assessoria, metodologia e atendimento.'
              : 'Everything you need to know about our boutique process, contract timelines, and on-the-day presence.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] overflow-hidden transition-all duration-300 hover:border-[#C5A880]/70 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#351425] font-normal leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#4A1E34] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4A1E34] text-[#FAF7F2]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#6A5A50] leading-relaxed border-t border-[#F0E6DC] animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact helper */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#7A6960]">
          {isPt ? 'Ainda tem alguma dúvida específica? ' : 'Have another question? '}
          <a
            href="#contato"
            className="font-semibold text-[#4A1E34] underline hover:text-[#A67C46] transition-colors"
          >
            {isPt ? 'Converse diretamente com a Joyce e a Agatha' : 'Speak directly with Joyce & Agatha'}
          </a>
        </div>
      </div>
    </section>
  );
};
