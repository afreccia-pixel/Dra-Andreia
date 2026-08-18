import React, { useState } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { Logo } from "./Logo";
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2,
  Printer,
  ChevronDown,
  Settings,
  Smile,
  ShieldCheck,
  Award
} from "lucide-react";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConfigManager: () => void;
  onOpenSchemaInspector: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPath, 
  onNavigate, 
  onOpenConfigManager,
  onOpenSchemaInspector 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const treatmentItems = [
    { title: "Invisalign®", desc: "Alinhadores invisíveis e tecnologia iTero 3D", path: "/invisalign-balneario-camboriu", highlight: true },
    { title: "Vivera - Invisalign", desc: "Contenções transparentes de alta resistência", path: "/vivera-invisalign" },
    { title: "Damon System®", desc: "Aparelho autoligado de alta performance", path: "/damon-system" },
    { title: "Myobrace®", desc: "Ortopedia miofuncional para crianças e DTM", path: "/myobrace" },
    { title: "Clínica Geral", desc: "Profilaxia, clareamento e restaurações", path: "/clinica-geral-ortodontia" },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessageDefault)}`;

  return (
    <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E9ECEF] shadow-2xs">
      
      {/* Top Utility Bar */}
      <div className="bg-[#25282B] text-[#ECF0F1] text-xs sm:text-xs py-1.5 px-3 sm:px-4 border-b border-[#373B40]">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Left Info Badges */}
          <div className="flex items-center gap-2 text-[#BDC3C7]">
            <span className="inline-flex items-center gap-1 font-bold text-[#B98278] bg-[#1E2124] px-2 py-0.5 rounded-full border border-[#B98278]/30 text-[11px] sm:text-[10px] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B98278]" /> {CLINIC_INFO.cro}
            </span>
            <span className="inline-flex items-center gap-1 font-bold text-amber-300 bg-[#1E2124] px-2 py-0.5 rounded-full border border-amber-800/40 text-[11px] sm:text-[10px] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-300" /> Top Doctor
            </span>
            <span className="hidden lg:inline text-[#7F8C8D]">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[#BDC3C7] text-xs">
              <Clock className="w-3.5 h-3.5 text-[#B98278]" /> {CLINIC_INFO.workingHours.fullText}
            </span>
          </div>

          {/* Right Direct Tools */}
          <div className="flex items-center gap-2 text-xs">
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-semibold text-[#ECF0F1] text-xs sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B98278]" />
              <span className="hidden xs:inline">{CLINIC_INFO.phone}</span>
              <span className="xs:hidden">Ligar</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Header Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleLinkClick("/")} 
          className="cursor-pointer group py-0.5"
        >
          <Logo variant="dark" size="md" />
        </div>

        {/* Modern Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#25282B]">
          
          {/* Home */}
          <button
            onClick={() => handleLinkClick("/")}
            className={`transition-all duration-150 py-1.5 border-b-2 ${
              currentPath === "/"
                ? "text-[#B98278] border-[#B98278] font-extrabold"
                : "border-transparent text-[#25282B] hover:text-[#B98278]"
            }`}
          >
            Início
          </button>

          {/* Treatments Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`transition-all duration-150 py-1.5 border-b-2 flex items-center gap-1 ${
                currentPath.includes("invisalign") || currentPath.includes("vivera") || currentPath.includes("damon") || currentPath.includes("myobrace") || currentPath.includes("clinica")
                  ? "text-[#B98278] border-[#B98278] font-extrabold"
                  : "border-transparent text-[#25282B] hover:text-[#B98278]"
              }`}
            >
              <span>Tratamentos</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#B98278]" : ""}`} />
            </button>

            {/* Dropdown Box */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#EAE3DF] p-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                {treatmentItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF7F5] transition-colors flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F5F0ED] text-[#B98278] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B98278] group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#25282B] group-hover:text-[#B98278] transition-colors flex items-center gap-1">
                        {item.title}
                        {item.highlight && <span className="text-[9px] bg-[#B98278] text-white px-1.5 py-0.2 rounded-full uppercase">Destaque</span>}
                      </p>
                      <p className="text-[10px] text-[#55585B] normal-case font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* About Doctor */}
          <button
            onClick={() => handleLinkClick("/sobre")}
            className={`transition-all duration-150 py-1.5 border-b-2 ${
              currentPath === "/sobre"
                ? "text-[#B98278] border-[#B98278] font-extrabold"
                : "border-transparent text-[#25282B] hover:text-[#B98278]"
            }`}
          >
            Sobre a Dra.
          </button>

          {/* Testimonials */}
          <button
            onClick={() => handleLinkClick("/depoimentos")}
            className={`transition-all duration-150 py-1.5 border-b-2 ${
              currentPath === "/depoimentos"
                ? "text-[#B98278] border-[#B98278] font-extrabold"
                : "border-transparent text-[#25282B] hover:text-[#B98278]"
            }`}
          >
            Depoimentos
          </button>

          {/* Blog */}
          <button
            onClick={() => handleLinkClick("/blog")}
            className={`transition-all duration-150 py-1.5 border-b-2 ${
              currentPath === "/blog"
                ? "text-[#B98278] border-[#B98278] font-extrabold"
                : "border-transparent text-[#25282B] hover:text-[#B98278]"
            }`}
          >
            Blog
          </button>

          {/* Contact */}
          <button
            onClick={() => handleLinkClick("/contato")}
            className={`transition-all duration-150 py-1.5 border-b-2 ${
              currentPath === "/contato"
                ? "text-[#B98278] border-[#B98278] font-extrabold"
                : "border-transparent text-[#25282B] hover:text-[#B98278]"
            }`}
          >
            Contato
          </button>

        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B98278] hover:bg-[#A36F66] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs hover:shadow-sm transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Agendar WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#25282B] hover:bg-[#FAF7F5] border border-[#EAE3DF]"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE3DF] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 text-base font-semibold text-[#25282B]">
            <button onClick={() => handleLinkClick("/")} className="w-full text-left p-3 rounded-xl hover:bg-[#FAF7F5] text-[15px]">
              Início
            </button>

            <div className="p-3 space-y-1.5 bg-[#FAF7F5] rounded-xl border border-[#EAE3DF]">
              <p className="text-xs font-bold text-[#B98278] uppercase tracking-wider px-2 py-1">Tratamentos</p>
              {treatmentItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className="w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-white font-medium flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  {item.highlight && <Sparkles className="w-4 h-4 text-[#B98278]" />}
                </button>
              ))}
            </div>

            <button onClick={() => handleLinkClick("/sobre")} className="w-full text-left p-3 rounded-xl hover:bg-[#FAF7F5] text-[15px]">
              Sobre a Dra. Andreia
            </button>
            <button onClick={() => handleLinkClick("/depoimentos")} className="w-full text-left p-3 rounded-xl hover:bg-[#FAF7F5] text-[15px]">
              Depoimentos
            </button>
            <button onClick={() => handleLinkClick("/blog")} className="w-full text-left p-3 rounded-xl hover:bg-[#FAF7F5] text-[15px]">
              Blog Informativo
            </button>
            <button onClick={() => handleLinkClick("/contato")} className="w-full text-left p-3 rounded-xl hover:bg-[#FAF7F5] text-[15px]">
              Contato & Localização
            </button>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-xs"
            >
              <MessageSquare className="w-4 h-4" /> Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
