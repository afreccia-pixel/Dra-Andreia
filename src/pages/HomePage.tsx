import React from "react";
import { CLINIC_INFO, SERVICES_DATA } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Award,
  ChevronRight,
  MapPin,
  Clock,
  Heart,
  Smile,
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessageDefault)}`;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Section: Sophisticated & Warm Rosé Presentation */}
      <section className="relative overflow-hidden bg-[#F5F0ED] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-[#EAE3DF]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Photo & Highlights: Shown First on Mobile, Right Column on Desktop */}
            <div className="order-1 lg:order-2 lg:col-span-6 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-md border border-[#EAE3DF] group">
                
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden bg-[#ECE4E0]">
                  <img
                    src={getOptimizedImageUrl(MEDIA_ASSETS.doctor.heroPortrait, { width: 800 })}
                    alt={MEDIA_ASSETS.doctor.heroPortraitAlt}
                    className="w-full h-auto object-cover object-top max-h-[380px] sm:max-h-[500px] lg:max-h-[560px] rounded-2xl transform group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, "dra-andreia-consultorio.webp")}
                  />

                  {/* Top Seal Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#EAE3DF] shadow-xs flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#25282B]">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B98278]" />
                    <span>Invisalign Top Doctor</span>
                  </div>
                </div>

                {/* Bottom Signature Card */}
                <div className="mt-2.5 sm:mt-3 p-3 sm:p-4 bg-[#FAF7F5] rounded-xl flex items-center justify-between border border-[#EAE3DF]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#25282B] tracking-wide">
                      {CLINIC_INFO.doctorName}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#B98278] font-semibold mt-0.5">
                      {CLINIC_INFO.cro} • Ortodontia & Ortopedia Facial
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#55585B] mt-0.5 sm:mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B98278]" /> De Poli Saúde - Balneário Camboriú
                    </p>
                  </div>

                  <div className="text-right shrink-0 border-l border-[#EAE3DF] pl-3 sm:pl-4">
                    <span className="text-xl sm:text-2xl font-bold text-[#B98278] font-sans">20+</span>
                    <p className="text-[8px] sm:text-[9px] uppercase font-bold text-[#55585B] tracking-wider">
                      Anos em SC
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Headline, Summary Info & CTA: Shown Below Photo on Mobile, Left Column on Desktop */}
            <div className="order-2 lg:order-1 lg:col-span-6 space-y-5 text-center lg:text-left">
              
              {/* Rating positioned above the title */}
              <a
                href={CLINIC_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-xs text-[#55585B] hover:text-[#B98278] transition-colors group cursor-pointer"
                title="Ver avaliações no Google da Dra. Andreia Medeiros"
              >
                <div className="flex items-center text-amber-500 text-sm leading-none">
                  {"★".repeat(5)}
                </div>
                <span className="font-bold text-[#25282B] group-hover:text-[#B98278] transition-colors">{CLINIC_INFO.googleRating.toFixed(1)} no Google Reviews</span>
                <span className="text-[#C8BEB7]">·</span>
                <span className="text-[#55585B] group-hover:underline">Avaliações de Pacientes</span>
              </a>

              {/* Headline */}
              <h1 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] leading-[1.2] lg:leading-[1.15] tracking-tight">
                E se você pudesse ver seu novo sorriso antes de começar o tratamento?
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-base lg:text-lg text-[#55585B] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Com simulação 3D ClinCheck® e escaneamento iTero™, você visualiza o resultado real do seu caso já na primeira consulta com a <strong className="text-[#25282B] font-semibold">{CLINIC_INFO.doctorName}</strong>.
              </p>

              {/* Resumed Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE3DF] shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[15px] sm:text-[15px] font-bold text-[#25282B] leading-snug">Simulação ClinCheck® 3D</span>
                    <span className="block text-[13px] sm:text-[13px] text-[#55585B] font-medium mt-0.5">Veja o resultado antes de iniciar</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE3DF] shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[15px] sm:text-[15px] font-bold text-[#25282B] leading-snug">Scanner 3D iTero Element™</span>
                    <span className="block text-[13px] sm:text-[13px] text-[#55585B] font-medium mt-0.5">100% digital, sem moldes com massinha</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE3DF] shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[15px] sm:text-[15px] font-bold text-[#25282B] leading-snug">Alinhador Removível</span>
                    <span className="block text-[13px] sm:text-[13px] text-[#55585B] font-medium mt-0.5">Praticidade para comer e higienizar</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE3DF] shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[15px] sm:text-[15px] font-bold text-[#25282B] leading-snug">Mais Previsibilidade</span>
                    <span className="block text-[13px] sm:text-[13px] text-[#55585B] font-medium mt-0.5">Menos ajustes e consultas mais ágeis</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-2 sm:pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Quero simular meu sorriso</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate("/sobre");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F5] text-[#25282B] font-bold px-5 py-3.5 sm:px-6 sm:py-4 rounded-full text-xs uppercase tracking-wider border border-[#EAE3DF] shadow-2xs transition-colors"
                >
                  <span>Conhecer a Doutora</span>
                  <ArrowRight className="w-4 h-4 text-[#B98278]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section: Clean & Resumed Specialty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B98278]" /> Tratamentos Ortodônticos
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
            Especialidades com <strong className="font-semibold text-[#25282B]">Planejamento Digital</strong>
          </h2>
          <p className="text-xs sm:text-sm text-[#55585B]">
            Soluções personalizadas para transformar seu sorriso no Centro de Balneário Camboriú.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                onNavigate(`/${service.slug}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE3DF] shadow-2xs hover:shadow-md hover:border-[#B98278]/50 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5F0ED] text-[#B98278] flex items-center justify-center font-bold text-sm group-hover:bg-[#B98278] group-hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-sm sm:text-[15px] font-bold text-[#25282B] group-hover:text-[#B98278] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {service.summary}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#EAE3DF] flex items-center justify-between text-xs font-bold text-[#25282B] group-hover:text-[#B98278]">
                <span>Saber Mais</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#B98278]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion on Pure White Background */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <FaqAccordion />
      </section>

      {/* Tags Section (After Perguntas Frequentes) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 pb-2 border-t border-[#EAE3DF] space-y-2.5">
          <span className="text-xs font-bold text-[#25282B] uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#B98278]" /> TAGS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Invisalign Balneário Camboriú",
              "Dra. Andreia Medeiros",
              "Ortodontia Balneário Camboriú",
              "Damon System",
              "Myobrace",
              "Contenção Vivera",
              "Scanner 3D iTero",
              "ClinCheck 3D"
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#FAF7F5] hover:bg-[#F5F0ED] text-[#55585B] hover:text-[#25282B] text-xs font-medium rounded-lg border border-[#EAE3DF] transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
