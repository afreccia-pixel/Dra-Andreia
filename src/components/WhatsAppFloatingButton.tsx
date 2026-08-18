import React, { useState } from "react";
import { CLINIC_INFO } from "../data/clinicData";
import { MessageSquare, X, Sparkles, MapPin, CheckCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent(CLINIC_INFO.whatsappMessageDefault);
  const invisalignMsg = encodeURIComponent("Olá, Dra. Andreia! Gostaria de agendar uma consulta sobre Invisalign e fazer o escaneamento 3D iTero.");
  const damonMsg = encodeURIComponent("Olá, Dra. Andreia! Gostaria de informações sobre o aparelho autoligado Damon System.");
  const locationMsg = encodeURIComponent("Olá! Gostaria de confirmar o endereço da clínica De Poli Saúde no Centro de Balneário Camboriú.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in slide-in-from-bottom-3 duration-200 text-slate-800">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#A65B52] text-white flex items-center justify-center font-bold text-sm">
                AM
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-tight">
                  {CLINIC_INFO.doctorName}
                </h4>
                <p className="text-xs text-[#A65B52] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48D84] animate-ping" />
                  Atendimento WhatsApp
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            Olá! Como podemos ajudar seu sorriso hoje em Balneário Camboriú? Escolha o assunto abaixo para atendimento direto:
          </p>

          <div className="space-y-2 text-xs">
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${invisalignMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#F5EBE9] hover:bg-[#F5EBE9]/80 text-[#A65B52] font-semibold border border-[#D48D84]/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Consulta Invisalign® + 3D
              </span>
              <CheckCircle className="w-3.5 h-3.5 text-[#A65B52]" />
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${damonMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 transition-colors"
            >
              <span>Aparelho Damon System</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${locationMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D48D84]" /> Endereço De Poli Saúde
              </span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block py-2 rounded-xl bg-[#D48D84] hover:bg-[#A65B52] text-white font-bold transition-colors mt-2"
            >
              Iniciar Conversa Direta
            </a>
          </div>

          <p className="text-[10px] text-slate-400 text-center mt-3">
            CRO-SC 8767 • Rua 3130, 149 - Centro, Balneário Camboriú
          </p>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#D48D84] hover:bg-[#A65B52] text-white p-3.5 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-hidden"
        aria-label="Atendimento via WhatsApp com Dra. Andreia Medeiros"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F5EBE9] border-2 border-[#A65B52] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F5EBE9] border-2 border-[#A65B52] rounded-full" />
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-xs pl-0 group-hover:pl-2">
          Agendar WhatsApp
        </span>
      </button>

    </div>
  );
};
