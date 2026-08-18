import React, { useEffect } from "react";
import { CLINIC_INFO, SERVICES_DATA } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  Stethoscope, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { updatePageSeo } from "../utils/seo";

interface ClinicaGeralPageProps {
  onNavigate: (path: string) => void;
}

export const ClinicaGeralPage: React.FC<ClinicaGeralPageProps> = ({ onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === "clinica-geral-ortodontia")!;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Olá, Dra. Andreia! Gostaria de agendar uma consulta de limpeza / clínica geral em Balneário Camboriú.")}`;

  useEffect(() => {
    updatePageSeo(
      "/clinica-geral-ortodontia",
      service.seoTitle,
      service.seoDescription,
      service.faqs
    );
  }, [service]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Hero Header */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-2 bg-white text-[#B98278] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30 shadow-2xs">
            <Stethoscope className="w-3.5 h-3.5 text-[#B98278]" /> Prevenção & Cuidado Dental Integral
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            {service.h1}
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            {service.summary}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column (Desktop) / Top (Mobile): Clinic Photo & Procedures Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#EAE3DF] bg-white p-2 shadow-2xs">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.clinic.cabinet)}
                alt="Consultório Odontológico da Dra. Andreia Medeiros no Centro de Balneário Camboriú"
                className="w-full h-auto object-cover max-h-[360px] rounded-xl"
                loading="eager"
                onError={(e) => handleImageError(e, "dra-andreia-consultorio.webp")}
              />
              <div className="mt-2 p-3 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF] flex items-center justify-between text-xs text-[#25282B]">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-[15px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Consultório Odontológico Moderno</span>
                </div>
                <span className="text-xs text-[#B98278] font-semibold bg-[#F5F0ED] px-2.5 py-0.5 rounded-md border border-[#B98278]/20">
                  De Poli Saúde
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-6">
              <div className="space-y-2 pb-4 border-b border-[#EAE3DF]">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B98278]">
                  <ShieldCheck className="w-4 h-4 text-[#B98278]" />
                  <span>Procedimentos Realizados</span>
                </div>
                <h3 className="text-lg font-sans font-semibold text-[#25282B]">
                  Cuidados Clínicos & Preventivos
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-[13px] text-[#55585B]">
                {service.keyFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#FAF7F5] p-3 rounded-xl border border-[#EAE3DF]">
                    <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#25282B] leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left Column (Desktop) / Bottom (Mobile): Description & Differential */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B98278]">
                Saúde Bucal Completa
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
                Atendimento Odontológico no <strong className="font-bold text-[#25282B]">Centro de BC</strong>
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#55585B] leading-relaxed">
              {service.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Benefits Cards */}
            {service.benefits && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="bg-[#FAF7F5] rounded-xl p-4 border border-[#EAE3DF] space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-white text-[#B98278] flex items-center justify-center shadow-2xs border border-[#EAE3DF]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">{b.title}</h4>
                    <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion faqs={service.faqs} />
      </section>

      {/* Tags Section (After Perguntas Frequentes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 pb-2 border-t border-[#EAE3DF] space-y-2.5">
          <span className="text-xs font-bold text-[#25282B] uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#B98278]" /> TAGS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Clínica Geral Odontológica",
              "Limpeza e Profilaxia",
              "Prevenção Bucal",
              "Balneário Camboriú",
              "Dra. Andreia Medeiros",
              "Ortodontia Integrada",
              "Restaurações Estéticas"
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#FAF7F5] hover:bg-[#F5F0ED] text-[#55585B] hover:text-[#25282B] text-xs font-medium rounded-lg border border-[#EAE3DF] transition-colors"
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
