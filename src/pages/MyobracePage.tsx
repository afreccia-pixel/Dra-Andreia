import React, { useEffect } from "react";
import { CLINIC_INFO, SERVICES_DATA } from "../data/clinicData";
import { getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  HeartPulse, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Activity,
  Moon,
  Baby,
  Smile,
  AlertCircle,
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { updatePageSeo } from "../utils/seo";

interface MyobracePageProps {
  onNavigate: (path: string) => void;
}

export const MyobracePage: React.FC<MyobracePageProps> = ({ onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === "myobrace")!;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Olá, Dra. Andreia! Gostaria de agendar uma consulta sobre Myobrace / Tratamento Miofuncional para DTM, bruxismo e ronco em Balneário Camboriú.")}`;

  useEffect(() => {
    updatePageSeo(
      "/myobrace",
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
            <HeartPulse className="w-3.5 h-3.5 text-[#B98278]" /> Ortopedia Miofuncional & Tratamento de DTM
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Como Funciona o Tratamento Miofuncional <strong className="font-bold text-[#25282B]">Myobrace®</strong> para Crianças e Adultos?
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Uma terapia sem aparelhos fixos criada para reeducar os músculos faciais, corrigir a respiração bucal e tratar DTM, bruxismo e ronco em Balneário Camboriú.
          </p>
        </div>
      </section>

      {/* Main Content & What is Myobrace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Column (Desktop) / Top (Mobile): Image Myobrace.webp */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-[#EAE3DF] bg-white p-2 shadow-2xs">
              <img
                src={getOptimizedImageUrl(service.heroImage)}
                alt="Criança com aparelho miofuncional Myobrace na Dra Andreia Medeiros em Balneário Camboriú"
                className="w-full h-auto object-cover max-h-[460px] rounded-xl"
                loading="lazy"
                onError={(e) => handleImageError(e, "Myobrace.webp")}
              />
              <div className="mt-2 p-3 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF] flex items-center justify-between text-xs text-[#25282B]">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-[15px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Sistema Miofuncional Myobrace®</span>
                </div>
                <span className="text-xs text-[#B98278] font-semibold bg-[#F5F0ED] px-2.5 py-0.5 rounded-md border border-[#B98278]/20">
                  Myofunctional Research
                </span>
              </div>
            </div>
          </div>

          {/* Left Column (Desktop) / Bottom (Mobile): Text & Features */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B98278]">
              Ortopedia Facial & Respiração
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B] leading-tight">
              O que é e como atua o <strong className="font-bold text-[#25282B]">Sistema Myobrace®</strong>?
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#55585B] leading-relaxed">
              <p>
                Muitos pais notam que seus filhos dormem de boca aberta, babam no travesseiro, roncam ou rangem os dentes durante a noite. Nos adultos, sintomas como estalidos na mandíbula, dores de cabeça ao acordar e bruxismo são frequentes.
              </p>
              <p>
                Em Balneário Camboriú, a <strong>Dra. Andreia Medeiros</strong> utiliza o <strong>Sistema Myobrace®</strong>, uma terapia miofuncional sem aparelhos fixos criada para reeducar os músculos faciais e corrigir a respiração, tratando a causa raiz dos problemas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-[#EAE3DF] shadow-2xs space-y-1">
                  <p className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">{b.title}</p>
                  <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Os Maus Hábitos Miofuncionais mais comuns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-10 border border-[#EAE3DF] space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B98278]">
              <AlertCircle className="w-4 h-4 text-[#B98278]" />
              <span>Causa Raiz</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-light text-[#25282B]">
              Os maus hábitos miofuncionais <strong className="font-bold text-[#25282B]">mais comuns</strong>:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-5 border border-[#EAE3DF] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F5] text-[#B98278] flex items-center justify-center font-bold text-xs border border-[#EAE3DF]">
                1
              </div>
              <h4 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Respiração Bucal</h4>
              <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                Respirar pela boca impede que a língua descanse no céu da boca, estreitando o palato e impedindo o crescimento correto da face.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#EAE3DF] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F5] text-[#B98278] flex items-center justify-center font-bold text-xs border border-[#EAE3DF]">
                2
              </div>
              <h4 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Posição Incorreta da Língua</h4>
              <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                Pressionar a língua contra os dentes ao engolir (deglutição atípica) empurra os dentes para a frente e desestabiliza a mordida.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#EAE3DF] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F5] text-[#B98278] flex items-center justify-center font-bold text-xs border border-[#EAE3DF]">
                3
              </div>
              <h4 className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">Chupetas e Chupação de Dedo</h4>
              <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed">
                O uso prolongado altera o formato do palato e a inclinação dos incisivos superiores em crianças em fase de crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como o Myobrace Atua na Prática */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B98278]">
              Metodologia de Tratamento
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
              Como o <strong className="font-bold text-[#25282B]">Myobrace®</strong> atua na prática?
            </h3>
            <p className="text-xs sm:text-sm text-[#55585B]">
              O tratamento consiste na combinação de duas ações essenciais e fáceis de encaixar na rotina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0ED] text-[#B98278] flex items-center justify-center border border-[#EAE3DF]">
                <Moon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#25282B]">
                1. Aparelho Miofuncional Removível
              </h4>
              <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed">
                Um dispositivo flexível de silicone patenteado, usado por apenas <strong>1 a 2 horas durante o dia</strong> e <strong>durante a noite de sono</strong>. Não requer colagem nem ajustes metálicos dolorosos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5F0ED] text-[#B98278] flex items-center justify-center border border-[#EAE3DF]">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#25282B]">
                2. Exercícios Miofuncionais (Activities)
              </h4>
              <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed">
                Exercícios simples de poucos minutos diários que ensinam o paciente a respirar pelo nariz, posicionar a língua corretamente no teto da boca e engolir de forma adequada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios em Crianças x Adultos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EAE3DF] shadow-2xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
              Benefícios em <strong className="font-bold text-[#25282B]">Crianças x Adultos</strong>
            </h3>
            <p className="text-xs sm:text-sm text-[#55585B]">
              Indicação personalizada para cada fase de desenvolvimento biológico e funcional:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Crianças */}
            <div className="bg-[#FAF7F5] rounded-xl p-6 border border-[#EAE3DF] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#25282B]">
                <Baby className="w-5 h-5 text-[#B98278]" />
                <span>Em Crianças (Dos 3 aos 15 anos):</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#55585B]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Estimula o desenvolvimento natural e correto das arcadas dentárias.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Reduz severamente a necessidade de usar aparelhos fixos complexos na adolescência.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Melhora a postura, a atenção escolar e a qualidade do sono profundo.</span>
                </li>
              </ul>
            </div>

            {/* Adultos */}
            <div className="bg-[#FAF7F5] rounded-xl p-6 border border-[#EAE3DF] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#25282B]">
                <Smile className="w-5 h-5 text-[#B98278]" />
                <span>Em Adultos (Tratamento de DTM e Bruxismo):</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#55585B]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Descomprime a Articulação Temporomandibular (ATM).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Alivia a tensão muscular do masseter e temporal, reduzindo dores de cabeça.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                  <span>Diminui o estalido articular e previne o desgaste dos dentes por bruxismo e apertamento.</span>
                </li>
              </ul>
            </div>
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
              "Myobrace",
              "Tratamento Miofuncional",
              "DTM",
              "Bruxismo",
              "Respiração Bucal",
              "Ortopedia Facial Infantil",
              "Balneário Camboriú",
              "Dra. Andreia Medeiros"
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
