import React, { useEffect } from "react";
import { SERVICES_DATA } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { updatePageSeo } from "../utils/seo";

interface ViveraPageProps {
  onNavigate: (path: string) => void;
}

export const ViveraPage: React.FC<ViveraPageProps> = ({ onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === "vivera-invisalign") || SERVICES_DATA[0];

  useEffect(() => {
    updatePageSeo(
      "/vivera-invisalign",
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
            <Sparkles className="w-3.5 h-3.5 text-[#B98278]" /> Contenções Vivera™ • Invisalign® Technology
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Contenções <strong className="font-bold text-[#25282B]">Vivera™ Invisalign</strong> em Balneário Camboriú
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Preserve o resultado do seu sorriso com a contenção transparente de alta tecnologia da Align Technology. Até 30% mais resistente e feita sob medida com escaneamento digital 3D.
          </p>
        </div>
      </section>

      {/* Main Two-Column Treatment Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Desktop) / Bottom (Mobile): Text & Details */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            
            {/* Subtitle / Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B98278]" /> CONTENÇÕES VIVERA™
            </span>

            {/* Title (H2) */}
            <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
              Por que escolher o <strong className="font-bold text-[#25282B]">VIVERA™</strong> em Balneário Camboriú?
            </h2>

            {/* Body Text */}
            <div className="space-y-4 text-xs sm:text-sm text-[#55585B] leading-relaxed">
              <p>
                A contenção Vivera™ é fabricada pela mesma tecnologia do Invisalign®, com um material termoplástico até 30% mais resistente do que as contenções convencionais. Ela é feita sob medida a partir do escaneamento digital do seu sorriso, garantindo um encaixe preciso, confortável e praticamente invisível no dia a dia.
              </p>
              <p>
                Na Dra. Andreia Medeiros, em Balneário Camboriú, a Vivera™ é indicada tanto para quem finalizou o tratamento com Invisalign® quanto para pacientes que buscam uma contenção de alta durabilidade após qualquer tratamento ortodôntico. Cada kit é entregue em múltiplas contenções numeradas, feitas a partir do mesmo escaneamento 3D, para acompanhar você por mais tempo sem perder a precisão do encaixe.
              </p>
              <p className="font-semibold text-[#25282B] bg-[#FAF7F5] p-3.5 rounded-xl border border-[#EAE3DF]">
                Manter o sorriso estável depois do tratamento é tão importante quanto o próprio tratamento — e a Vivera™ é a forma mais segura e discreta de garantir esse resultado a longo prazo.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-[#EAE3DF] shadow-2xs">
                  <p className="font-bold text-sm sm:text-[15px] text-[#25282B] mb-1 flex items-center gap-2 leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0" />
                    <span>{b.title}</span>
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (Desktop) / Top (Mobile): Image vivera.webp */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-[#EAE3DF] bg-white p-2 shadow-2xs">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.services.viveraRetainers)}
                alt="Contenção Vivera™ - Invisalign em Balneário Camboriú"
                className="w-full h-auto object-cover max-h-[460px] rounded-xl"
                loading="eager"
                onError={(e) => handleImageError(e, "vivera.webp")}
              />
              <div className="mt-2 p-3 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF] flex items-center justify-between text-xs text-[#25282B]">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-[15px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Kit Original Vivera™ Retainers</span>
                </div>
                <span className="text-xs text-[#B98278] font-semibold bg-[#F5F0ED] px-2.5 py-0.5 rounded-md border border-[#B98278]/20">
                  Align Technology
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion 
          faqs={service.faqs}
          title="Perguntas Frequentes (FAQ)"
          subtitle="Tire todas as suas dúvidas sobre o tratamento em Balneário Camboriú"
        />
      </section>

      {/* Tags Section (After Perguntas Frequentes) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 pb-2 border-t border-[#EAE3DF] space-y-2.5">
          <span className="text-xs font-bold text-[#25282B] uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#B98278]" /> TAGS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Contenção Vivera",
              "Invisalign",
              "Vivera Retainers",
              "Estabilidade Ortodôntica",
              "Balneário Camboriú",
              "Dra. Andreia Medeiros",
              "SmartTrack"
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
