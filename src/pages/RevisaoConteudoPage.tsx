import React, { useEffect } from "react";
import { CLINIC_INFO, SERVICES_DATA, TESTIMONIALS_DATA, BLOG_POSTS_DATA } from "../data/clinicData";
import { handleImageError } from "../data/mediaAssets";
import { Printer, Copy, Check, ArrowLeft, Download, FileText, Info } from "lucide-react";

interface RevisaoConteudoPageProps {
  onNavigate: (path: string) => void;
}

export const RevisaoConteudoPage: React.FC<RevisaoConteudoPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = React.useState(false);
  const [printAlert, setPrintAlert] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateFullText = () => {
    let fullText = `DOCUMENTO DE REVISÃO DE CONTEÚDO - WEBSITE DRA. ANDREIA MEDEIROS\n`;
    fullText += `===========================================================\n\n`;

    fullText += `1. DADOS DA CLÍNICA & CONTATO (NAP)\n`;
    fullText += `------------------------------------\n`;
    fullText += `Nome da Profissional: ${CLINIC_INFO.doctorName}\n`;
    fullText += `Registro CRO: ${CLINIC_INFO.cro}\n`;
    fullText += `Certificação: ${CLINIC_INFO.certification}\n`;
    fullText += `Endereço Completo: ${CLINIC_INFO.fullAddress}\n`;
    fullText += `Telefone/WhatsApp: ${CLINIC_INFO.phone}\n`;
    fullText += `E-mail: ${CLINIC_INFO.email}\n`;
    fullText += `Horário de Funcionamento: ${CLINIC_INFO.workingHours.fullText}\n\n`;

    fullText += `2. SOBRE A DRA. ANDREIA MEDEIROS\n`;
    fullText += `------------------------------------\n`;
    fullText += `Título: Sobre a Dra. Andreia Medeiros\n`;
    fullText += `Resumo: Mais de 20 anos dedicados à Ortodontia, Ortopedia Facial e estética do sorriso em Balneário Camboriú.\n`;
    fullText += `Histórico: A Dra. Andreia Medeiros (CRO-SC 8767) iniciou sua trajetória na Odontologia em 2005. Como Invisalign Doctor certificada, adotou o fluxo digital completo em sua clínica na De Poli Saúde (Centro de Balneário Camboriú), utilizando escaneamento intraoral 3D iTero Element e planejamento ClinCheck. Formação sólida em Ortodontia, Ortopedia Facial Infantil (Invisalign First), Damon System e Myobrace.\n\n`;

    fullText += `3. TRATAMENTOS E SERVIÇOS\n`;
    fullText += `------------------------------------\n`;
    SERVICES_DATA.forEach((service, index) => {
      fullText += `\n[3.${index + 1}] SERVIÇO: ${service.title.toUpperCase()}\n`;
      fullText += `H1: ${service.h1}\n`;
      fullText += `Resumo: ${service.summary}\n`;
      fullText += `Descrição Completa:\n`;
      service.description.forEach((p) => {
        fullText += `  • ${p}\n`;
      });
      fullText += `Principais Características:\n`;
      service.keyFeatures.forEach((kf) => {
        fullText += `  - ${kf}\n`;
      });
      fullText += `Benefícios:\n`;
      service.benefits.forEach((b) => {
        fullText += `  - ${b.title}: ${b.desc}\n`;
      });
      fullText += `Perguntas Frequentes do Serviço:\n`;
      service.faqs.forEach((faq) => {
        fullText += `  P: ${faq.question}\n  R: ${faq.answer}\n`;
      });
    });

    fullText += `\n4. DEPOIMENTOS DE PACIENTES\n`;
    fullText += `------------------------------------\n`;
    TESTIMONIALS_DATA.forEach((t) => {
      fullText += `• ${t.name} (${t.treatment} - ${t.city}): "${t.comment}"\n`;
    });

    fullText += `\n5. PERGUNTAS FREQUENTES DA CLÍNICA\n`;
    fullText += `------------------------------------\n`;
    SERVICES_DATA.forEach((s) => {
      s.faqs.forEach((faq) => {
        fullText += `P: ${faq.question}\nR: ${faq.answer}\n\n`;
      });
    });

    fullText += `6. ARTIGOS DO BLOG\n`;
    fullText += `------------------------------------\n`;
    BLOG_POSTS_DATA.forEach((post, index) => {
      fullText += `\n[ARTIGO ${index + 1}] ${post.title.toUpperCase()}\n`;
      fullText += `Autor: ${post.author} (${post.authorTitle})\n`;
      fullText += `Categoria: ${post.category} | Leitura: ${post.readTime}\n`;
      fullText += `Resumo: ${post.excerpt}\n`;
      fullText += `Conteúdo Completo:\n${post.content}\n`;
    });

    return fullText;
  };

  const handlePrint = () => {
    try {
      window.print();
      setPrintAlert(true);
    } catch {
      setPrintAlert(true);
    }
  };

  const handleCopyAll = () => {
    const fullText = generateFullText();
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadTxt = () => {
    const fullText = generateFullText();
    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "revisao-conteudo-dra-andreia-medeiros.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const fullText = generateFullText();
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Revisão de Conteúdo - Dra. Andreia Medeiros</title>
        <style>
          body { font-family: sans-serif; line-height: 1.6; color: #2D3136; padding: 40px; max-width: 900px; margin: 0 auto; }
          h1 { color: #2D3136; border-bottom: 2px solid #D48D84; padding-bottom: 8px; }
          h2 { color: #A65B52; margin-top: 24px; font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
          p, li { font-size: 14px; }
          pre { white-space: pre-wrap; font-family: inherit; font-size: 13px; background: #f9f9f9; padding: 15px; border-radius: 8px; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div className="no-print" style="margin-bottom: 20px; text-align: right;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #2D3136; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer;">Imprimir Agora</button>
        </div>
        <pre>${fullText}</pre>
      </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "revisao-conteudo-dra-andreia-medeiros.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#2D3136] py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0 print:text-black">
      {/* Top Print Control Header (Hidden when printing) */}
      <div className="max-w-5xl mx-auto mb-8 bg-white p-6 rounded-2xl border border-[#E9ECEF] shadow-xs print:hidden space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => onNavigate("/")}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A828A] hover:text-[#2D3136] transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao Site
            </button>
            <h1 className="text-2xl font-sans font-light text-[#2D3136]">
              Relatório Completo de <strong className="font-semibold">Revisão de Texto</strong>
            </h1>
            <p className="text-xs text-[#7A828A]">
              Esta página reúne todos os textos, descrições, perguntas frequentes e artigos do site para fácil conferência e impressão.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-2 bg-[#F5EBE9] hover:bg-[#E8D8D5] text-[#A65B52] font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Texto Copiado!" : "Copiar Texto"}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-2 bg-[#FAF8F6] hover:bg-[#E9ECEF] text-[#2D3136] font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider border border-[#E9ECEF] transition-all"
            >
              <Download className="w-4 h-4 text-[#A65B52]" />
              <span>Baixar Arquivo (.TXT)</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-2 bg-[#FAF8F6] hover:bg-[#E9ECEF] text-[#2D3136] font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider border border-[#E9ECEF] transition-all"
            >
              <FileText className="w-4 h-4 text-[#D48D84]" />
              <span>Baixar HTML</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-[#2D3136] hover:bg-[#1E2124] text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <Printer className="w-4 h-4 text-[#D48D84]" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* Iframe Notice / Notification Banner */}
        <div className="p-4 rounded-xl bg-[#FFF8E1] border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">
              Nota sobre Impressão em Visualização de Preview:
            </p>
            <p>
              Em navegadores com bloqueio de pop-up no iFrame do preview, o comando de impressão direta do navegador pode não abrir automaticamente.
            </p>
            <p className="font-semibold text-amber-950">
              💡 Recomendação rápida: Clique em <u>"Baixar Arquivo (.TXT)"</u> ou <u>"Copiar Texto"</u> para salvar todo o relatório instantaneamente no seu computador!
            </p>
          </div>
        </div>
      </div>

      {/* Printable Sheet Body */}
      <main className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-[#E9ECEF] shadow-xs print:shadow-none print:border-none print:p-0 space-y-12 text-sm leading-relaxed">
        
        {/* Print Title Block */}
        <div className="border-b border-[#2D3136] pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wide text-[#2D3136]">
                {CLINIC_INFO.doctorName}
              </h1>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A65B52]">
                Ortodontia e Ortopedia Facial • {CLINIC_INFO.cro}
              </p>
            </div>
            <div className="text-right text-xs text-[#7A828A]">
              <p>Documento de Revisão de Conteúdo</p>
              <p>Data: {new Date().toLocaleDateString("pt-BR")}</p>
            </div>
          </div>
        </div>

        {/* Section 1: NAP */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            1. Dados Oficiais & Contato (NAP)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#FAF8F6] p-4 rounded-xl border border-[#E9ECEF] print:bg-white">
            <p><strong>Profissional:</strong> {CLINIC_INFO.doctorName} ({CLINIC_INFO.cro})</p>
            <p><strong>Certificação:</strong> {CLINIC_INFO.certification}</p>
            <p><strong>Endereço:</strong> {CLINIC_INFO.fullAddress}</p>
            <p><strong>WhatsApp:</strong> {CLINIC_INFO.phone}</p>
            <p><strong>E-mail:</strong> {CLINIC_INFO.email}</p>
            <p><strong>Horários:</strong> {CLINIC_INFO.workingHours.fullText}</p>
          </div>
        </section>

        {/* Section 2: Sobre a Dra. */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            2. Apresentação Profissional (Sobre a Dra. Andreia Medeiros)
          </h2>
          <div className="space-y-2 text-xs text-[#4A5158]">
            <p>
              A <strong>Dra. Andreia Medeiros (CRO-SC 8767)</strong> iniciou sua trajetória na Odontologia em 2005. Ao longo de mais de 20 anos de prática clínica ininterrupta, construiu uma carreira fundamentada no aperfeiçoamento constante e na busca pelas soluções mais confortáveis e biológicas para seus pacientes.
            </p>
            <p>
              Como <strong>Invisalign Doctor certificada</strong>, adotou o fluxo digital completo em sua clínica no Centro de Balneário Camboriú (De Poli Saúde). A combinação do escaneamento intraoral 3D no iTero Element™ com o planejamento virtual ClinCheck® permite diagnósticos milimétricos sem os desconfortos das moldagens tradicionais.
            </p>
            <p>
              Além do foco em alinhadores invisíveis, possui sólida formação em <strong>Ortopedia Facial Infantil (Invisalign First™)</strong>, tratamentos autoligados de alta performance (<strong>Damon System®</strong>) e terapia miofuncional para DTM e ronco (<strong>Myobrace®</strong>).
            </p>
          </div>
        </section>

        {/* Section 3: Serviços e Tratamentos */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            3. Descrição Completa dos Tratamentos
          </h2>

          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className="p-5 rounded-xl border border-[#E9ECEF] space-y-3 bg-[#FAF8F6] print:bg-white print:border-b">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A65B52]">
                  Tratamento 0{index + 1}
                </span>
                <span className="text-xs font-mono text-[#7A828A]">
                  ID: {service.slug}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#2D3136]">
                {service.h1}
              </h3>

              <p className="text-xs italic text-[#4A5158] bg-white p-2.5 rounded-lg border border-[#E9ECEF]">
                "{service.summary}"
              </p>

              <div className="space-y-2 text-xs text-[#4A5158]">
                <p className="font-bold text-[#2D3136]">Descrição Detalhada:</p>
                {service.description.map((p, idx) => (
                  <p key={idx}>• {p}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <p className="font-bold text-[#2D3136] mb-1">Diferenciais e Características:</p>
                  <ul className="list-disc list-inside space-y-1 text-[#4A5158]">
                    {service.keyFeatures.map((kf, idx) => (
                      <li key={idx}>{kf}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-[#2D3136] mb-1">Benefícios Diretos:</p>
                  <ul className="space-y-1 text-[#4A5158]">
                    {service.benefits.map((b, idx) => (
                      <li key={idx}>
                        <strong>{b.title}:</strong> {b.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.faqs.length > 0 && (
                <div className="pt-2 border-t border-[#E9ECEF] space-y-2">
                  <p className="font-bold text-xs text-[#2D3136]">Perguntas Frequentes Deste Tratamento:</p>
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="text-xs bg-white p-2.5 rounded-lg border border-[#E9ECEF]">
                      <p className="font-bold text-[#2D3136]">P: {faq.question}</p>
                      <p className="text-[#4A5158] mt-0.5">R: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Section 4: Depoimentos */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            4. Depoimentos de Pacientes (Google Reviews 5.0 Strelas)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="p-3.5 rounded-xl border border-[#E9ECEF] bg-[#FAF8F6] print:bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#E9ECEF]"
                      onError={(e) => handleImageError(e)}
                    />
                    <p className="font-bold text-[#2D3136]">{t.name}</p>
                  </div>
                  <span className="text-[10px] text-[#A65B52] font-semibold">{t.treatment}</span>
                </div>
                <p className="italic text-[#4A5158]">"{t.comment}"</p>
                <p className="text-[10px] text-[#7A828A] text-right">{t.city} • {t.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQ Geral */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            5. Compilado de Perguntas Frequentes dos Tratamentos
          </h2>

          <div className="space-y-2 text-xs">
            {SERVICES_DATA.flatMap((s) => s.faqs).map((faq, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-[#E9ECEF] bg-[#FAF8F6] print:bg-white">
                <p className="font-bold text-[#2D3136]">P: {faq.question}</p>
                <p className="text-[#4A5158] mt-1">R: {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Artigos do Blog */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-[#E9ECEF] pb-1 text-[#2D3136]">
            6. Conteúdo do Blog Informativo (Artigos na Íntegra)
          </h2>

          {BLOG_POSTS_DATA.map((post, idx) => (
            <div key={post.id} className="p-5 rounded-xl border border-[#E9ECEF] bg-[#FAF8F6] print:bg-white space-y-3">
              <div className="flex items-center justify-between text-xs text-[#7A828A]">
                <span className="font-bold text-[#A65B52]">Artigo 0{idx + 1} • {post.category}</span>
                <span>{post.date} • Leitura {post.readTime}</span>
              </div>

              <h3 className="text-base font-bold text-[#2D3136]">
                {post.title}
              </h3>

              <p className="text-xs font-semibold text-[#4A5158] italic">
                Resumo: {post.excerpt}
              </p>

              <div className="text-xs text-[#4A5158] space-y-2 whitespace-pre-line pt-2 border-t border-[#E9ECEF]">
                {post.content}
              </div>

              <p className="text-[10px] text-[#7A828A] pt-2">
                Autor: {post.author} ({post.authorTitle}) • Tags: #{post.tags.join(", #")}
              </p>
            </div>
          ))}
        </section>

        {/* Footer Notice */}
        <div className="border-t border-[#2D3136] pt-4 text-center text-xs text-[#7A828A]">
          <p>© {new Date().getFullYear()} Dra. Andreia Medeiros • CRO-SC 8767. Todos os direitos reservados.</p>
          <p>De Poli Saúde • Rua 3130, 149 - Centro, Balneário Camboriú - SC</p>
        </div>

      </main>
    </div>
  );
};
