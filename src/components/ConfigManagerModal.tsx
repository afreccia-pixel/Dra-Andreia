import React, { useState } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { MEDIA_ASSETS, getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { X, Copy, Check, Image as ImageIcon, User, CheckCircle2, RefreshCw } from "lucide-react";

interface ConfigManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigManagerModal: React.FC<ConfigManagerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"doctor" | "media">("doctor");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-[#E9ECEF] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#2D3136] text-white flex items-center justify-between border-b border-[#3D434A]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D48D84] text-white flex items-center justify-center font-bold text-xs">
              AM
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Central de Gerenciamento de Dados e Mídia</h2>
              <p className="text-xs text-[#BDC3C7]">Arquivo único de fácil atualização: <code className="text-[#D48D84]">mediaAssets.ts</code> e <code className="text-[#D48D84]">clinicData.ts</code></p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#3D434A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E9ECEF] bg-[#FAF8F6]">
          <button
            onClick={() => setActiveTab("doctor")}
            className={`flex-1 py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === "doctor"
                ? "border-[#D48D84] text-[#A65B52] bg-white"
                : "border-transparent text-[#7A828A] hover:text-[#2D3136]"
            }`}
          >
            <User className="w-4 h-4" /> Dados da Dra. Andreia ({CLINIC_INFO.cro})
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`flex-1 py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === "media"
                ? "border-[#D48D84] text-[#A65B52] bg-white"
                : "border-transparent text-[#7A828A] hover:text-[#2D3136]"
            }`}
          >
            <ImageIcon className="w-4 h-4" /> Repositório de Fotos e Imagens
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {activeTab === "doctor" ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF8F6] border border-[#E9ECEF] flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-[#2D3136]">Como atualizar as informações da Dra.?</p>
                  <p className="text-[#7A828A] text-xs mt-0.5">
                    Todas as informações abaixo estão centralizadas no arquivo <code className="bg-white px-1.5 py-0.5 rounded border border-[#E9ECEF] font-mono text-[#A65B52]">/src/data/clinicData.ts</code>.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#E8F5E9] text-[#2E7D32] px-2.5 py-1 rounded-full text-[10px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sincronizado
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Nome Profissional</p>
                  <p className="font-bold text-sm text-[#2D3136]">{CLINIC_INFO.doctorName}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Registro CRO & Certificação</p>
                  <p className="font-bold text-sm text-[#2D3136]">{CLINIC_INFO.cro} • {CLINIC_INFO.certification}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Experiência Profissional</p>
                  <p className="font-bold text-sm text-[#2D3136]">Mais de {CLINIC_INFO.experienceYears} anos (Ortodontista desde {CLINIC_INFO.startYear})</p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Telefone / WhatsApp</p>
                  <p className="font-bold text-sm text-[#2D3136]">{CLINIC_INFO.phone}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1 sm:col-span-2">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Endereço Completo do Consultório</p>
                  <p className="font-bold text-sm text-[#2D3136]">{CLINIC_INFO.fullAddress}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E9ECEF] space-y-1 sm:col-span-2">
                  <p className="text-[10px] uppercase font-bold text-[#7A828A]">Horários de Atendimento</p>
                  <p className="font-bold text-sm text-[#2D3136]">{CLINIC_INFO.workingHours.fullText}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#FAF8F6] border border-[#E9ECEF]">
                <p className="font-bold text-sm text-[#2D3136]">Pasta Única de Fotos (<code className="font-mono text-[#A65B52]">/public/</code>) & Repositório (<code className="font-mono text-[#A65B52]">mediaAssets.ts</code>)</p>
                <p className="text-[#7A828A] text-xs mt-1">
                  Todas as fotos do site ficam guardadas na pasta <code className="bg-white px-1.5 py-0.5 rounded border border-[#E9ECEF] font-mono text-[#A65B52]">/public/</code> e gerenciadas pelo arquivo único <code className="bg-white px-1.5 py-0.5 rounded border border-[#E9ECEF] font-mono text-[#A65B52]">mediaAssets.ts</code>. Quando você envia ou altera uma foto nessa pasta, o otimizador automático ajusta formato, qualidade e dimensões adequadas.
                </p>
              </div>

              {/* Photo Groups */}
              <div className="space-y-4">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#2D3136] border-b pb-1">
                  Foto Principal da Dra. Andreia Medeiros (Hero / Sobre)
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 items-center bg-[#FAF8F6] p-4 rounded-xl border border-[#E9ECEF]">
                  <img
                    src={getOptimizedImageUrl(MEDIA_ASSETS.doctor.heroPortrait, { width: 300 })}
                    alt={MEDIA_ASSETS.doctor.heroPortraitAlt}
                    className="w-28 h-36 object-cover object-top rounded-lg border border-[#E9ECEF] shadow-xs shrink-0"
                    onError={(e) => handleImageError(e, "dra-andreia-retrato.webp")}
                  />
                  <div className="space-y-2 flex-1 w-full">
                    <p className="font-bold text-xs text-[#2D3136]">Retrato Principal da Dra. Andreia Medeiros</p>
                    <p className="text-[10px] text-[#7A828A]">Chave de arquivo: <code className="font-mono text-[#A65B52]">MEDIA_ASSETS.doctor.heroPortrait</code></p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={MEDIA_ASSETS.doctor.heroPortrait}
                        className="w-full bg-white px-3 py-1.5 rounded-lg border border-[#E9ECEF] text-[11px] text-[#2D3136] font-mono truncate"
                      />
                      <button
                        onClick={() => handleCopy("doctor-portrait", MEDIA_ASSETS.doctor.heroPortrait)}
                        className="bg-[#2D3136] hover:bg-[#1E2124] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase shrink-0 flex items-center gap-1"
                      >
                        {copiedKey === "doctor-portrait" ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === "doctor-portrait" ? "Copiado" : "Copiar"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-xs uppercase tracking-wider text-[#2D3136] border-b pb-1 pt-2">
                  Banners dos Tratamentos Odontológicos
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(MEDIA_ASSETS.services).map(([key, url]) => (
                    <div key={key} className="p-3 rounded-xl border border-[#E9ECEF] bg-white flex items-center gap-3">
                      <img
                        src={getOptimizedImageUrl(url, { width: 150, height: 100 })}
                        alt={key}
                        className="w-16 h-12 object-cover rounded-lg border shrink-0"
                        onError={(e) => handleImageError(e)}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-xs text-[#2D3136] capitalize">{key}</p>
                        <p className="text-[10px] text-[#7A828A] truncate font-mono">{url}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-xs uppercase tracking-wider text-[#2D3136] border-b pb-1 pt-2">
                  Imagens dos Artigos do Blog
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(MEDIA_ASSETS.blog).map(([key, url]) => (
                    <div key={key} className="p-3 rounded-xl border border-[#E9ECEF] bg-white flex items-center gap-3">
                      <img
                        src={getOptimizedImageUrl(url, { width: 150, height: 100 })}
                        alt={key}
                        className="w-16 h-12 object-cover rounded-lg border shrink-0"
                        onError={(e) => handleImageError(e)}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-xs text-[#2D3136] capitalize">{key}</p>
                        <p className="text-[10px] text-[#7A828A] truncate font-mono">{url}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF8F6] border-t border-[#E9ECEF] flex items-center justify-between text-xs">
          <span className="text-[#7A828A]">Dra. Andreia Medeiros • CRO-SC 8767</span>
          <button
            onClick={onClose}
            className="bg-[#2D3136] hover:bg-[#1E2124] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Fechar Janela
          </button>
        </div>

      </div>
    </div>
  );
};
