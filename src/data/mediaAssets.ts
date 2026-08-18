import type React from "react";

export interface ImageAsset {
  id: string;
  title: string;
  url: string;
  alt: string;
  category: "doctor" | "services" | "clinic" | "technology";
}

/**
 * Resolves a public asset path taking into account Vite's base URL (e.g. for GitHub Pages).
 * Handles external URLs, data URLs, and properly trims relative slashes.
 */
export function getPublicAssetUrl(filePath: string): string {
  if (!filePath) return "";

  // Data URIs, blob URIs, or absolute external HTTP(S) links
  if (
    filePath.startsWith("http://") ||
    filePath.startsWith("https://") ||
    filePath.startsWith("data:") ||
    filePath.startsWith("blob:")
  ) {
    return filePath;
  }

  // Remove any leading slashes or "./"
  const cleanPath = filePath.replace(/^(\.\/|\/)+/, "");
  const base = import.meta.env.BASE_URL || "./";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
}

export const MEDIA_ASSETS = {
  // Doctor Portraits
  doctor: {
    heroPortrait: getPublicAssetUrl("dra-andreia-consultorio.webp"),
    heroPortraitAlt: "Dra. Andreia Medeiros no consultório - Ortodontista e Invisalign Doctor em Balneário Camboriú",
    avatar: getPublicAssetUrl("dra-andreia-retrato.webp"),
    bioPhoto: getPublicAssetUrl("dra-andreia-retrato.webp"),
    bioPhotoAlt: "Dra. Andreia Medeiros CRO-SC 8767",
    consultationPhoto: getPublicAssetUrl("dra-andreia-consultorio.webp"),
    topDoctorBadges: getPublicAssetUrl("top_doctor_badges.webp"),
    topDoctorBadgesAlt: "Selo Invisalign Top Doctor 2024 e 2025 - Dra. Andreia Medeiros",
  },

  // Treatment & Service Banners
  services: {
    invisalignHero: getPublicAssetUrl("inisa_adultos.webp"),
    invisalignAdultos: getPublicAssetUrl("inisa_adultos.webp"),
    invisalignAdolescentes: getPublicAssetUrl("inisa_adolecente.webp"),
    invisalignCriancas: getPublicAssetUrl("inisa_criancas.webp"),
    invisalignDetail: getPublicAssetUrl("inisa_adultos.webp"),
    caixaInvisa: getPublicAssetUrl("caixa_invisa.webp"),
    viveraRetainers: getPublicAssetUrl("vivera.webp"),
    damonSystemHero: getPublicAssetUrl("auto_ligado.webp"),
    myobraceHero: getPublicAssetUrl("Myobrace.webp"),
  },

  // Blog Articles Images
  blog: {
    invisalignCusto: getPublicAssetUrl("invisa_custa.webp"),
    invisalignComparativo: getPublicAssetUrl("invisa_comparativo.webp"),
    myobraceFunciona: getPublicAssetUrl("myobrace_funciona.webp"),
  },

  // Clinic Facilities & Technology
  clinic: {
    buildingFacade: getPublicAssetUrl("fachada-clinica-depoli.webp"),
    buildingFacadeAlt: "Fachada do Consultório De Poli Saúde & Bem Estar em Balneário Camboriú",
    cabinet: getPublicAssetUrl("dra-andreia-consultorio.webp"),
    iTeroScanner: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    officeInterior: getPublicAssetUrl("dra-andreia-retrato.webp"),
  },

  // Before / After Case Comparisons
  cases: [
    {
      id: "case-1",
      title: "Alinhamento com Invisalign®",
      beforeUrl: getPublicAssetUrl("invisa_antes.webp"),
      afterUrl: getPublicAssetUrl("invisa_depois.webp"),
      description: "Tratamento de apinhamento moderado em 10 meses sem extrações."
    },
    {
      id: "case-2",
      title: "Correção de Mordida com Damon System®",
      beforeUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      afterUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      description: "Alinhamento com aparelho autoligado de alta performance e expansão de sorriso."
    }
  ]
};

/**
 * Image Processor Helper
 * Formats, resizes and optimizes image URLs automatically for responsive display.
 */
export interface FormatImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "crop" | "cover" | "contain";
}

export function getOptimizedImageUrl(
  sourceUrl: string,
  options: FormatImageOptions = {}
): string {
  if (!sourceUrl) return "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800";

  // Data URIs and Blob URIs don't take query params
  if (sourceUrl.startsWith("data:") || sourceUrl.startsWith("blob:")) {
    return sourceUrl;
  }

  // Unsplash dynamic CDN optimizer parameters
  if (sourceUrl.includes("images.unsplash.com")) {
    const width = options.width || 800;
    const height = options.height;
    const quality = options.quality || 80;
    const fit = options.fit || "crop";

    const cleanUrl = sourceUrl.split("?")[0];
    let params = `?auto=format&fit=${fit}&q=${quality}&w=${width}`;
    if (height) params += `&h=${height}`;

    return `${cleanUrl}${params}`;
  }

  // Return resolved public path with Vite base URL
  return getPublicAssetUrl(sourceUrl);
}

/**
 * Universal fallback handler for broken/failed image requests.
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackFile?: string
) {
  const target = e.currentTarget;
  target.onerror = null;

  if (fallbackFile) {
    const cleanFallback = fallbackFile
      .replace(/^(\.\/|\/)+/, "")
      .replace(/\.png$/, ".webp")
      .replace(/\.jpg$/, ".webp");
    target.src = getPublicAssetUrl(cleanFallback);
  }
}