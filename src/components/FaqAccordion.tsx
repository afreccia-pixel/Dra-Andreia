import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "Onde fica localizado o consultório da Dra. Andreia Medeiros?",
    answer: "O consultório está localizado no Centro de Balneário Camboriú, na De Poli Saúde (Rua 3130, nº 149 - entre a 3ª e a 4ª Avenida)."
  },
  {
    question: "Como funciona a consulta de avaliação ortodôntica?",
    answer: "Na primeira consulta, a Dra. Andreia realiza um exame clínico detalhado da sua saúde bucal e da sua oclusão. Em seguida, é feito o escaneamento 3D no iTero Element™ para simulação imediata do seu novo sorriso."
  },
  {
    question: "Quanto tempo dura o tratamento com Invisalign?",
    answer: "A duração varia conforme a complexidade de cada caso. Tratamentos leves a moderados podem ser concluídos em 6 a 12 meses. Casos mais complexos duram entre 12 e 18 meses."
  },
  {
    question: "Qual a diferença entre Invisalign e aparelho fixo tradicional?",
    answer: "O Invisalign utiliza alinhadores transparentes removíveis, sem fios ou brackets metálicos para machucar a boca. Você retira para comer e escovar os dentes com higiene total."
  }
];

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs,
  title = "Perguntas Frequentes (FAQ)",
  subtitle = "Tire todas as suas dúvidas sobre o tratamento em Balneário Camboriú"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const activeFaqs = (faqs && faqs.length > 0) ? faqs : DEFAULT_FAQS;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      
      {title && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0ED] text-[#B98278] text-xs sm:text-[10px] uppercase font-bold tracking-wider border border-[#B98278]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#B98278]" /> Dúvidas Frequentes
          </span>
          <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#25282B]">
            <strong className="font-bold text-[#25282B]">{title}</strong>
          </h3>
          {subtitle && (
            <p className="text-sm sm:text-sm text-[#55585B]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {activeFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-[#B98278] shadow-2xs ring-1 ring-[#B98278]/20"
                  : "bg-white border-[#EAE3DF] hover:border-[#D5CDC8]"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-base sm:text-[15px] text-[#25282B] leading-snug focus:outline-hidden"
              >
                <span className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                    isOpen ? "bg-[#B98278] text-white" : "bg-[#F5F0ED] text-[#55585B]"
                  }`}>
                    ?
                  </span>
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#B98278] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-3 text-sm sm:text-[14px] text-[#55585B] leading-relaxed border-t border-[#EAE3DF] bg-[#FAF7F5]/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
