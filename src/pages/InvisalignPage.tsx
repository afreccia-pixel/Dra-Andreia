import React, { useEffect } from "react";
import { CLINIC_INFO, SERVICES_DATA, TESTIMONIALS_DATA } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ArrowRight,
  Smile,
  Cpu,
  Layers,
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { updatePageSeo } from "../utils/seo";

interface InvisalignPageProps {
  onNavigate: (path: string) => void;
}

export const InvisalignPage: React.FC<InvisalignPageProps> = ({ onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === "invisalign")!;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Olá, Dra. Andreia! Gostaria de agendar uma consulta sobre Invisalign em Balneário Camboriú e fazer o escaneamento 3D iTero.")}`;

  useEffect(() => {
    updatePageSeo(
      "/invisalign-balneario-camboriu",
      service.seoTitle,
      service.seoDescription,
      service.faqs
    );
  }, [service]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Hero Section Priority SEO */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 relative overflow-hidden border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-white text-[#B98278] px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border border-[#B98278]/30 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B98278]" />
              <span>Invisalign Doctor Certificada • {CLINIC_INFO.cro}</span>
            </div>

            {/* MANDATORY H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] leading-tight tracking-tight">
              Invisalign em Balneário Camboriú com a <strong className="font-bold text-[#25282B]">Dra. Andreia Medeiros</strong>
            </h1>

            <p className="text-base sm:text-lg text-[#55585B] leading-relaxed max-w-2xl mx-auto">
              Tecnologia ortodôntica 100% digital com escaneamento 3D no <strong className="text-[#25282B] font-semibold">iTero Element™</strong> e simulação virtual do resultado no <strong className="text-[#25282B] font-semibold">ClinCheck®</strong>. Sem fios, sem brackets e com máxima discrição.
            </p>
          </div>

        </div>
      </section>

      {/* Main Treatment Features & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column (Desktop) / Top (Mobile): Image caixa_invisa.webp */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xs border border-[#EAE3DF] bg-white p-2">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.services.caixaInvisa)}
                alt="Kit de Alinhadores Transparentes Invisalign® com Dra. Andreia Medeiros em Balneário Camboriú"
                className="w-full h-auto object-cover max-h-[460px] rounded-xl"
                loading="eager"
                onError={(e) => handleImageError(e, "caixa_invisa.webp")}
              />
              <div className="mt-2 p-3 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF] flex items-center justify-between text-xs text-[#25282B]">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-[15px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Kit Oficial de Alinhadores Invisalign®</span>
                </div>
                <span className="text-xs text-[#B98278] font-semibold bg-[#F5F0ED] px-2.5 py-0.5 rounded-md border border-[#B98278]/20">
                  Align Technology
                </span>
              </div>
            </div>
          </div>

          {/* Left Column (Desktop) / Bottom (Mobile): Text & Features */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
              <Smile className="w-3.5 h-3.5 text-[#B98278]" /> O Alinhador Transparente Líder Mundial
            </span>

            <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
              Por que escolher o <strong className="font-bold text-[#25282B]">Invisalign®</strong> em Balneário Camboriú?
            </h2>

            <div className="space-y-4 text-sm sm:text-sm text-[#55585B] leading-relaxed">
              {service.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <p className="font-semibold text-[#25282B] bg-[#FAF7F5] p-3.5 rounded-xl border border-[#EAE3DF]">
                Através do software ClinCheck®, você visualiza antes mesmo de iniciar o tratamento cada movimentação dentária e a simulação 3D do seu sorriso final transformado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-[#EAE3DF] shadow-2xs">
                  <p className="font-bold text-sm sm:text-xs text-[#25282B] mb-1">{b.title}</p>
                  <p className="text-xs sm:text-[11px] text-[#55585B] leading-normal">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Invisalign para Todas as Idades */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
            <Smile className="w-3.5 h-3.5 text-[#B98278]" /> Um Sorriso Alinhado em Cada Fase da Vida
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
            Invisalign para <strong className="font-bold text-[#25282B]">Todas as Idades</strong>
          </h2>
          <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed">
            Oferecemos o Invisalign para pacientes de todas as idades, com linhas de tratamento específicas para crianças, adolescentes e adultos — sempre com alinhadores transparentes, removíveis e confortáveis.
          </p>
        </div>

        {/* 3 Age Group Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Crianças: Invisalign First */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE3DF] shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
            <div className="h-64 overflow-hidden bg-[#FAF7F5] relative">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.services.invisalignCriancas)}
                alt="Invisalign First™ para crianças de 6 a 10 anos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, "inisa_criancas.webp")}
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#B98278] px-3 py-1 rounded-full shadow-xs">
                Invisalign First™ • Crianças (6 a 10 anos)
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Invisalign First™ — crianças de 6 a 10 anos</h3>
                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                  Indicada para a fase de crescimento e dentição mista, orienta o desenvolvimento maxilomandibular e cria espaço para os dentes permanentes, tratando apinhamento, espaçamento e arcadas estreitas. Intervir cedo ajuda a prevenir problemas ortodônticos mais severos no futuro. Os alinhadores são removíveis, facilitando a alimentação e a higiene bucal das crianças.
                </p>
              </div>
            </div>
          </div>

          {/* Adolescentes: Invisalign Teen */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE3DF] shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
            <div className="h-64 overflow-hidden bg-[#FAF7F5] relative">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.services.invisalignAdolescentes)}
                alt="Invisalign Teen™ para adolescentes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, "inisa_adolecente.webp")}
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#B98278] px-3 py-1 rounded-full shadow-xs">
                Invisalign Teen™ • Adolescentes
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Invisalign Teen™ — adolescentes</h3>
                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                  Une a discrição dos alinhadores transparentes a um indicador de desgaste (um marcador azul que desbota conforme o uso), permitindo acompanhar a adesão ao tratamento. O sistema acomoda o nascimento dos molares ao longo do tratamento, e alinhadores de reposição estão inclusos em caso de perda. São removíveis para refeições, escovação e atividades esportivas.
                </p>
              </div>
            </div>
          </div>

          {/* Adultos */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE3DF] shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
            <div className="h-64 overflow-hidden bg-[#FAF7F5] relative">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.services.invisalignAdultos)}
                alt="Invisalign para adultos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, "inisa_adultos.webp")}
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#B98278] px-3 py-1 rounded-full shadow-xs">
                Invisalign® • Adultos
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Invisalign para adultos</h3>
                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                  Alternativa quase invisível aos aparelhos metálicos, indicada de ajustes estéticos simples a casos complexos, incluindo mordida cruzada, aberta ou profunda. Por serem removíveis, não impõem restrições alimentares e simplificam a higiene bucal. O planejamento digital em 3D (ClinCheck) mostra o resultado esperado antes de iniciar o tratamento.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Modalidades de tratamento & Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EAE3DF] shadow-2xs space-y-6">
          
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#25282B]">
              Modalidades de tratamento
            </h2>
            <p className="text-sm text-[#55585B] leading-relaxed">
              O tipo de Invisalign varia conforme a complexidade do caso e a idade do paciente:
            </p>
          </div>

          {/* Clean Elegant Table */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EAE3DF] text-[#25282B] text-sm sm:text-base font-bold">
                  <th className="py-3 pr-4 font-bold text-[#25282B] w-1/4">Modalidade</th>
                  <th className="py-3 px-4 font-bold text-[#25282B] w-1/2">Indicação</th>
                  <th className="py-3 pl-4 font-bold text-[#25282B] w-1/4">Duração aprox.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F0ED] text-[#55585B] text-sm sm:text-base">
                <tr className="hover:bg-[#FAF7F5] transition-colors">
                  <td className="py-4 pr-4 font-semibold text-[#25282B] align-top">First</td>
                  <td className="py-4 px-4 text-[#55585B] align-top">Crianças de 6–10 anos, dentição mista</td>
                  <td className="py-4 pl-4 text-[#25282B] font-medium align-top">6–18 meses</td>
                </tr>
                <tr className="hover:bg-[#FAF7F5] transition-colors">
                  <td className="py-4 pr-4 font-semibold text-[#25282B] align-top">Express</td>
                  <td className="py-4 px-4 text-[#55585B] align-top">Ajustes estéticos rápidos e simples</td>
                  <td className="py-4 pl-4 text-[#25282B] font-medium align-top">3–6 meses</td>
                </tr>
                <tr className="hover:bg-[#FAF7F5] transition-colors">
                  <td className="py-4 pr-4 font-semibold text-[#25282B] align-top">Lite</td>
                  <td className="py-4 px-4 text-[#55585B] align-top">Correções leves</td>
                  <td className="py-4 pl-4 text-[#25282B] font-medium align-top">6–12 meses</td>
                </tr>
                <tr className="hover:bg-[#FAF7F5] transition-colors">
                  <td className="py-4 pr-4 font-semibold text-[#25282B] align-top">Moderate</td>
                  <td className="py-4 px-4 text-[#55585B] align-top">Correções moderadas, com pequenos ajustes de mordida</td>
                  <td className="py-4 pl-4 text-[#25282B] font-medium align-top">12–18 meses</td>
                </tr>
                <tr className="hover:bg-[#FAF7F5] transition-colors">
                  <td className="py-4 pr-4 font-semibold text-[#25282B] align-top">Comprehensive</td>
                  <td className="py-4 px-4 text-[#55585B] align-top">Casos complexos, com problemas de mordida acentuados</td>
                  <td className="py-4 pl-4 text-[#25282B] font-medium align-top">12–18+ meses</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Technology Focus: iTero™ 3D Scanner & ClinCheck® */}
      <section id="scanner-itero" className="bg-[#25282B] text-white py-16 border-y border-[#373B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E2124] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
              <Cpu className="w-3.5 h-3.5 text-[#B98278]" /> Escaneamento 3D sem Massa
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-light">
              Como Funciona a Tecnologia <strong className="font-bold text-white">iTero™ e ClinCheck®</strong>
            </h2>
            <p className="text-xs sm:text-sm text-[#BDC3C7]">
              Adeus moldagens desconfortáveis de gesso e massa. Na clínica Dra. Andreia Medeiros, seu sorriso é digitalizado em alta definição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps?.map((p) => (
              <div
                key={p.step}
                className="bg-[#1E2124] rounded-xl p-6 border border-[#373B40] relative space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#B98278] text-white font-bold text-xs flex items-center justify-center">
                  #{p.step}
                </div>
                <h3 className="font-bold text-sm sm:text-[15px] text-white leading-snug">{p.title}</h3>
                <p className="text-xs sm:text-[13px] text-[#BDC3C7] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Invisalign Specific Patient Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F5] rounded-3xl p-8 border border-[#EAE3DF]">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h3 className="text-2xl font-sans font-bold text-[#25282B]">
              Depoimentos de Pacientes Invisalign®
            </h3>
            <p className="text-xs sm:text-sm text-[#55585B]">
              Histórias reais de transformação com a Dra. Andreia Medeiros em Balneário Camboriú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.filter(t => t.treatment.includes("Invisalign")).map((test) => (
              <div key={test.id} className="bg-white p-6 rounded-2xl border border-[#EAE3DF] shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">{"★".repeat(5)}</div>
                  <span className="text-xs text-[#B98278] font-bold bg-[#F5F0ED] px-2.5 py-0.5 rounded-full border border-[#B98278]/30">
                    {test.treatment}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed italic">"{test.comment}"</p>
                <div className="pt-3 border-t border-[#F5F0ED] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatarImg || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250"}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#EAE3DF] shrink-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm sm:text-[15px] font-bold text-[#25282B] leading-snug">{test.name}</p>
                      <p className="text-xs text-[#55585B] font-normal">{test.city}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#55585B]">{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory FAQ Accordion (6 Questions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          faqs={service.faqs}
          title="Perguntas Frequentes sobre Invisalign em Balneário Camboriú"
          subtitle="Respostas diretas para as dúvidas mais comuns sobre o tratamento"
        />
      </section>

      {/* Tags Section (After Perguntas Frequentes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 pb-2 border-t border-[#EAE3DF] space-y-2.5">
          <span className="text-xs font-bold text-[#25282B] uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#B98278]" /> TAGS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Invisalign",
              "Invisalign Doctor",
              "Alinhadores Invisíveis",
              "Scanner 3D iTero",
              "ClinCheck 3D",
              "Balneário Camboriú",
              "Dra. Andreia Medeiros",
              "Ortodontia Estética"
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
