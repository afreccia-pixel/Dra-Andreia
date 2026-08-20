import { CLINIC_INFO, SERVICES_DATA, BLOG_POSTS_DATA } from "../data/clinicData";

export function updatePageSeo(
  path: string,
  customTitle?: string,
  customDescription?: string,
  customFaqs?: { question: string; answer: string }[],
  customBlogPost?: typeof BLOG_POSTS_DATA[0]
) {
  const domain = "https://draandreiamedeiros.com.br";
  const fullUrl = `${domain}${path}`;

  // Default SEO fallbacks
  let title = `${CLINIC_INFO.doctorName} | Ortodontia e Invisalign em Balneário Camboriú`;
  let description = `Clínica da ${CLINIC_INFO.doctorName} (${CLINIC_INFO.cro}) em Balneário Camboriú - SC. Especialista em Invisalign Doctor, Ortopedia Facial, Damon System, Myobrace e Ortodontia.`;

  // Route specific defaults
  if (path === "/" || path === "") {
    title = `Dra. Andreia Medeiros | Ortodontia & Invisalign em Balneário Camboriú - SC`;
    description = `Invisalign Doctor e Ortodontista com mais de 20 anos de experiência em Balneário Camboriú. iTero 3D, ClinCheck e Damon System. Agende no WhatsApp!`;
  } else if (path.includes("vivera")) {
    title = `Contenção Vivera™ Invisalign em Balneário Camboriú | Dra. Andreia Medeiros`;
    description = `Contenções transparentes Vivera™ Invisalign em Balneário Camboriú. 30% mais resistentes, tecnologia Align 3D. Dra. Andreia Medeiros (CRO-SC 8767).`;
  } else if (path.includes("invisalign")) {
    title = `Invisalign em Balneário Camboriú | Dra. Andreia Medeiros CRO-SC 8767`;
    description = `Invisalign em Balneário Camboriú com a Dra. Andreia Medeiros. Scanner iTero™ 3D, simulação ClinCheck® e Invisalign First™. Avaliação no WhatsApp (47) 99602-6397!`;
  } else if (path.includes("damon-system")) {
    title = `Damon System em Balneário Camboriú | Aparelho Autoligado Dra. Andreia`;
    description = `Aparelho autoligado Damon System em Balneário Camboriú. Tratamento rápido, sem borrachinhas e com menos consultas. Dra. Andreia Medeiros (CRO-SC 8767).`;
  } else if (path.includes("myobrace")) {
    title = `Myobrace em Balneário Camboriú | Tratamento DTM, Bruxismo e Ronco`;
    description = `Ortopedia Miofuncional Myobrace em Balneário Camboriú. Tratamento de respiração bucal, DTM, bruxismo e ronco sem aparelhos fixos. Agende com a Dra. Andreia!`;
  } else if (path.includes("clinica-geral")) {
    title = `Clínica Geral Odontológica & Ortodontia | Balneário Camboriú - SC`;
    description = `Limpeza dental profilática, clareamento, restaurações estéticas e ortodontia no Centro de Balneário Camboriú. Dra. Andreia Medeiros (CRO-SC 8767).`;
  } else if (path.includes("sobre")) {
    title = `Sobre a Dra. Andreia Medeiros | Ortodontista CRO-SC 8767 em Balneário Camboriú`;
    description = `Conheça a trajetória de mais de 20 anos da Dra. Andreia Medeiros (CRO-SC 8767), Invisalign Doctor certificada e especialista na De Poli Saúde em Balneário Camboriú.`;
  } else if (path.includes("depoimentos")) {
    title = `Depoimentos e Avaliações de Pacientes | Dra. Andreia Medeiros Balneário Camboriú`;
    description = `Veja a opinião de pacientes tratados com Invisalign, Damon System e Ortopedia com a Dra. Andreia Medeiros em Balneário Camboriú. Nota 5.0 no Google!`;
  } else if (path === "/blog" || path === "/blog/") {
    title = `Blog de Saúde Bucal e Ortodontia | Dra. Andreia Medeiros Balneário Camboriú`;
    description = `Dicas de ortodontia, cuidados com Invisalign, tratamentos para DTM e estética dental escritos pela Dra. Andreia Medeiros (CRO-SC 8767) em Balneário Camboriú.`;
  } else if (path.includes("contato")) {
    title = `Contato e Endereço em Balneário Camboriú | Dra. Andreia Medeiros`;
    description = `Endereço, telefone, WhatsApp e horário de funcionamento da Dra. Andreia Medeiros. Rua 3130, 149 - De Poli Saúde, Centro, Balneário Camboriú - SC.`;
  }

  // Override with custom params if supplied
  if (customTitle) title = customTitle;
  if (customDescription) description = customDescription;

  // 1. Update Title tag
  document.title = title;

  // 2. Update Meta Description
  let metaDescTag = document.querySelector('meta[name="description"]');
  if (!metaDescTag) {
    metaDescTag = document.createElement("meta");
    metaDescTag.setAttribute("name", "description");
    document.head.appendChild(metaDescTag);
  }
  metaDescTag.setAttribute("content", description);

  // 3. Update OG Title & Description
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);

  // 4. Update Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", fullUrl);

  // 5. Inject Structured Data (Schema.org JSON-LD)
  injectStructuredData(fullUrl, title, description, customFaqs, customBlogPost);
}

