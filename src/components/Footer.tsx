import React from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { Logo } from "./Logo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Search,
  Printer
} from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenSchemaInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSchemaInspector }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessageDefault)}`;

  const quickLinks = [
    { label: "Início", path: "/" },
    { label: "Invisalign® Balneário Camboriú", path: "/invisalign-balneario-camboriu" },
    { label: "Contenções Vivera™ (Invisalign)", path: "/vivera-invisalign" },
    { label: "Damon System (Autoligado)", path: "/damon-system" },
    { label: "Myobrace® (DTM e Ronco)", path: "/myobrace" },
    { label: "Clínica Geral Odontológica", path: "/clinica-geral-ortodontia" },
    { label: "Sobre a Dra. Andreia Medeiros", path: "/sobre" },
    { label: "Depoimentos de Pacientes", path: "/depoimentos" },
    { label: "Blog de Saúde Bucal", path: "/blog" },
    { label: "Contato & Localização", path: "/contato" },
  ];

  return (
    <footer className="bg-[#F5F0ED] text-[#55585B] pt-14 pb-8 border-t border-[#EAE3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#EAE3DF]">
          
          {/* Column 1: Doctor Profile & Credentials */}
          <div className="space-y-4">
            <div className="pb-1">
              <Logo variant="dark" size="md" />
            </div>

            <p className="text-sm sm:text-xs text-[#55585B] leading-relaxed">
              Especialista em Ortodontia, Ortopedia Facial e Invisalign Doctor com mais de 20 anos de experiência em Balneário Camboriú. Atendimento odontológico de excelência com tecnologia iTero™ 3D.
            </p>
          </div>
          {/* Column 2: Exact NAP Info & Horários */}
          <div className="space-y-4">
            <h4 className="text-[13px] sm:text-[12px] font-bold uppercase tracking-widest text-[#25282B]">
              Atendimento em Balneário Camboriú
            </h4>
            
            <ul className="space-y-3 text-sm sm:text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                <span className="text-[#25282B]">{CLINIC_INFO.fullAddress}</span>
              </li>
              
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B98278] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-[#B98278] transition-colors text-[#25282B] font-semibold">
                  {CLINIC_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B98278] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#B98278] transition-colors text-[#25282B]">
                  {CLINIC_INFO.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B98278] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#25282B]">{CLINIC_INFO.workingHours.days}</p>
                  <p className="text-[#55585B]">{CLINIC_INFO.workingHours.morning} e {CLINIC_INFO.workingHours.afternoon}</p>
                </div>
              </li>
            </ul>

            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 3: Internal Links */}
          <div className="space-y-4">
            <h4 className="text-[13px] sm:text-[12px] font-bold uppercase tracking-widest text-[#25282B]">
              Especialidades & Páginas
            </h4>

            <ul className="space-y-2 sm:space-y-1.5 text-sm sm:text-xs">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => {
                      onNavigate(link.path);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#B98278] text-[#55585B] transition-colors flex items-center gap-1.5 py-0.5 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#B98278]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Embedded Google Map & Location Confirmation */}
          <div className="space-y-3">
            <h4 className="text-[13px] sm:text-[12px] font-bold uppercase tracking-widest text-[#25282B] flex items-center justify-between">
              <span>Localização Exata</span>
              <span className="text-xs sm:text-[10px] text-[#55585B] font-normal">De Poli Saúde</span>
            </h4>

            {/* Embedded Google Maps Box */}
            <div className="w-full h-36 rounded-lg overflow-hidden border border-[#EAE3DF] relative shadow-2xs">
              <iframe
                title="Mapa do Consultório Dra. Andreia Medeiros em Balneário Camboriú"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>

            <p className="text-xs sm:text-[11px] text-[#55585B] flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#B98278]" />
              <span>Edifício De Poli Saúde • Centro - Balneário Camboriú</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-xs text-[#55585B]">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} {CLINIC_INFO.doctorName} • {CLINIC_INFO.cro}. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-[11px] text-[#55585B]">
              Rua 3130, 149 - De Poli Saúde, Centro, Balneário Camboriú - SC, CEP 88330-345.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-right">
            <p className="text-xs sm:text-[11px] text-[#55585B]">
              Site desenvolvido por{" "}
              <a 
                href="https://www.instagram.com/afreccia78" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B98278] hover:text-[#A36F66] font-semibold transition-colors underline underline-offset-2"
              > Freccia Tecnologia
              </a>  
            </p>        
          </div>
        </div>
      </div>
    </footer>
  );
};
