import React, { useEffect } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake,
  Building,
  MapPin
} from "lucide-react";
import { updatePageSeo } from "../utils/seo";

interface SobrePageProps {
  onNavigate: (path: string) => void;
}

export const SobrePage: React.FC<SobrePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo(
      "/sobre",
      `Sobre a Dra. Andreia Medeiros | Ortodontista CRO-SC 8767 em Balneário Camboriú`,
      `Conheça a trajetória profissional da Dra. Andreia Medeiros (CRO-SC 8767), especialista em Invisalign, Ortodontia e Ortopedia Facial com mais de 20 anos de atuação em Balneário Camboriú.`
    );
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white text-[#B98278] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#B98278]" /> Registro Profissional: {CLINIC_INFO.cro}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Sobre a <strong className="font-semibold text-[#25282B]">Dra. Andreia Medeiros</strong>
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Mais de 20 anos dedicados à Ortodontia, Ortopedia Facial e estética do sorriso com tecnologia de ponta em Balneário Camboriú.
          </p>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column (Desktop) / Top (Mobile): Card with draAndreia.webp */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[530px] rounded-2xl overflow-hidden border border-[#EAE3DF] bg-white p-2.5 shadow-2xs relative">
              <div className="relative w-full aspect-[530/876] max-h-[700px] overflow-hidden rounded-xl bg-[#F5F0ED]">
                <img
                  src={getOptimizedImageUrl(MEDIA_ASSETS.doctor.bioPhoto)}
                  alt={MEDIA_ASSETS.doctor.bioPhotoAlt}
                  width={530}
                  height={876}
                  className="w-full h-full object-cover object-top rounded-xl"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, "dra-andreia-retrato.webp")}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl text-[#25282B] border border-[#EAE3DF] shadow-xs">
                  <p className="font-bold text-sm sm:text-[15px] text-[#B98278] uppercase tracking-wider leading-snug">
                    Dra. Andreia Medeiros • {CLINIC_INFO.cro}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#55585B] font-medium mt-0.5">
                    Invisalign Doctor Certificada em Balneário Camboriú - SC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column (Desktop) / Bottom (Mobile): Trajetória Profissional Text */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-5">
            <div className="space-y-2">
              <span className="text-[#B98278] text-[10px] font-bold uppercase tracking-wider">
                Trajetória Profissional
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
                Experiência, Humanização e <strong className="font-semibold text-[#25282B]">Tecnologia Digital</strong>
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#55585B] leading-relaxed">
              <p>
                A <strong>Dra. Andreia Medeiros (CRO-SC 8767)</strong> iniciou sua trajetória na Odontologia em 2005. Ao longo de mais de 20 anos de prática clínica ininterrupta, construiu uma carreira fundamentada no aperfeiçoamento constante e na busca pelas soluções mais confortáveis e biológicas para seus pacientes.
              </p>
              <p>
                Como <strong>Invisalign Doctor certificada</strong>, adotou o fluxo digital completo em sua clínica no Centro de Balneário Camboriú (De Poli Saúde). A combinação do escaneamento intraoral 3D no iTero Element™ com o planejamento virtual ClinCheck® permite diagnósticos milimétricos sem os desconfortos das moldagens tradicionais.
              </p>
              <p>
                Além do foco em alinhadores invisíveis, possui sólida formação em <strong>Ortopedia Facial Infantil (Invisalign First™)</strong>, tratamentos autoligados de alta performance (<strong>Damon System®</strong>) e terapia miofuncional para DTM e ronco (<strong>Myobrace®</strong>).
              </p>
              <p className="pt-2 text-xs sm:text-sm text-[#25282B] font-medium leading-relaxed bg-[#FAF7F5] p-4 rounded-xl border border-[#EAE3DF]">
                A <strong>Dra. Andreia Medeiros</strong> foi reconhecida com o selo <strong>Invisalign Top Doctor nos anos de 2024 e 2025</strong>. Essa conquista destaca sua sólida experiência clínica, alta capacitação técnica e o compromisso contínuo em transformar sorrisos com a mais avançada tecnologia ortodôntica digital.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-[#EAE3DF] shadow-2xs">
                <p className="font-bold text-sm sm:text-[15px] text-[#25282B] flex items-center gap-2 leading-snug">
                  <ShieldCheck className="w-5 h-5 text-[#B98278]" />
                  <span>Filosofia de Atendimento</span>
                </p>
                <p className="text-xs sm:text-[13px] text-[#55585B] mt-1 leading-relaxed">
                  Um atendimento baseado em sinceridade, clareza e objetividade. Você entende o tratamento, conhece as possibilidades e decide com segurança.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#EAE3DF] shadow-2xs">
                <p className="font-bold text-sm sm:text-[15px] text-[#25282B] flex items-center gap-2 leading-snug">
                  <HeartHandshake className="w-5 h-5 text-[#B98278]" />
                  <span>Infraestrutura Moderna</span>
                </p>
                <p className="text-xs sm:text-[13px] text-[#55585B] mt-1 leading-relaxed">
                  Consultório equipado na De Poli Saúde (Rua 3130, Centro de BC) com fácil acesso e conforto total.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Top Doctor Seals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-6 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 bg-[#F5F0ED] text-[#B98278] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
              <Award className="w-3.5 h-3.5 text-[#B98278]" /> Reconhecimento de Excelência Ortodôntica
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
              Invisalign® <strong className="font-semibold text-[#25282B]">Top Doctor 2024 & 2025</strong>
            </h3>
            <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed">
              A Dra. Andreia Medeiros foi reconhecida com o selo <strong>Invisalign Top Doctor nos anos de 2024 e 2025</strong>. Essa conquista destaca sua sólida experiência clínica, alta capacitação técnica e o compromisso contínuo em transformar sorrisos com a mais avançada tecnologia ortodôntica digital.
            </p>
          </div>

          <div className="pt-2 max-w-lg mx-auto">
            <div className="flex justify-center items-center">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.doctor.topDoctorBadges)}
                alt={MEDIA_ASSETS.doctor.topDoctorBadgesAlt}
                className="w-full h-auto max-w-sm max-h-56 object-contain rounded-lg transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, "top_doctor_badges.webp")}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4 text-[11px] font-medium text-[#25282B]">
              <span className="flex items-center gap-1 bg-[#FAF7F5] px-3 py-1 rounded-full border border-[#EAE3DF] shadow-2xs">
                ★ Invisalign® Top Doctor (2024-2025)
              </span>
              <span className="flex items-center gap-1 bg-[#FAF7F5] px-3 py-1 rounded-full border border-[#EAE3DF] shadow-2xs">
                ★ Platinum Elite Advantage
              </span>
              <span className="flex items-center gap-1 bg-[#FAF7F5] px-3 py-1 rounded-full border border-[#EAE3DF] shadow-2xs">
                ★ iTero Element™ Top Doctor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Facade Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3DF] shadow-2xs space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30">
                <Building className="w-3.5 h-3.5 text-[#B98278]" /> Nossa Estrutura Presencial
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
                Consultório no <strong className="font-semibold text-[#25282B]">De Poli Saúde & Bem Estar</strong>
              </h3>
              <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed">
                Localizado no coração de Balneário Camboriú, nosso espaço foi idealizado para proporcionar conforto, privacidade e alta tecnologia durante todas as etapas do seu tratamento ortodôntico.
              </p>
              <div className="pt-1 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-[#25282B]">
                <MapPin className="w-4 h-4 text-[#B98278]" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-[#EAE3DF] shadow-2xs">
              <img
                src={getOptimizedImageUrl(MEDIA_ASSETS.clinic.buildingFacade)}
                alt={MEDIA_ASSETS.clinic.buildingFacadeAlt}
                className="w-full h-64 sm:h-72 object-cover hover:scale-102 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, "fachada-clinica-depoli.webp")}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