function injectStructuredData(
  currentUrl: string,
  title: string,
  description: string,
  faqs?: { question: string; answer: string }[],
  blogPost?: typeof BLOG_POSTS_DATA[0]
) {
  // Remove existing dynamic script
  const existingScript = document.getElementById("json-ld-schema");
  if (existingScript) {
    existingScript.remove();
  }

  // Base Dentist / LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    "@id": "https://draandreiamedeiros.com.br/#dentist",
    "name": `${CLINIC_INFO.doctorName} - Ortodontia & Invisalign`,
    "alternateName": "Dra. Andreia Medeiros Ortodontia",
    "description": description,
    "url": "https://draandreiamedeiros.com.br",
    "telephone": CLINIC_INFO.phone,
    "email": CLINIC_INFO.email,
    "priceRange": "$$",
    "image": "https://draandreiamedeiros.com.br/Draandreiaperfil.webp",
    "logo": "https://draandreiamedeiros.com.br/draandreialogo.webp",
    "medicalSpecialty": ["Orthodontic", "Dentistry"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua 3130, 149 - De Poli Saúde",
      "addressLocality": CLINIC_INFO.city,
      "addressRegion": CLINIC_INFO.state,
      "postalCode": CLINIC_INFO.cep,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLINIC_INFO.coordinates.lat,
      "longitude": CLINIC_INFO.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "13:30",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": `${CLINIC_INFO.googleRating.toFixed(1)}`,
      "reviewCount": `${CLINIC_INFO.googleReviewCount}`,
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      CLINIC_INFO.googleReviewsUrl
    ]
  };

  const schemaGraph: any[] = [localBusinessSchema];

  // Breadcrumb schema
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://draandreiamedeiros.com.br/"
      }
    ]
  };

  if (currentUrl !== "https://draandreiamedeiros.com.br/") {
    breadcrumbListSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": title.split("|")[0].trim(),
      "item": currentUrl
    });
  }
  schemaGraph.push(breadcrumbListSchema);

  // FAQ Schema if provided
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };
    schemaGraph.push(faqSchema);
  }

  // BlogPosting Schema if on blog post
  if (blogPost) {
    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": blogPost.image,
      "datePublished": "2026-08-01",
      "dateModified": "2026-08-12",
      "author": {
        "@type": "Person",
        "name": blogPost.author,
        "jobTitle": blogPost.authorTitle
      },
      "publisher": {
        "@type": "Organization",
        "name": `${CLINIC_INFO.doctorName} Ortodontia`,
        "logo": {
          "@type": "ImageObject",
          "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      }
    };
    schemaGraph.push(blogPostingSchema);
  }

  const script = document.createElement("script");
  script.id = "json-ld-schema";
  script.type = "application/ld+json";
  script.text = JSON.stringify({ "@graph": schemaGraph }, null, 2);
  document.head.appendChild(script);
}
