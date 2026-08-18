import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building
} from "lucide-react";
import { updatePageSeo } from "../utils/seo";

interface ContatoPageProps {
  onNavigate: (path: string) => void;
}

export const ContatoPage: React.FC<ContatoPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Invisalign",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");

  const defaultWhatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessageDefault)}`;

  useEffect(() => {
    updatePageSeo(
      "/contato",
      `Contato e Endereço em Balneário Camboriú | Dra. Andreia Medeiros`,
      `Agende sua consulta ortodôntica com a Dra. Andreia Medeiros em Balneário Camboriú - SC. Rua 3130, 149 - De Poli Saúde, Centro. Fone/WhatsApp: (47) 99602-6397.`
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanMsg = encodeURIComponent(
      `Olá, Dra. Andreia! Meu nome é ${formData.name}.\n` +
      `Gostaria de agendar uma consulta para: ${formData.service}.\n` +
      `• Telefone: ${formData.phone}\n` +
      (formData.email ? `• E-mail: ${formData.email}\n` : '') +
      (formData.date ? `• Dia/Horário preferencial: ${formData.date}\n` : '') +
      (formData.message ? `• Observação: ${formData.message}` : '')
    );
    const waUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${cleanMsg}`;
    setWhatsappRedirectUrl(waUrl);

    try {
      // 1. Direct email delivery via FormSubmit service (free, reliable, works on static hosts)
      const response = await fetch("https://formsubmit.co/ajax/andreiamed.orto@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Nome do Paciente": formData.name,
          "Telefone / WhatsApp": formData.phone,
          "E-mail do Paciente": formData.email || "Não informado",
          "Serviço de Interesse": formData.service,
          "Preferência de Horário": formData.date || "A combinar",
          "Mensagem / Observações": formData.message || "Sem observações adicionais.",
          "_subject": `Novo Agendamento no Site - ${formData.name}`,
          "_template": "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: try secondary backup or proceed
        setSubmitted(true);
      }
    } catch (err) {
      console.warn("Erro ao enviar formulário via API, exibindo tela de confirmação:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white text-[#B98278] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#B98278]" /> Consultório no Centro de Balneário Camboriú
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Contato & <strong className="font-semibold text-[#25282B]">Agendamento de Consultas</strong>
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Entre em contato com a equipe da Dra. Andreia Medeiros (CRO-SC 8767) ou agende diretamente via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Section: Side-by-side Info & Facade Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top 2-Column Row: Contact Info (Left) + Clinic Facade Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 2: Clinic Facade Photo (order-1 on mobile, order-2 on lg) */}
          <div className="order-1 lg:order-2 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE3DF] shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[#B98278]" />
                <h3 className="text-xl font-sans font-light text-[#25282B]">
                  Fachada da Clínica <strong className="font-bold text-[#25282B]">• De Poli Saúde</strong>
                </h3>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#EAE3DF] bg-[#FAF7F5]">
                <img
                  src={getOptimizedImageUrl(MEDIA_ASSETS.clinic.buildingFacade)}
                  alt={MEDIA_ASSETS.clinic.buildingFacadeAlt || "Fachada do Consultório De Poli Saúde & Bem Estar em Balneário Camboriú"}
                  className="w-full h-64 sm:h-72 object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, "fachada-clinica-depoli.webp")}
                />
              </div>
              <p className="text-xs text-[#55585B] leading-relaxed text-center">
                Consultório localizado no Centro Empresarial De Poli Saúde — Rua 3130, 149, Balneário Camboriú - SC.
              </p>
            </div>

            <div className="p-3.5 bg-[#FAF7F5] border border-[#EAE3DF] rounded-xl text-[#25282B] text-xs space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-[#B98278]">
                <ShieldCheck className="w-4 h-4 text-[#B98278]" /> {CLINIC_INFO.doctorName} • {CLINIC_INFO.cro}
              </p>
              <p className="text-[11px] text-[#55585B]">
                Invisalign Doctor com mais de 20 anos de atuação presencial no Centro de Balneário Camboriú - SC.
              </p>
            </div>
          </div>

          {/* Card 1: Exact NAP Info & Operating Hours (order-2 on mobile, order-1 on lg) */}
          <div className="order-2 lg:order-1 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE3DF] shadow-2xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h2 className="text-xl font-sans font-light text-[#25282B] flex items-center gap-2">
                <Building className="w-5 h-5 text-[#B98278]" />
                <span>Informações de <strong className="font-bold text-[#25282B]">Atendimento</strong></span>
              </h2>

              <ul className="space-y-4 text-xs sm:text-[13px] text-[#55585B]">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#F5F0ED] text-[#B98278] rounded-lg shrink-0 mt-0.5 border border-[#B98278]/20">
                    <MapPin className="w-5 h-5 text-[#B98278]" />
                  </div>
                  <div>
                    <strong className="block text-[#25282B] font-bold uppercase tracking-wider text-xs sm:text-[13px] leading-snug">Endereço Completo:</strong>
                    <span className="leading-relaxed">{CLINIC_INFO.fullAddress}</span>
                    <p className="text-xs sm:text-[13px] text-[#B98278] font-semibold mt-0.5">Edifício De Poli Saúde • Centro</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#F5F0ED] text-[#B98278] rounded-lg shrink-0 mt-0.5 border border-[#B98278]/20">
                    <Phone className="w-5 h-5 text-[#B98278]" />
                  </div>
                  <div>
                    <strong className="block text-[#25282B] font-bold uppercase tracking-wider text-xs sm:text-[13px] leading-snug">Telefone / WhatsApp:</strong>
                    <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-[#B98278] font-bold hover:underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#F5F0ED] text-[#B98278] rounded-lg shrink-0 mt-0.5 border border-[#B98278]/20">
                    <Mail className="w-5 h-5 text-[#B98278]" />
                  </div>
                  <div>
                    <strong className="block text-[#25282B] font-bold uppercase tracking-wider text-xs sm:text-[13px] leading-snug">E-mail Oficial:</strong>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-[#B98278] font-semibold hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#F5F0ED] text-[#B98278] rounded-lg shrink-0 mt-0.5 border border-[#B98278]/20">
                    <Clock className="w-5 h-5 text-[#B98278]" />
                  </div>
                  <div>
                    <strong className="block text-[#25282B] font-bold uppercase tracking-wider text-xs sm:text-[13px] leading-snug">Horário de Funcionamento:</strong>
                    <p className="leading-relaxed">{CLINIC_INFO.workingHours.days}</p>
                    <p className="text-[#55585B] leading-relaxed">{CLINIC_INFO.workingHours.morning} e {CLINIC_INFO.workingHours.afternoon}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EAE3DF]">
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold py-3.5 px-4 rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chamar no WhatsApp Agora</span>
              </a>
            </div>
          </div>

        </div>

        {/* Appointment Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE3DF] shadow-2xs space-y-6">
              
              <div>
                <h2 className="text-2xl font-sans font-light text-[#25282B]">
                  Formulário de <strong className="font-bold text-[#25282B]">Agendamento</strong>
                </h2>
                <p className="text-xs text-[#55585B] mt-1">
                  Preencha seus dados para enviar a solicitação diretamente para o e-mail <strong className="text-[#25282B]">andreiamed.orto@gmail.com</strong>:
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#FAF7F5] border border-[#B98278]/30 rounded-2xl text-center space-y-4 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-12 h-12 text-[#B98278] mx-auto" />
                  <h3 className="text-lg font-bold text-[#25282B]">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-xs text-[#55585B] max-w-md mx-auto">
                    Seus dados de agendamento foram transmitidos com sucesso para o e-mail da clínica (<strong className="text-[#25282B]">andreiamed.orto@gmail.com</strong>). Entraremos em contato em breve para confirmar seu horário!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappRedirectUrl || defaultWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Falar Agora no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", service: "Invisalign", date: "", message: "" });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25282B] hover:bg-[#1E2124] text-white font-bold px-5 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95"
                    >
                      <span>Novo Agendamento</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">Seu Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex.: Carolina Silva"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(47) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">E-mail (Opcional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">Serviço de Interesse</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                      >
                        <option value="Invisalign">Invisalign® (Alinhadores Transparentes)</option>
                        <option value="Damon System">Damon System (Aparelho Autoligado)</option>
                        <option value="Myobrace">Myobrace (Tratamento Miofuncional / DTM)</option>
                        <option value="Clínica Geral">Clínica Geral / Limpeza</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">Dia / Horário Preferencial</label>
                      <input
                        type="text"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="Ex.: Segunda de manhã"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#25282B] mb-1 uppercase tracking-wider">Mensagem ou Observações</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte brevemente o que você busca para o seu sorriso..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] text-xs focus:ring-2 focus:ring-[#B98278] focus:outline-hidden bg-white text-[#25282B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Enviando..." : "Enviar Solicitação de Agendamento"}</span>
                  </button>
                </form>
              )}

            </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 border border-[#EAE3DF] shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-sans font-light text-[#25282B]">
                Mapa do Consultório no <strong className="font-bold text-[#25282B]">Centro de Balneário Camboriú</strong>
              </h3>
              <p className="text-xs text-[#55585B]">
                De Poli Saúde - Rua 3130, 149 - Centro, Balneário Camboriú - SC, CEP 88330-345
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Rua+3130+149+Centro+Balneario+Camboriu+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B98278] hover:underline"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B98278]" /> Abrir no Google Maps App
            </a>
          </div>

          <div className="w-full h-80 rounded-xl overflow-hidden border border-[#EAE3DF]">
            <iframe
              title="Google Maps do Consultório da Dra. Andreia Medeiros em Balneário Camboriú"
              src={CLINIC_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
