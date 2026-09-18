import React from 'react';
import { teamMembers } from '../data/content';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Instagram } from 'lucide-react';
import { Language } from '../types';

interface AboutUsProps {
  language: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const isPt = language === 'pt';

  const pillars = [
    {
      title: isPt ? 'Excelência' : 'Excellence',
      description: isPt
        ? 'Rigor técnico, cronogramas milimétricos e fornecedores de primeira linha para que nada seja deixado ao acaso.'
        : 'Technical rigor, minute-by-minute scheduling, and premier vendors so nothing is left to chance.',
      icon: ShieldCheck
    },
    {
      title: isPt ? 'Personalização' : 'Personalization',
      description: isPt
        ? 'Cada celebração é única. Não usamos fórmulas prontas; desenhamos projetos sob medida para traduzir sua essência.'
        : 'Every celebration is singular. We craft bespoke projects that capture and elevate your genuine essence.',
      icon: Heart
    },
    {
      title: isPt ? 'Atenção aos Detalhes' : 'Attention to Detail',
      description: isPt
        ? 'Do perfume das flores à sintonia das luzes e acolhimento dos convidados, cuidamos de tudo com carinho e discrição.'
        : 'From delicate floral nuances to acoustic harmony and guest welcoming, we orchestrate every single detail.',
      icon: Sparkles
    }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F3E8DF] filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-[#EFE3DB] filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-[#A67C46] font-semibold">
            {isPt ? 'Conheça a Amora' : 'About Amora'}
          </span>
          <h2 className="mt-3 font-serif-title text-3xl sm:text-5xl lg:text-5xl text-[#351425] font-light leading-tight">
            {isPt ? 'Você sonha, a gente realiza com afeto e maestria.' : 'You dream, we bring it to life with grace.'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5C4855] leading-relaxed font-normal">
            {isPt
              ? 'A Amora Assessoria & Eventos nasceu com um propósito inegociável: permitir que você desfrute da melhor fase da vida sem o peso do estresse e das preocupações. Somos uma assessoria boutique que une sensibilidade humana, gestão orçamentária cirúrgica e presença impecável.'
              : 'Amora Assessoria was founded on an essential promise: allowing you to relish the happiest season of your life without the burden of stress. We are a boutique advisory studio combining heartfelt intuition with rigorous coordination.'}
          </p>
        </div>

        {/* The 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-8 rounded-2xl bg-[#F5EFEB] border border-[#E8DFD5] transition-all duration-300 hover:bg-[#FAF7F2] hover:border-[#C5A880]/60 hover:shadow-xl hover:shadow-[#4A1E34]/5 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#C5A880]/30 flex items-center justify-center text-[#4A1E34] mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#A67C46]" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#A67C46] uppercase mb-1">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-title text-2xl text-[#351425] font-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6A5A50] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founders Spotlight: Joyce Costa & Agatha Zillar */}
        <div className="mt-16 pt-16 border-t border-[#E8DFD5]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.28em] text-[#9E743B] font-semibold">
              {isPt ? 'Liderança & Gestão Exclusiva' : 'Leadership & Exclusive Advisory'}
            </span>
            <h3 className="mt-2 font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#2C0E1E] font-normal">
              {isPt ? 'À frente de cada sonho: Joyce & Agatha' : 'The Hearts Behind Your Dream: Joyce & Agatha'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5D4653]">
              {isPt
                ? 'Duas trajetórias complementares unidas pela mesma paixão: transformar desejos singulares em celebrações memoráveis e impecáveis.'
                : 'Two complementary backgrounds united by a single vision: orchestrating timeless celebrations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="relative rounded-3xl bg-[#FAF5EF] border-2 border-[#E3D4C5] p-6 sm:p-8 lg:p-9 shadow-md flex flex-col justify-between overflow-hidden group hover:border-[#671F43]/70 hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative Amora Gradient Top Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#671F43]/15 via-[#944638]/10 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    {/* Founder High-Res Portrait Frame */}
                    <div className="relative w-44 sm:w-48 h-60 sm:h-64 rounded-2xl overflow-hidden shrink-0 border-2 border-[#C59E65] shadow-lg bg-[#F4ECE4]">
                      <img
                        src={member.photo}
                        alt={`${member.name} ${member.surname} - ${member.role}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E1E]/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-[#2C0E1E]/80 backdrop-blur-sm text-center">
                        <span className="text-[11px] uppercase tracking-wider text-[#EBD8BE] font-medium">
                          {member.name} {member.surname}
                        </span>
                      </div>
                    </div>

                    {/* Name, Role & Social */}
                    <div className="text-center sm:text-left flex-1">
                      <div className="flex flex-col items-center sm:items-start gap-1">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#9E743B] font-bold">
                          {member.role}
                        </span>
                        <h4 className="font-serif-title text-3xl sm:text-4xl text-[#2C0E1E] font-normal tracking-wide">
                          {member.name}{' '}
                          <span className="font-script text-4xl sm:text-5xl text-[#671F43] ml-1">
                            {member.surname}
                          </span>
                        </h4>
                      </div>

                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#F4ECE4] border border-[#E3D4C5] text-xs text-[#501B39] hover:text-[#2C0E1E] hover:border-[#671F43] font-medium transition-all"
                      >
                        <Instagram className="w-3.5 h-3.5 text-[#9E743B]" />
                        <span>{member.instagram}</span>
                      </a>

                      {/* Bio Description */}
                      <p className="mt-4 text-sm sm:text-base text-[#5D4653] leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Badges / Competencies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F4ECE4] text-[#4A1733] border border-[#DFCFC2]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9E743B]" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Founder Personal Quote & Signature */}
                <div className="pt-6 border-t border-[#E3D4C5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs italic text-[#725765] max-w-sm text-center sm:text-left">
                    "{member.quote}"
                  </p>
                  <div className="font-script text-3xl text-[#501B39] select-none opacity-90">
                    {member.signature}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
