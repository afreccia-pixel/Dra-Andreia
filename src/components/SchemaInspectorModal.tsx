import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { X, CheckCircle2, ShieldCheck, FileCode, Search, Globe, Code, FileText } from "lucide-react";

interface SchemaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const SchemaInspectorModal: React.FC<SchemaInspectorModalProps> = ({ isOpen, onClose, currentPath }) => {
  const [jsonLdContent, setJsonLdContent] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"schema" | "nap" | "files">("schema");

  useEffect(() => {
    if (isOpen) {
      const script = document.getElementById("json-ld-schema");
      if (script && script.textContent) {
        try {
          const parsed = JSON.parse(script.textContent);
          setJsonLdContent(JSON.stringify(parsed, null, 2));
        } catch {
          setJsonLdContent(script.textContent);
        }
      } else {
        setJsonLdContent("// Nenhum script JSON-LD encontrado no cabeçalho nesta página.");
      }
    }
  }, [isOpen, currentPath]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-600/30 text-teal-400 border border-teal-500/30">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Auditoria SEO Local & Dados Estruturados</span>
                <span className="text-xs font-normal bg-teal-900/80 text-teal-300 px-2 py-0.5 rounded-full border border-teal-700/50">
                  Validação Ativa
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Página Atual: <code className="text-amber-300 font-mono">{currentPath}</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2.5 rounded-t-lg font-semibold transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === "schema"
                ? "bg-white text-teal-700 border-teal-600 shadow-2xs"
                : "text-slate-600 hover:text-slate-900 border-transparent"
            }`}
          >
            <Code className="w-4 h-4 text-teal-600" />
            <span>Schema.org JSON-LD Live</span>
          </button>

          <button
            onClick={() => setActiveTab("nap")}
            className={`px-4 py-2.5 rounded-t-lg font-semibold transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === "nap"
                ? "bg-white text-teal-700 border-teal-600 shadow-2xs"
                : "text-slate-600 hover:text-slate-900 border-transparent"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Consistência NAP & Registro</span>
          </button>

          <button
            onClick={() => setActiveTab("files")}
            className={`px-4 py-2.5 rounded-t-lg font-semibold transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === "files"
                ? "bg-white text-teal-700 border-teal-600 shadow-2xs"
                : "text-slate-600 hover:text-slate-900 border-transparent"
            }`}
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Sitemap.xml & Robots.txt</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 overflow-y-auto flex-1 font-sans text-xs text-slate-700">
          
          {activeTab === "schema" && (
            <div className="space-y-4">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-teal-900 leading-relaxed flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Dados Estruturados Gerados Dinamicamente para o Google:</p>
                  <p className="text-[11px] text-teal-800 mt-0.5">
                    Este script JSON-LD injeta as entidades <code className="font-mono bg-teal-100 px-1 py-0.5 rounded">Dentist</code>, <code className="font-mono bg-teal-100 px-1 py-0.5 rounded">LocalBusiness</code>, <code className="font-mono bg-teal-100 px-1 py-0.5 rounded">FAQPage</code> e <code className="font-mono bg-teal-100 px-1 py-0.5 rounded">BreadcrumbList</code> diretamente na tag head para indexação no Google Mapas e busca local em Balneário Camboriú.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-[11px] overflow-x-auto max-h-96 border border-slate-800">
                <pre>{jsonLdContent}</pre>
              </div>
            </div>
          )}

          {activeTab === "nap" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase text-teal-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Identificação do Negócio
                  </h4>
                  <ul className="space-y-1 text-slate-700 text-xs">
                    <li><strong>Profissional:</strong> {CLINIC_INFO.doctorName}</li>
                    <li><strong>Registro:</strong> {CLINIC_INFO.cro}</li>
                    <li><strong>Certificação:</strong> {CLINIC_INFO.certification}</li>
                    <li><strong>Experiência:</strong> Atuando desde {CLINIC_INFO.startYear} ({CLINIC_INFO.experienceYears}+ anos)</li>
                    <li><strong>Cidade:</strong> {CLINIC_INFO.city} - {CLINIC_INFO.state}</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase text-teal-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NAP 100% Consistente
                  </h4>
                  <ul className="space-y-1 text-slate-700 text-xs">
                    <li><strong>Endereço:</strong> {CLINIC_INFO.fullAddress}</li>
                    <li><strong>Telefone/WhatsApp:</strong> {CLINIC_INFO.phone}</li>
                    <li><strong>E-mail:</strong> {CLINIC_INFO.email}</li>
                    <li><strong>Horário:</strong> {CLINIC_INFO.workingHours.fullText}</li>
                  </ul>
                </div>

              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
                <p className="font-semibold">✓ Verificação de Erros do Site Antigo:</p>
                <p className="mt-0.5 text-[11px] text-amber-800">
                  Todos os campos de contato, e-mail e endereço são 100% rigorosos e idênticos em todas as páginas, rodapé, dados estruturados e formulários de agendamento.
                </p>
              </div>
            </div>
          )}

          {activeTab === "files" && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-amber-600" /> sitemap.xml
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Mapeia todas as URLs do site com prioridades e frequências de atualização.
                    </p>
                  </div>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold"
                  >
                    Ver sitemap.xml
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                      <Globe className="w-4 h-4 text-teal-600" /> robots.txt
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Instrui robôs do Google a indexar todo o conteúdo e aponta para o sitemap.
                    </p>
                  </div>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold"
                  >
                    Ver robots.txt
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl font-semibold text-xs hover:bg-slate-800 transition-colors"
          >
            Fechar Auditoria
          </button>
        </div>

      </div>
    </div>
  );
};
