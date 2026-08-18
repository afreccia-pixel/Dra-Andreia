import { ClinicInfo, ServiceInfo, Testimonial, BlogPost } from "../types";
import { MEDIA_ASSETS } from "./mediaAssets";

export const CLINIC_INFO: ClinicInfo = {
  doctorName: "Dra. Andreia Medeiros",
  cro: "CRO-SC 8767",
  certification: "Invisalign Doctor",
  experienceYears: 19,
  startYear: 2005,
  city: "Balneário Camboriú",
  state: "SC",
  fullAddress: "Rua 3130, 149 - De Poli Saúde, Centro, Balneário Camboriú - SC, CEP 88330-345",
  buildingName: "De Poli Saúde",
  neighborhood: "Centro",
  cep: "88330-345",
  phone: "(47) 99602-6397",
  phoneRaw: "5547996026397",
  whatsappMessageDefault: "Olá, Dra. Andreia! Gostaria de agendar uma consulta de avaliação ortodôntica em Balneário Camboriú.",
  email: "andreiamed.orto@gmail.com",
  workingHours: {
    days: "Segunda a sexta-feira",
    morning: "9h às 12h",
    afternoon: "13h30 às 18h",
    fullText: "Segunda a sexta, das 9h às 12h e das 13h30 às 18h"
  },
  googleRating: 5.0,
  googleReviewCount: 48,
  coordinates: {
    lat: -26.9935,
    lng: -48.6358
  },
  // Map iframe pointing specifically to Rua 3130, 149, Balneario Camboriu
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.864197368416!2d-48.6358428!3d-26.9935422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b63e71d3d63b%3A0x6fb837a7f4dfb801!2sRua%203130%2C%20149%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-345!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
};

