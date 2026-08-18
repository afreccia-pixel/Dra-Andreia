import React, { useEffect } from "react";
import { CLINIC_INFO, SERVICES_DATA } from "../data/clinicData";
import { getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Award,
  Clock,
  HeartHandshake,
  Tag
} from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { updatePageSeo } from "../utils/seo";

interface DamonSystemPageProps {
  onNavigate: (path: string) => void;
}

export const DamonSystemPage: React.FC<DamonSystemPageProps> = ({ onNavigate }) => {
  const service = SERVICES_DATA.find((s) => s.id === "damon-system")!;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Olá, Dra. Andreia! Gostaria de agendar uma consulta para saber mais sobre o aparelho autoligado Damon System em Balneário Camboriú.")}`;

  useEffect(() => {
    updatePageSeo(
      "/damon-system",
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#B98278]" /> Damon System® — Ortodontia Autoligada de Alta Performance
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Damon System - <strong className="font-bold text-[#25282B]">Aparelho Autoligado</strong>
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Tecnologia autoligada de alta performance que reduz o atrito, acelera a movimentação dentária e diminui significativamente o número de consultas.
          </p>
        </div>
      </section>

      {/* Main Treatment Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Column (Desktop) / Top (Mobile): Image auto_ligado.webp */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-[#EAE3DF] bg-white p-2 shadow-2xs">
              <img
                src={getOptimizedImageUrl(service.heroImage)}
                alt="Aparelho autoligado Damon System em Balneário Camboriú, com a Dra. Andreia Medeiros"
                className="w-full h-auto object-cover max-h-[460px] rounded-xl"
                loading="lazy"
                onError={(e) => handleImageError(e, "auto_ligado.webp")}
              />
              <div className="mt-2 p-3 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF] flex items-center justify-between text-xs text-[#25282B]">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-[15px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Aparelho Autoligado Damon System®</span>
                </div>
                <span className="text-xs text-[#B98278] font-semibold bg-[#F5F0ED] px-2.5 py-0.5 rounded-md border border-[#B98278]/20">
                  Ormco Corporation
                </span>
              </div>
            </div>
          </div>

          {/* Left Column (Desktop) / Bottom (Mobile): Text & Features */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B98278]">
              Ortodontia Fixa Avançada
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B] leading-tight">
              O que é o <strong className="font-bold text-[#25282B]">Damon System®</strong> e como funciona?
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#55585B] leading-relaxed">
              <p>
                O Damon System® é o sistema autoligado mais avançado do mundo para quem busca os benefícios do aparelho fixo sem o incômodo das tradicionais "borrachinhas".
              </p>
              <p>
                As borrachinhas dos aparelhos convencionais acumulam placa bacteriana e criam um atrito forte que desacelera a movimentação dentária. No Damon System, uma tampa metálica de alta precisão prende o fio ortodôntico de forma suave e deslizante.
              </p>
              <p>
                Isso permite movimentações mais suaves e biológicas, reduz o desconforto e possibilita consultas de manutenção mais espaçadas — a cada 8 a 10 semanas, em vez de mensais.
              </p>
              <p>
                O sistema é indicado para casos de mordida cruzada, apinhamentos severos, dentes inclusos e correções de arcada, com máxima eficiência estética e funcional.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <h3 className="font-bold text-sm sm:text-[15px] uppercase text-[#25282B] tracking-wider leading-snug">
                Principais vantagens clínicas:
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#55585B]">
                {service.keyFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#FAF7F5] p-3 rounded-xl border border-[#EAE3DF]">
                    <CheckCircle2 className="w-5 h-5 text-[#B98278] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#25282B] leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Damon vs Conventional Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B98278]">
              Comparativo Tecnológico
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-light text-[#25282B]">
              <strong className="font-bold">Damon System®</strong> x Aparelho Fixo Convencional
            </h3>
          </div>

          <div className="overflow-x-auto border border-[#EAE3DF] rounded-xl shadow-2xs">
            <table className="w-full text-xs text-left text-[#25282B] border-collapse">
              <thead>
                <tr className="bg-[#F5F0ED] text-[#25282B] font-bold border-b border-[#EAE3DF]">
                  <th className="p-3.5 uppercase tracking-wider text-[11px] border-r border-[#EAE3DF]">Característica</th>
                  <th className="p-3.5 text-[#B98278] bg-[#F5F0ED] uppercase tracking-wider text-[11px] border-r border-[#EAE3DF]">Damon System® Autoligado</th>
                  <th className="p-3.5 uppercase tracking-wider text-[11px]">Aparelho Tradicional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE3DF] bg-white">
                <tr>
                  <td className="p-3.5 font-semibold text-[#25282B] border-r border-[#EAE3DF]">Uso de borrachinhas</td>
                  <td className="p-3.5 bg-[#FAF7F5] font-bold text-[#B98278] border-r border-[#EAE3DF]">Não (trava metálica integrada)</td>
                  <td className="p-3.5 text-[#55585B]">Sim (retêm bactérias e mancham)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#25282B] border-r border-[#EAE3DF]">Frequência de consultas</td>
                  <td className="p-3.5 bg-[#FAF7F5] font-bold text-[#B98278] border-r border-[#EAE3DF]">A cada 8 a 10 semanas</td>
                  <td className="p-3.5 text-[#55585B]">Mensal (a cada 30 dias)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#25282B] border-r border-[#EAE3DF]">Atrito e sensibilidade</td>
                  <td className="p-3.5 bg-[#FAF7F5] font-bold text-[#B98278] border-r border-[#EAE3DF]">Muito baixo (forças biológicas leves)</td>
                  <td className="p-3.5 text-[#55585B]">Alto (pressão mecânica forte)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#25282B] border-r border-[#EAE3DF]">Higiene bucal</td>
                  <td className="p-3.5 bg-[#FAF7F5] font-bold text-[#B98278] border-r border-[#EAE3DF]">Mais fácil e rápida</td>
                  <td className="p-3.5 text-[#55585B]">Mais trabalhosa, por causa das borrachinhas</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#25282B] border-r border-[#EAE3DF]">Tempo médio de tratamento</td>
                  <td className="p-3.5 bg-[#FAF7F5] font-bold text-[#B98278] border-r border-[#EAE3DF]">Em média 6 meses mais rápido</td>
                  <td className="p-3.5 text-[#55585B]">Padrão</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
          <h3 className="text-2xl font-sans font-light text-[#25282B]">
            Perguntas Frequentes sobre o <strong className="font-bold text-[#25282B]">Damon System®</strong>
          </h3>
          <p className="text-xs sm:text-sm text-[#55585B] italic">
            Tire todas as suas dúvidas sobre o tratamento em Balneário Camboriú
          </p>
        </div>
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
              "Damon System",
              "Aparelho Autoligado",
              "Ortodontia de Alta Performance",
              "Balneário Camboriú",
              "Sem Borrachinhas",
              "Dra. Andreia Medeiros",
              "Tratamento Rápido"
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
