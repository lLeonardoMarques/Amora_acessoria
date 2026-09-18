import React, { useState } from 'react';
import { processSteps } from '../data/content';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { Language } from '../types';

interface ProcessTimelineProps {
  language: Language;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EBE1] border border-[#C5A880]/40 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#A67C46]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#6A4B3A] font-semibold">
              {isPt ? 'Metodologia Exclusiva' : 'Our Proven Method'}
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#351425] font-light">
            {isPt ? 'Como Trabalhamos: Do Sonho ao Sucesso' : 'How We Work: From Dream to Reality'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5C4855]">
            {isPt
              ? 'Uma jornada estruturada em 4 etapas transparentes para que você aproveite cada instante com serenidade absoluta.'
              : 'A transparent four-phase journey ensuring you savor every moment in complete peace of mind.'}
          </p>
        </div>

        {/* Step Selector Pills for Desktop / Tablet */}
        <div className="hidden md:flex items-center justify-center gap-3 mb-16">
          {processSteps.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                activeStep === idx
                  ? 'bg-[#4A1E34] text-[#FAF7F2] border-[#4A1E34] shadow-md scale-105'
                  : 'bg-[#FAF7F2] text-[#6A5A50] border-[#E8DFD5] hover:border-[#C5A880] hover:text-[#351425]'
              }`}
            >
              <span className={`font-serif text-sm ${activeStep === idx ? 'text-[#C5A880]' : 'text-[#8C7362]'}`}>
                {step.stepNumber}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Highlight Card for Selected Step */}
        <div className="rounded-3xl bg-[#F5EFEB] border border-[#E3D7CC] p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-4xl sm:text-6xl font-serif text-[#C5A880] opacity-80 block font-light">
                {processSteps[activeStep].stepNumber}
              </span>
              <h3 className="font-serif-title text-3xl sm:text-4xl text-[#351425] font-normal mt-2 mb-3">
                {processSteps[activeStep].title}
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-[#A67C46] mb-4">
                {processSteps[activeStep].tagline}
              </p>
              <p className="text-base text-[#5C4855] leading-relaxed">
                {processSteps[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E8DFD5]">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#351425] mb-4">
                {isPt ? 'Entregas e Ações Desta Etapa:' : 'Deliverables & Key Milestones:'}
              </h4>
              <ul className="space-y-3.5">
                {processSteps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4A3E35]">
                    <CheckCircle2 className="w-5 h-5 text-[#A67C46] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#EFE7E0] flex items-center justify-between text-xs text-[#8C7362]">
                <span>
                  {isPt ? 'Supervisão direta:' : 'Direct supervision:'}{' '}
                  <strong className="text-[#4A1E34]">Joice Costa & Agatha Zillar</strong>
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-[#D5C2AF] text-[#4A3E35] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5EFEB]"
                  >
                    Anterior
                  </button>
                  <button
                    disabled={activeStep === processSteps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-[#4A1E34] text-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#351425] inline-flex items-center gap-1"
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical/Horizontal Flow Overview for Mobile/Scannability */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border ${
                activeStep === idx
                  ? 'bg-[#FAF7F2] border-[#C5A880] shadow-md ring-1 ring-[#C5A880]'
                  : 'bg-[#FAF7F2]/60 border-[#E8DFD5] hover:bg-[#FAF7F2]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl text-[#A67C46]">{step.stepNumber}</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C7362]">
                  FASE 0{idx + 1}
                </span>
              </div>
              <h4 className="font-serif text-lg text-[#351425] font-medium mb-1.5">
                {step.title}
              </h4>
              <p className="text-xs text-[#6A5A50] line-clamp-2">
                {step.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