export const SERVICES_DATA: ServiceInfo[] = [
  {
    id: "invisalign",
    slug: "invisalign-balneario-camboriu",
    title: "Invisalign em Balneário Camboriú",
    shortTitle: "Invisalign",
    seoTitle: "Invisalign em Balneário Camboriú | Dra. Andreia Medeiros CRO-SC 8767",
    seoDescription: "Ortodontista especialista em Invisalign em Balneário Camboriú. Scanner 3D iTero™, simulação ClinCheck® e Invisalign First™. Agende sua avaliação no WhatsApp!",
    h1: "Invisalign em Balneário Camboriú com a Dra. Andreia Medeiros",
    summary: "O alinhador transparente líder mundial. Tratamento ortodôntico estético, removível, sem fios nem metais, planejado digitalmente com escaneamento 3D iTero™.",
    heroImage: MEDIA_ASSETS.services.invisalignHero,
    icon: "Sparkles",
    description: [
      "O Invisalign® revolucionou a ortodontia moderna ao substituir os brackets e fios metálicos por uma sequência de alinhadores transparentes sob medida, praticamente invisíveis.",
      "Com a Dra. Andreia Medeiros (Invisalign Doctor certificada e com mais de 20 anos de prática clínica), o seu tratamento é 100% digitalizado. Utilizamos o scanner intraoral iTero Element™, que elimina as moldagens desconfortáveis com massa, gerando um modelo tridimensional altamente preciso da sua boca em poucos minutos.",
      "Através do software ClinCheck®, você visualiza antes mesmo de iniciar o tratamento cada movimentação dentária e a simulação 3D do seu sorriso final transformado.",
      "Oferecemos também a linha Invisalign First™, projetada especialmente para crianças de 6 a 10 anos na fase de crescimento e dentição mista, prevenindo problemas ortodônticos severos no futuro."
    ],
    keyFeatures: [
      "Alinhadores transparentes e praticamente imperceptíveis ao falar e sorrir",
      "Escaneamento 3D iTero Element™ em minutos, sem moldagens desconfortáveis",
      "Software ClinCheck® para simulação tridimensional do resultado final",
      "Removíveis para comer, escovar os dentes e passar fio dental livremente",
      "Tratamentos rápidos: casos simples com duração a partir de 6 meses",
      "Linha Invisalign First™ para ortopedia e ortodontia infantil prévia"
    ],
    benefits: [
      {
        title: "Estética e Discreção Absolutas",
        desc: "Sua vida social e profissional continua sem interrupções. Ninguém percebe que você está de alinhador."
      },
      {
        title: "Conforto Superior Sem Cortes",
        desc: "Feito de material polimérico patenteado SmartTrack™, sem pontas metálicas para machucar gengivas ou bochechas."
      },
      {
        title: "Higiene Bucal Impecável",
        desc: "Retire os alinhadores para escovar os dentes normalmente e passar fio dental sem obstáculos."
      },
      {
        title: "Previsibilidade do Resultado",
        desc: "Cada movimento é calculado por computador sob supervisão experiente da Dra. Andreia Medeiros."
      }
    ],
    processSteps: [
      {
        step: 1,
        title: "Consulta Inicial & Escaneamento iTero™ 3D",
        description: "Avaliamos sua saúde bucal e realizamos o escaneamento digital 3D da sua arcada em poucos minutos."
      },
      {
        step: 2,
        title: "Planejamento Virtual ClinCheck®",
        description: "A Dra. Andreia desenvolve o plano de tratamento personalizado e apresenta a simulação 3D do seu novo sorriso."
      },
      {
        step: 3,
        title: "Entrega dos Alinhadores Personalizados",
        description: "Você recebe seus conjuntos de alinhadores Invisalign e orientações de uso diário (20 a 22 horas por dia)."
      },
      {
        step: 4,
        title: "Acompanhamento e Transformação",
        description: "Consultas de retorno rápidas a cada 6 a 8 semanas para monitorar o avanço e retirar novos pares."
      }
    ],
    beforeAfterCases: [
      {
        id: "case-1",
        title: "Apinhamento Dentário Severo - Invisalign Adulto",
        description: "Paciente de 32 anos com apinhamento nos dentes anteriores. Resultado alcançado em 10 meses sem extrações.",
        duration: "10 meses",
        beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
        afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "case-2",
        title: "Diastema e Espaçamento - Invisalign Express",
        description: "Correção de diastema central e alinhamento do plano oclusal superior.",
        duration: "6 meses",
        beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
        afterImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800"
      }
    ],
    faqs: [
      {
        question: "Invisalign dói mais ou menos que o aparelho fixo tradicional?",
        answer: "O Invisalign é muito mais confortável do que o aparelho fixo. Nos primeiros 2 a 3 dias de troca de um alinhador novo, você pode sentir uma leve pressão nos dentes, o que é um sinal positivo de que o alinhador está aplicando a força correta para movimentá-los. Porém, não há fios de aço nem brackets para arranhar ou machucar o interior da bochecha e gengivas."
      },
      {
        question: "Quanto tempo dura o tratamento com Invisalign em Balneário Camboriú?",
        answer: "O tempo varia conforme a complexidade de cada caso. Casos simples de desalinhamento ou pequenos diastemas podem ser corrigidos a partir de 6 meses. Casos moderados a complexos costumam levar entre 10 e 18 meses. Na primeira consulta com a Dra. Andreia Medeiros, após o escaneamento 3D no iTero™, você saberá a duração prevista com exatidão."
      },
      {
        question: "Qual é o custo aproximado do tratamento Invisalign?",
        answer: "O valor depende da quantidade de alinhadores necessários (planos Express, Lite ou Comprehensive). Apenas após a avaliação presencial e o escaneamento 3D é possível definir a modalidade ideal e o valor exato. Na clínica da Dra. Andreia Medeiros em Balneário Camboriú, oferecemos condições facilitadas de parcelamento para tornar seu tratamento acessível."
      },
      {
        question: "Qual a diferença entre o Invisalign e os aparelhos metálicos tradicionais?",
        answer: "O Invisalign é transparente, removível, não interfere na fala ou alimentação, exige menos consultas de emergência e permite higienização perfeita dos dentes. Já o aparelho metálico tradicional usa brackets colados e fios ajustados manualmente, com maiores restrições alimentares e higienização mais trabalhosa."
      },
      {
        question: "Como funciona a moldagem digital com o scanner iTero™ e o ClinCheck®?",
        answer: "O scanner iTero™ captura até 6.000 imagens por segundo da sua boca, criando um modelo 3D em alta resolução na tela do computador sem nenhuma sujeira ou náusea das massas tradicionais. Em seguida, o software ClinCheck® simula cada fase do alinhamento até o sorriso final."
      },
      {
        question: "Crianças e adolescentes também podem usar Invisalign (Invisalign First™)?",
        answer: "Sim! A linha Invisalign First™ foi criada especialmente para crianças de 6 a 10 anos na fase de expansão de maxila e alinhamento precoce. Para adolescentes, o Invisalign Teen vem com indicadores de uso que ajudam os pais e a Dra. Andreia a monitorar o tempo ideal diário."
      }
    ]
  },
  {
    id: "vivera-invisalign",
    slug: "vivera-invisalign",
    title: "Vivera - Invisalign",
    shortTitle: "Contenções Vivera™",
    seoTitle: "Contenção Vivera™ Invisalign em Balneário Camboriú | Dra. Andreia Medeiros",
    seoDescription: "Contenções transparentes Vivera™ Invisalign em Balneário Camboriú. Feitas sob medida com tecnologia 3D e material até 30% mais resistente. Agende sua consulta!",
    h1: "Contenções Vivera™ Invisalign em Balneário Camboriú",
    summary: "Contenção ortodôntica transparente e de alta durabilidade, fabricada sob medida pela Align Technology com escaneamento 3D para preservar o seu sorriso perfeito.",
    heroImage: MEDIA_ASSETS.services.viveraRetainers,
    icon: "ShieldCheck",
    description: [
      "A contenção Vivera™ é fabricada pela mesma tecnologia do Invisalign®, com um material termoplástico até 30% mais resistente do que as contenções convencionais. Ela é feita sob medida a partir do escaneamento digital do seu sorriso, garantindo um encaixe preciso, confortável e praticamente invisível no dia a dia.",
      "Na Dra. Andreia Medeiros, em Balneário Camboriú, a Vivera™ é indicada tanto para quem finalizou o tratamento com Invisalign® quanto para pacientes que buscam uma contenção de alta durabilidade após qualquer tratamento ortodôntico. Cada kit é entregue em múltiplas contenções numeradas, feitas a partir do mesmo escaneamento 3D, para acompanhar você por mais tempo sem perder a precisão do encaixe.",
      "Manter o sorriso estável depois do tratamento é tão importante quanto o próprio tratamento — e a Vivera™ é a forma mais segura e discreta de garantir esse resultado a longo prazo."
    ],
    keyFeatures: [
      "Material termoplástico patenteado até 30% mais resistente",
      "Kit entregue com múltiplas contenções numeradas sob medida",
      "Escaneamento digital 3D iTero™ sem moldagens desconfortáveis",
      "Discreta, transparente e confortável para o dia a dia",
      "Indicada após Invisalign ou qualquer tratamento ortodôntico prévio"
    ],
    benefits: [
      {
        title: "30% Mais Resistente",
        desc: "Material termoplástico exclusivo da Align Technology com maior durabilidade e estabilidade oclusal."
      },
      {
        title: "Encaixe Digital 3D Perfeito",
        desc: "Produzida diretamente a partir do escaneamento digital intraoral do seu sorriso, sem folgas."
      },
      {
        title: "Kit Multi-Contenções",
        desc: "Receba múltiplos pares originais numerados para ter reposição garantida sem novas moldagens."
      },
      {
        title: "Máxima Discrição",
        desc: "Totalmente transparente, lisa e imperceptível, preservando a estética do seu sorriso alinhado."
      }
    ],
    faqs: [
      {
        question: "O que é a contenção Vivera™?",
        answer: "É uma contenção ortodôntica transparente, feita pela Align Technology (mesma empresa do Invisalign®), fabricada sob medida em um material termoplástico mais resistente que as contenções tradicionais, para manter os dentes estáveis após o tratamento ortodôntico."
      },
      {
        question: "Por que preciso usar contenção depois do tratamento ortodôntico?",
        answer: "Após a movimentação dos dentes, eles ainda podem se deslocar de volta à posição original — é o chamado efeito de recidiva. A contenção mantém o resultado conquistado, preservando o alinhamento pelo tempo que for necessário."
      },
      {
        question: "A Vivera™ é diferente das contenções tradicionais?",
        answer: "Sim. Ela é confeccionada a partir de um escaneamento digital 3D do seu sorriso e produzida em um material até 30% mais resistente do que as contenções removíveis convencionais, o que garante mais durabilidade e um encaixe mais preciso."
      },
      {
        question: "Por quanto tempo preciso usar a contenção Vivera™?",
        answer: "O tempo de uso varia de paciente para paciente. Durante a consulta na Dra. Andreia Medeiros, em Balneário Camboriú, é feita uma avaliação individual para definir a rotina de uso ideal para o seu caso."
      },
      {
        question: "Quantas contenções vêm no kit Vivera™?",
        answer: "O kit Vivera™ é entregue com múltiplas contenções numeradas, fabricadas a partir do mesmo escaneamento digital, para que você tenha reposições prontas sem precisar refazer o processo de moldagem a cada troca."
      },
      {
        question: "Onde faço a contenção Vivera™ em Balneário Camboriú?",
        answer: "O tratamento é realizado no consultório da Dra. Andreia Medeiros, em Balneário Camboriú, com escaneamento digital do sorriso e acompanhamento profissional em todas as etapas."
      }
    ]
  },
  {
    id: "damon-system",
    slug: "damon-system",
    title: "Damon System (Aparelho Autoligado de Alta Performance)",
    shortTitle: "Damon System",
    seoTitle: "Damon System em Balneário Camboriú | Aparelho Autoligado de Alta Performance",
    seoDescription: "Damon System em Balneário Camboriú com a Dra. Andreia Medeiros (CRO-SC 8767). Aparelho autoligado moderno de alta performance, sem borrachinhas e menos consultas.",
    h1: "Damon System em Balneário Camboriú: Aparelho Autoligado Moderno",
    summary: "Tecnologia autoligada de alta performance que reduz o atrito, acelera a movimentação dentária e diminui significativamente o número de consultas.",
    heroImage: MEDIA_ASSETS.services.damonSystemHero,
    icon: "ShieldCheck",
    description: [
      "O Damon System® é o sistema autoligado mais avançado do mundo para quem busca os benefícios do aparelho fixo sem o incômodo das tradicionais 'borrachinhas'.",
      "As borrachinhas dos aparelhos convencionais acumulam placa bacteriana e criam um atrito forte que desacelera a movimentação dentária. No Damon System, uma tampa metálica de alta precisão prende o fio ortodôntico de forma suave e deslizante.",
      "Isso permite movimentações mais suaves e biológicas, reduz o desconforto e possibilita consultas de manutenção mais espaçadas — a cada 8 a 10 semanas, em vez de mensais.",
      "O sistema é indicado para casos de mordida cruzada, apinhamentos severos, dentes inclusos e correções de arcada, com máxima eficiência estética e funcional."
    ],
    keyFeatures: [
      "Sem borrachinhas: menor acúmulo de bactérias e manchas",
      "Movimentação com forças biológicas leves e menor sensibilidade",
      "Manutenções mais espaçadas (retornos a cada 60 dias, em média)",
      "Tratamentos em média 6 meses mais rápidos que o convencional",
      "Opções metálicas e estéticas em cerâmica de alta transparência"
    ],
    benefits: [
      {
        title: "Tratamento Mais Rápido",
        desc: "A ausência de atrito permite que os dentes deslizem suavemente até a posição correta, reduzindo o tempo de tratamento em até 6 meses."
      },
      {
        title: "Facilidade de Higienização",
        desc: "Sem borrachinhas retentoras de bactérias e restos alimentares, a higiene bucal diária é muito mais simples."
      },
      {
        title: "Menos Visitas ao Consultório",
        desc: "Consultas de manutenção a cada 8 a 10 semanas, ideal para a rotina em Balneário Camboriú."
      }
    ],
    faqs: [
      {
        question: "Por que o Damon System não usa borrachinhas?",
        answer: "As borrachinhas causam atrito excessivo entre o bracket e o fio. O Damon usa uma portinhola especial integrada ao bracket, que permite ao fio deslizar livremente, com forças suaves e contínuas."
      },
      {
        question: "O Damon System dói menos que o aparelho comum?",
        answer: "Sim. Por não utilizar ligaduras elásticas que exercem alta pressão e atrito, o Damon System trabalha com forças biológicas leves e contínuas, reduzindo drasticamente a dor e a sensibilidade nos dentes após as consultas de ajuste."
      },
      {
        question: "Qual a indicação do Damon System em relação ao Invisalign?",
        answer: "O Damon System é ideal para pacientes que preferem a praticidade de um tratamento fixo (sem a necessidade de retirar para comer ou lembrar de colocar) ou para casos biomecânicos específicos onde a mecânica autoligada é altamente eficiente. Ambos os tratamentos são oferecidos pela Dra. Andreia Medeiros após diagnóstico personalizado."
      },
      {
        question: "Existem opções estéticas e discretas do Damon System?",
        answer: "Sim! O Damon Clear utiliza braquetes em cerâmica translúcida ultrarresistente que não mancham com a alimentação e são altamente discretos no sorriso."
      }
    ]
  },
  {
    id: "myobrace",
    slug: "myobrace",
    title: "Myobrace (Tratamento Miofuncional)",
    shortTitle: "Myobrace",
    seoTitle: "Myobrace em Balneário Camboriú | DTM, Bruxismo e Ronco Dra. Andreia Medeiros",
    seoDescription: "Ortopedia Miofuncional Myobrace em Balneário Camboriú. Correção de respiração bucal, DTM, bruxismo e ronco sem aparelhos fixos. Agende sua consulta!",
    h1: "Myobrace em Balneário Camboriú: Tratamento Miofuncional e DTM",
    summary: "Tratamento preventivo e ortopédico sem aparelhos fixos que reeduca a musculatura facial, tratando respiração bucal, DTM, bruxismo e apneia do sono.",
    heroImage: MEDIA_ASSETS.services.myobraceHero,
    icon: "HeartPulse",
    description: [
      "O Myobrace® é um sistema de ortopedia miofuncional que trata a causa raiz dos dentes tortos e do mau desenvolvimento facial: maus hábitos miofuncionais.",
      "Hábitos como respiração pela boca, posicionamento incorreto da língua ao engolir, chupar o dedo ou uso prolongado de chupeta alteram a estrutura dos ossos da face e trancam as vias aéreas.",
      "O sistema utiliza aparelhos removíveis usados durante 1 a 2 horas durante o dia e durante o sono à noite, combinados com exercícios de reeducação muscular simples.",
      "Na fase adulta, a terapia miofuncional aliada à experiência da Dra. Andreia Medeiros traz alívio expressivo para DTM (dor na articulação têmporo-mandibular), bruxismo, ranger de dentes, dores de cabeça e episódios de ronco e apneia do sono."
    ],
    keyFeatures: [
      "Trata a CAUSA dos dentes tortos e não apenas o sintoma visual",
      "Desenvolve a arcada dentária e estimula o crescimento facial correto",
      "Corrige a respiração bucal para respiração nasal saudável",
      "Alivia DTM, dores faciais, estalidos na mandíbula e bruxismo",
      "Uso prático: apenas 1 hora por dia e durante a noite de sono"
    ],
    benefits: [
      {
        title: "Melhora da Qualidade do Sono",
        desc: "Ao desobstruir as vias aéreas e guiar a posição da língua, reduz roncos e melhora a oxigenação noturna."
      },
      {
        title: "Alívio DTM e Dores de Cabeça",
        desc: "Descomprime a articulação temporomandibular, reduzindo espasmos musculares e desgaste de dentes por bruxismo."
      },
      {
        title: "Desenvolvimento Infantil Saudável",
        desc: "Evita que crianças precisem de aparelhos complexos ou cirurgias ortognáticas no futuro."
      }
    ],
    faqs: [
      {
        question: "Com qual idade a criança pode iniciar o Myobrace?",
        answer: "O Myobrace pode ser iniciado precocemente, a partir dos 3 a 5 anos de idade, ajudando a corrigir hábitos antes que eles prejudiquem o crescimento ósseo da face."
      },
      {
        question: "Adultos também podem fazer tratamento Myobrace para DTM e Bruxismo?",
        answer: "Com certeza! Em adultos, o sistema ajuda na descompressão da articulação (DTM), alívio de apertamento e bruxismo noturno, melhora da postura da língua e controle do ronco."
      },
      {
        question: "Precisa usar o dia todo?",
        answer: "Não. O aparelho Myobrace é usado apenas por 1 a 2 horas durante o dia (enquanto estuda ou assiste TV) e durante toda a noite enquanto dorme."
      }
    ]
  },
  {
    id: "clinica-geral-ortodontia",
    slug: "clinica-geral-ortodontia",
    title: "Clínica Geral & Ortodontia",
    shortTitle: "Clínica Geral",
    seoTitle: "Atendimento Odontológico e Ortodontia em Balneário Camboriú | Dra. Andreia",
    seoDescription: "Clínica Geral e Ortodontia completa em Balneário Camboriú. Limpeza, prevenção, restaurações e diagnóstico ortodôntico com a Dra. Andreia Medeiros (CRO-SC 8767).",
    h1: "Ortodontia e Clínica Geral Odontológica em Balneário Camboriú",
    summary: "Atendimento preventivo, restauração estética, limpeza profunda e diagnósticos ortodônticos completos para toda a família no Centro de Balneário Camboriú.",
    heroImage: "",
    icon: "Stethoscope",
    description: [
      "Além da Ortodontia especializada, a clínica Dra. Andreia Medeiros oferece atenção integral à saúde bucal, unindo prevenção, estética e bem-estar em um ambiente acolhedor.",
      "Realizamos profilaxia profunda (limpeza), raspagem tártaro, aplicação de flúor, restaurações estéticas em resina composta no tom exato dos seus dentes, e placas de mordida para bruxismo.",
      "Garantimos que antes de qualquer tratamento ortodôntico ou estético, sua gengiva e dentes estejam 100% saudáveis e livres de cáries."
    ],
    keyFeatures: [
      "Profilaxia (limpeza dental profissional) e raspagem ultrassônica",
      "Clareamento dental caseiro e de consultório",
      "Restaurações estéticas em resina da cor do dente",
      "Placas de contenção e placas miorrelaxantes para bruxismo",
      "Check-up preventivo periódico para adultos e crianças"
    ],
    benefits: [
      {
        title: "Saúde Bucal em Primeiro Lugar",
        desc: "Prevenção contínua para evitar tratamentos invasivos ou dores de dente inesperadas."
      },
      {
        title: "Atendimento Humanizado",
        desc: "Consultas tranquilas, sem pressa, com escuta atenta a cada detalhe do paciente."
      },
      {
        title: "Localização Central Conveniente",
        desc: "Atendimento na De Poli Saúde no Centro de Balneário Camboriú com fácil acesso e estacionamento."
      }
    ],
    faqs: [
      {
        question: "Com que frequência devo fazer profilaxia (limpeza) profissional?",
        answer: "Recomendamos o check-up e limpeza a cada 6 meses para remover o tártaro acumulado e prevenir gengivite e cáries."
      },
      {
        question: "Preciso tratar cáries antes de colocar Invisalign ou aparelho?",
        answer: "Sim! É fundamental que toda a cavidade oral esteja perfeitamente saudável e sem cáries ativas antes de iniciar qualquer movimentação ortodôntica."
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Costa",
    treatment: "Tratamento Invisalign Complete",
    rating: 5.0,
    comment: "Ótimo atendimento, espaço muito confortável na De Poli Saúde e com uma higienização impecável! Sem falar do preço justo e das excelentes condições de pagamento para o tratamento com Invisalign. A Dra. Andreia é super atenciosa e detalhista!",
    date: "Avaliação Google",
    city: "Balneário Camboriú - SC",
    avatarImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250",
    verified: true
  },
  {
    id: "t2",
    name: "Rodrigo Zimmermann",
    treatment: "Damon System (Aparelho Autoligado)",
    rating: 5.0,
    comment: "Excelente profissional! Dra. Andreia passa muita segurança desde a primeira consulta. O espaço da clínica em Balneário Camboriú é impecável, limpo e acolhedor. O resultado do aparelho autoligado superou minhas expectativas. Nota 10!",
    date: "Avaliação Google",
    city: "Balneário Camboriú - SC",
    avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    verified: true
  },
  {
    id: "t3",
    name: "Fernanda Alencar",
    treatment: "Invisalign First (Ortodontia Infantil)",
    rating: 5.0,
    comment: "Atendimento humano, carinhoso e extremamente qualificado. A Dra. Andreia tem um cuidado enorme com as crianças. Minha filha amou os alinhadores Invisalign First e a mudança no sorriso foi impressionante!",
    date: "Avaliação Google",
    city: "Itajaí - SC (Atendida em BC)",
    avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    verified: true
  },
  {
    id: "t4",
    name: "Lucas Silveira",
    treatment: "Myobrace (Tratamento Miofuncional)",
    rating: 5.0,
    comment: "Profissional maravilhosa! Muito dedicada e pontual. O tratamento com Myobrace resolveu minhas dores de cabeça e bruxismo. Estrutura impecável no consultório De Poli Saúde em Balneário Camboriú.",
    date: "Avaliação Google",
    city: "Balneário Camboriú - SC",
    avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    verified: true
  },
  {
    id: "t5",
    name: "Juliana Duarte",
    treatment: "Ortodontia & Alinhadores Transparentes",
    rating: 5.0,
    comment: "Dra. Andreia Medeiros é incrível! Fez todo o escaneamento digital 3D iTero explicando cada etapa. Higienização exemplar do ambiente e facilidade nas condições de pagamento. Recomendo de olhos fechados!",
    date: "Avaliação Google",
    city: "Camboriú - SC",
    avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    verified: true
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "post-1",
    slug: "quanto-custa-invisalign-balneario-camboriu",
    title: "Quanto Custa o Invisalign em Balneário Camboriú? Guia Completo de Valores e Fatores",
    seoTitle: "Quanto Custa Invisalign em Balneário Camboriú? Preços e Fatores",
    seoDescription: "Descubra o valor médio e os fatores que definem o custo do Invisalign em Balneário Camboriú com a Dra. Andreia Medeiros (CRO-SC 8767). Saiba como parcelar!",
    excerpt: "Planejando transformar seu sorriso com o alinhador transparente mais famoso do mundo? Entenda o que influencia no valor do Invisalign em Balneário Camboriú e por que a avaliação digital no iTero é essencial.",
    author: "Dra. Andreia Medeiros",
    authorTitle: "Ortodontista - CRO-SC 8767",
    date: "10 de Agosto de 2026",
    readTime: "5 min de leitura",
    category: "Invisalign",
    image: MEDIA_ASSETS.blog.invisalignCusto,
    tags: [
      "Invisalign",
      "Balneário Camboriú",
      "Preço Invisalign",
      "Ortodontia Estética",
      "Scanner 3D iTero",
      "ClinCheck 3D",
      "Dra. Andreia Medeiros"
    ],
    content: `
## O investimento no seu sorriso em Balneário Camboriú

Uma das perguntas mais frequentes que recebo no consultório em Balneário Camboriú é: **"Dra. Andreia, quanto custa o tratamento completo com Invisalign?"**

Como especialista com mais de 20 anos de experiência em ortodontia, é importante esclarecer que o valor do Invisalign varia de paciente para paciente, pois o tratamento é 100% sob medida. No entanto, é plenamente possível entender a estrutura de custos e os fatores que definem o investimento.

---

### O que determina o custo do Invisalign?

O sistema Invisalign® é dividido pela própria Align Technology em diferentes modalidades tecnológicas, dependendo do grau de complexidade e do número de alinhadores necessários para atingir o sorriso ideal:

1. **Invisalign Express / I7:** Indicado para pequenas recidivas de ortodontia antiga ou fechamento de pequenos diastemas (até 7 pares de alinhadores).
2. **Invisalign Lite:** Para casos de complexidade leve a moderada (até 14 pares de alinhadores).
3. **Invisalign Comprehensive / Full:** Indicado para desalinhamentos moderados a severos, mordidas cruzadas e alterações de oclusão (número ilimitado de alinhadores por até 5 anos de garantia).
4. **Invisalign First™:** Desenvolvido para ortopedia infantil prévia na fase de dentição misturada (crianças de 6 a 10 anos).

---

### O que está incluso no tratamento na nossa clínica?

Na clínica **Dra. Andreia Medeiros**, localizada na Rua 3130 no Centro de Balneário Camboriú (De Poli Saúde), o tratamento Invisalign inclui:

* **Escaneamento Intraoral 3D com iTero Element™:** Sem moldagens de massa desconfortáveis.
* **Estudo e Simulação Digital 3D ClinCheck®:** Onde você enxerga a previsão final antes de pagar todo o tratamento.
* **Todos os conjuntos de alinhadores importados sob medida.**
* **Consultas de acompanhamento presencial e ajustes refinados.**
* **Contenções pós-tratamento recomendadas.**

---

### Invisalign x Aparelho Metálico: O custo-benefício compensa?

Embora o investimento inicial do Invisalign possa ser superior ao do aparelho metálico convencional, o custo-benefício ao longo do tempo é imbatível quando consideramos:

* **Conforto:** Ausência de fios espetando a bochecha ou aftas dolorosas.
* **Tempo economizado:** Consultas mais curtas e retornos espaçados a cada 6 a 8 semanas.
* **Sem restrição alimentar:** Você tira o alinhador para comer pipoca, churrasco ou maçã sem quebrar nada.
* **Estética profissional:** Praticamente invisível em fotos, reuniões e eventos sociais.

---

### Perguntas Frequentes

#### É possível parcelar o tratamento com Invisalign?
Sim! Na clínica da Dra. Andreia Medeiros facilitamos o pagamento em parcelas durante o período do tratamento para tornar o alinhador mais acessível.

#### O convênio odontológico cobre o Invisalign?
A maioria dos convênios não cobre tratamentos estéticos diretamente, mas fornecemos toda a documentação necessária para pedido de reembolso ou dedução em imposto de renda.

#### O valor muda caso precise de alinhadores adicionais?
Na modalidade Comprehensive, você tem garantia de refinamento sem custos adicionais de alinhadores durante o período de garantia.

---

### Como agendar sua avaliação e obter o orçamento exato?

A melhor maneira de descobrir a modalidade ideal para você é realizar o **escaneamento 3D no iTero™**. Na mesma consulta de avaliação, geramos a simulação tridimensional do seu sorriso e apresentamos condições facilitadas de parcelamento.

[Clique aqui para chamar nossa equipe no WhatsApp e agendar sua consulta na Rua 3130 em Balneário Camboriú!](https://wa.me/5547996026397?text=Ol%C3%A1%2C%20Dra.%20Andreia!%20Li%20o%20artigo%20sobre%20o%20custo%20do%20Invisalign%20e%20gostaria%20de%20agendar%20meu%20escaneamento%203D.)
    `
  },
  {
    id: "post-2",
    slug: "invisalign-x-aparelho-fixo",
    title: "Invisalign x Aparelho Fixo Tradicional: Qual Escolher para o Seu Sorriso?",
    seoTitle: "Invisalign x Aparelho Fixo: Qual Escolher em Balneário Camboriú?",
    seoDescription: "Comparativo detalhado entre Invisalign e Aparelho Fixo Tradicional por especialista CRO-SC 8767 em Balneário Camboriú. Veja diferenças, estética e tempo.",
    excerpt: "Dúvida cruel entre colocar o alinhador transparente ou o aparelho de brackets? Confira este comparativo técnico e prático elaborado pela Dra. Andreia Medeiros.",
    author: "Dra. Andreia Medeiros",
    authorTitle: "Ortodontista - CRO-SC 8767",
    date: "02 de Agosto de 2026",
    readTime: "6 min de leitura",
    category: "Comparativos",
    image: MEDIA_ASSETS.blog.invisalignComparativo,
    tags: [
      "Invisalign",
      "Aparelho Fixo",
      "Damon System",
      "Ortodontia Balneário Camboriú",
      "Alinhadores Transparentes",
      "SmartTrack",
      "Dra. Andreia Medeiros"
    ],
    content: `
## Qual a melhor escolha para o seu estilo de vida?

Ao decidir alinhar os dentes, a escolha do aparelho ortodôntico vai muito além da estética: envolve praticidade no dia a dia, higiene bucal e previsibilidade.

Neste artigo, analiso as diferenças reais entre o **Invisalign (alinhadores invisíveis)** e o **Aparelho Fixo Tradicional (brackets metálicos ou estéticos)**.

---

### 1. Aparência Visual e Estética

* **Invisalign:** Produzido em polímero transparente de grau médico (SmartTrack®), o alinhador encaixa com precisão milimétrica sobre a linha da gengiva. É imperceptível a curta distância e em fotografias.
* **Aparelho Fixo:** Mesmo nos modelos de safira ou porcelana, o fio metálico e as peças coladas aos dentes permanecem visíveis.

---

### 2. Higiene Bucal e Saúde Gengival

* **Invisalign:** É removível! Na hora de comer, escovar e passar fio dental, basta retirar os alinhadores. A higiene é rápida e não favorece gengivite.
* **Aparelho Fixo:** Exige o uso constante de fio condutor (passa-fio) e escovas interdentais para limpar entre os brackets, exigindo mais tempo diário.

---

### 3. Alimentação Sem Restrições

* **Invisalign:** Você não precisa mudar seus hábitos alimentares. Alimentos duros ou crocantes podem ser consumidos sem medo de soltar peças.
* **Aparelho Fixo:** Exige cuidado extremo com alimentos duros, pegajosos (balas, amendoins, maçãs inteiras) que podem quebrar brackets.

---

### 4. Consultas e Urgências

* **Invisalign:** Como os movimentos são planejados digitalmente no software ClinCheck®, o paciente faz as trocas de alinhadores em casa a cada 7 ou 14 dias, visitando o consultório a cada 6 a 8 semanas apenas para acompanhamento.
* **Aparelho Fixo:** Requer apertos mensais e eventuais visitas não planejadas quando um bracket se solta ou o fio espeta a mucosa.

---

### Resumo Comparativo:

| Característica | Invisalign® | Aparelho Fixo Tradicional |
| :--- | :--- | :--- |
| **Estética** | Praticamente Invisível | Visível |
| **Removível?** | Sim, para comer e escovar | Não (colado aos dentes) |
| **Conforto** | Alto (sem pontas metálicas) | Médio (sujeito a aftas) |
| **Tempo de Tratamento** | Até 50% mais rápido em muitos casos | Padrão |
| **Tecnologia** | Escaneamento 3D iTero™ | Moldagem de massa tradicional |

---

### Perguntas Frequentes

#### O Invisalign corrige os mesmos problemas do aparelho fixo?
Sim! Graças aos recursos biomecânicos modernos como os SmartForce Attachments, o Invisalign trata apinhamentos severos, mordidas abertas, sobremordidas e mordidas cruzadas.

#### O aparelho fixo machuca mais que o alinhador?
Sim. Os brackets e pontas de arame geram atrito constante contra as bochechas e lábios, podendo causar aftas e incômodos que não ocorrem com o SmartTrack do Invisalign.

---

### Conclusão: Qual é o ideal para você?

A escolha final depende da sua avaliação ortodôntica minuciosa. Em Balneário Camboriú, a Dra. Andreia Medeiros avalia a complexidade biomecânica e orienta o caminho mais seguro para o seu sorriso.

[Agende sua consulta de avaliação com escaneamento 3D agora mesmo!](https://wa.me/5547996026397?text=Ol%C3%A1%2C%20Dra.%20Andreia!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20saber%20se%20o%20Invisalign%20%C3%A9%20ideal%20para%20mim.)
    `
  },
  {
    id: "post-3",
    slug: "como-funciona-tratamento-myobrace",
    title: "Como Funciona o Tratamento Miofuncional Myobrace para Crianças e Adultos?",
    seoTitle: "Como Funciona o Tratamento Myobrace em Balneário Camboriú?",
    seoDescription: "Entenda o tratamento Myobrace em Balneário Camboriú com a Dra. Andreia Medeiros (CRO-SC 8767). Tratamento de DTM, ronco, bruxismo e respiração bucal.",
    excerpt: "Você sabia que roncarmos, ter dores na articulação (DTM) ou dentes tortos muitas vezes decorre da respiração errada pela boca? Conheça a ortopedia miofuncional Myobrace.",
    author: "Dra. Andreia Medeiros (Ortodontista - CRO-SC 8767)",
    authorTitle: "Ortodontista - CRO-SC 8767",
    date: "25 de Julho de 2026",
    readTime: "5 min de leitura",
    category: "MYOBRACE & DTM",
    image: MEDIA_ASSETS.blog.myobraceFunciona,
    tags: [
      "Myobrace",
      "DTM",
      "Bruxismo",
      "Ortopedia Miofuncional",
      "Respiração Bucal",
      "Balneário Camboriú",
      "Ronco e Apneia",
      "Dra. Andreia Medeiros"
    ],
    content: `
### O que é e como atua o sistema Myobrace®?

Muitos pais notam que seus filhos dormem de boca aberta, babam no travesseiro, roncam ou rangem os dentes durante a noite. Nos adultos, sintomas como estalidos na mandíbula, dores de cabeça ao acordar e bruxismo são frequentes.

Em Balneário Camboriú, a Dra. Andreia Medeiros utiliza o **Sistema Myobrace®**, uma terapia miofuncional sem aparelhos fixos criada para reeducar os músculos faciais e corrigir a respiração.

---

### Os maus hábitos miofuncionais mais comuns:

1. **Respiração Bucal:** Respirar pela boca impede que a língua descanse no céu da boca, estreitando o palato e impedindo o crescimento correto da face.
2. **Posição Incorreta da Língua:** Pressionar a língua contra os dentes ao engolir empurra os dentes para a frente.
3. **Uso Prolongado de Chupetas e Chupação de Dedo em Crianças.**

---

### Como o Myobrace® atua na prática?

O tratamento consiste na combinação de duas ações essenciais:

1. **Aparelho Miofuncional Removível:** Um dispositivo flexível de silicone patenteado, usado por apenas **1 a 2 horas durante o dia** e **durante a noite de sono**.
2. **Exercícios Miofuncionais (Myobrace Activities):** Exercícios simples de poucos minutos que ensinam o paciente a respirar pelo nariz, posicionar a língua no teto da boca e engolir corretamente.

---

### Benefícios em Crianças x Adultos:

#### Em Crianças (Dos 3 aos 15 anos):
* Estimula o desenvolvimento natural e correto das arcadas dentárias.
* Reduz severamente a necessidade de usar aparelhos fixos complexos na adolescência.
* Melhora a postura, a atenção escolar e a qualidade do sono profundo.

#### Em Adultos (Tratamento de DTM e Bruxismo):
* Descomprime a Articulação Temporomandibular (ATM).
* Alivia a tensão muscular do masseter e temporal.
* Diminui o estalido articular e previne o desgaste dos dentes por bruxismo.

---

### Perguntas Frequentes

#### Quanto tempo dura o tratamento com Myobrace?
A média costuma ser de 12 a 24 meses, dependendo da disciplina do paciente no uso diário do aparelho e na realização dos exercícios miofuncionais.

#### O Myobrace substitui o aparelho ortodôntico fixo?
Em muitas crianças, o tratamento miofuncional precoce corrige o desenvolvimento ósseo a ponto de dispensar completamente o aparelho fixo ou tornar o tratamento ortodôntico futuro muito mais rápido e sem extrações.

---

### Agende uma avaliação miofuncional em Balneário Camboriú

Se você ou seu filho apresentam respiração bucal, dores na mandíbula ou desgaste nos dentes, venha conversar com a Dra. Andreia Medeiros no Centro de Balneário Camboriú.

**[Fale com nossa equipe no WhatsApp para tirar dúvidas e agendar a consulta!](https://wa.me/5547996026397?text=Ol%C3%A1%2C%20Dra.%20Andreia!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20do%20tratamento%20Myobrace.)**
    `
  },
  {
    id: "post-4",
    slug: "damon-system-ortodontia-autoligada-alta-performance",
    title: "Damon System®: Aparelho Autoligado de Alta Performance Sem Borrachinhas",
    seoTitle: "Damon System em Balneário Camboriú: Ortodontia Autoligada",
    seoDescription: "Descubra como o Damon System autoligado de alta performance acelera o alinhamento dentário sem borrachinhas em Balneário Camboriú com a Dra. Andreia Medeiros.",
    excerpt: "Conheça o sistema autoligado que reduz o tempo de tratamento em até 6 meses, diminui o atrito e permite consultas mais espaçadas a cada 8 a 10 semanas.",
    author: "Dra. Andreia Medeiros",
    authorTitle: "Ortodontista - CRO-SC 8767",
    date: "14 de Agosto de 2026",
    readTime: "5 min de leitura",
    category: "Aparelho Autoligado",
    image: MEDIA_ASSETS.services.damonSystemHero,
    tags: [
      "Damon System",
      "Aparelho Autoligado",
      "Alta Performance",
      "Sem Borrachinhas",
      "Balneário Camboriú",
      "Ortodontia Rápida",
      "Damon Clear",
      "Dra. Andreia Medeiros"
    ],
    content: `
## Damon System®: Ortodontia Autoligada de Alta Performance em Balneário Camboriú

O **Damon System®** é o sistema de aparelho fixo autoligado mais avançado da ortodontia contemporânea. Ele elimina as tradicionais "borrachinhas" coloridas e substitui a fricção mecânica pesada por uma tecnologia de deslizamento suave e contínuo.

---

### Principais Diferenciais do Damon System:

1. **Sem Borrachinhas:** Uma tampa metálica de alta precisão prende o arco ortodôntico, permitindo que os dentes se movam livremente com forças biológicas leves.
2. **Consultas Mais Espaçadas:** Em vez de manutenções mensais obrigatórias, os retornos ocorrem a cada **8 a 10 semanas**.
3. **Tratamento até 6 Meses Mais Rápido:** O menor atrito biológico acelera os movimentos dentários e a expansão natural das arcadas.
4. **Higiene Muito Mais Fácil:** Sem o acúmulo de placa e bactérias provocado pelas borrachinhas elásticas convencionais.

---

### Perguntas Frequentes

#### Por que o Damon System não usa borrachinhas?
Porque ele possui uma tampa deslizante de precisão integrada ao bracket que trava o fio ortodôntico suavemente sem necessidade de elastômeros que causam atrito e retêm biofilme.

#### O Damon System dói menos que o aparelho comum?
Sim. Por utilizar fios com memória de forma ativados pelo calor da boca e forças biológicas leves, a pressão inicial e o desconforto pós-consulta são consideravelmente menores.

#### Existe opção estética do Damon System?
Sim, o **Damon Clear™**, que combina brackets cerâmicos translúcidos ultra-discretos com a mecânica autoligada de alta performance.

---

### Agende sua avaliação do Damon System em Balneário Camboriú

Converse com a Dra. Andreia Medeiros no Edifício De Poli Saúde (Centro de Balneário Camboriú - SC) e descubra como o aparelho autoligado de alta performance pode transformar o seu sorriso.

[Falar no WhatsApp com a equipe da Dra. Andreia](https://wa.me/5547996026397?text=Ol%C3%A1%2C%20Dra.%20Andreia!%20Li%20sobre%20o%20Damon%20System%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.)
    `
  }
];
