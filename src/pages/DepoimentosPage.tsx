import React, { useEffect } from "react";
import { CLINIC_INFO, TESTIMONIALS_DATA } from "../data/clinicData";
import { getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { updatePageSeo } from "../utils/seo";

interface DepoimentosPageProps {
  onNavigate: (path: string) => void;
}

export const DepoimentosPage: React.FC<DepoimentosPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Olá, Dra. Andreia! Vi os depoimentos no site e gostaria de agendar uma consulta de avaliação.")}`;

  useEffect(() => {
    updatePageSeo(
      "/depoimentos",
      `Depoimentos e Avaliações de Pacientes | Dra. Andreia Medeiros Balneário Camboriú`,
      `Veja a avaliação dos pacientes tratados com Invisalign, Damon System e Ortopedia pela Dra. Andreia Medeiros (CRO-SC 8767) em Balneário Camboriú. Nota 5.0 no Google!`
    );
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-1 text-[#B98278] text-lg">
            {"★".repeat(5)}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Depoimentos de <strong className="font-bold text-[#25282B]">Pacientes Reais</strong>
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Avaliações oficiais coletadas diretamente do perfil da Dra. Andreia Medeiros no Google Meu Negócio. Nota máxima de 5.0 estrelas.
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-white text-[#B98278] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#B98278]/30 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#B98278]" />
              Sincronizado com Google Reviews (5.0★ - 48+ Avaliações)
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#EAE3DF] shadow-2xs flex flex-col justify-between space-y-4 hover:border-[#B98278]/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-[#B98278] text-sm">{"★".repeat(5)}</div>
                  <span className="text-xs text-[#B98278] font-bold bg-[#FAF7F5] px-2.5 py-0.5 rounded-full border border-[#B98278]/20 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B98278]" /> Google Review
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#55585B] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE3DF] flex items-center justify-between gap-3 text-xs sm:text-[13px]">
                <div className="flex items-center gap-3">
                  <img
                    src={getOptimizedImageUrl(t.avatarImg || "https://images.unsplash.com/photo-1534528741775-53994a69daeb", { width: 100, height: 100, fit: "crop" })}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#EAE3DF] shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e)}
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-[15px] text-[#25282B] leading-snug">{t.name}</p>
                    <p className="text-xs text-[#B98278] font-semibold">{t.treatment}</p>
                  </div>
                </div>
                <span className="text-xs text-[#7A828A] font-medium shrink-0">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews Info Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F0ED] rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] text-center space-y-4 shadow-2xs">
          <div className="w-12 h-12 bg-white rounded-2xl border border-[#EAE3DF] shadow-2xs flex items-center justify-center mx-auto text-[#B98278] font-bold text-lg">
            G
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-sans font-light text-[#25282B]">
              Avaliações Verificadas no <strong className="font-bold text-[#25282B]">Google Meu Negócio</strong>
            </h3>
            <p className="text-xs text-[#55585B] max-w-lg mx-auto">
              Todas as avaliações exibidas nesta página foram publicadas por pacientes reais no perfil oficial do consultório da Dra. Andreia Medeiros no Google.
            </p>
          </div>

          <div>
            <a
              href="https://www.google.com/search?q=Dra+Andreia+Medeiros+Ortodontista+Balneario+Camboriu+avaliacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF7F5] text-[#25282B] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-[#EAE3DF] shadow-2xs transition-all active:scale-95"
            >
              <span>Ver Perfil Oficial no Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B98278]" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F0ED] text-[#25282B] rounded-2xl p-8 text-center space-y-4 border border-[#EAE3DF] shadow-2xs">
          <h3 className="text-2xl font-sans font-light text-[#25282B]">
            Venha fazer parte do nosso grupo de <strong className="font-bold text-[#25282B]">pacientes satisfeitos</strong>
          </h3>
          <p className="text-xs text-[#55585B] max-w-lg mx-auto">
            Atendimento presencial na De Poli Saúde (Rua 3130, 149 - Centro, Balneário Camboriú - SC).
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Agendar Consulta no WhatsApp (47) 99602-6397</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
