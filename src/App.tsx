import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { SchemaInspectorModal } from "./components/SchemaInspectorModal";
import { ConfigManagerModal } from "./components/ConfigManagerModal";

import { HomePage } from "./pages/HomePage";
import { InvisalignPage } from "./pages/InvisalignPage";
import { ViveraPage } from "./pages/ViveraPage";
import { DamonSystemPage } from "./pages/DamonSystemPage";
import { MyobracePage } from "./pages/MyobracePage";
import { ClinicaGeralPage } from "./pages/ClinicaGeralPage";
import { SobrePage } from "./pages/SobrePage";
import { DepoimentosPage } from "./pages/DepoimentosPage";
import { BlogPage } from "./pages/BlogPage";
import { ContatoPage } from "./pages/ContatoPage";
import { RevisaoConteudoPage } from "./pages/RevisaoConteudoPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || "/");
  const [schemaInspectorOpen, setSchemaInspectorOpen] = useState<boolean>(false);
  const [configManagerOpen, setConfigManagerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    // Normalize path with leading slash
    let target = path.startsWith("/") ? path : `/${path}`;
    // Strip trailing slash if not root
    if (target.length > 1 && target.endsWith("/")) {
      target = target.slice(0, -1);
    }

    if (window.location.pathname !== target) {
      window.history.pushState({}, "", target);
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    const p = currentPath.toLowerCase();

    if (p === "/" || p === "") {
      return <HomePage onNavigate={navigateTo} />;
    }
    if (p.includes("vivera")) {
      return <ViveraPage onNavigate={navigateTo} />;
    }
    if (p.includes("invisalign")) {
      return <InvisalignPage onNavigate={navigateTo} />;
    }
    if (p.includes("damon")) {
      return <DamonSystemPage onNavigate={navigateTo} />;
    }
    if (p.includes("myobrace")) {
      return <MyobracePage onNavigate={navigateTo} />;
    }
    if (p.includes("clinica-geral") || p.includes("ortodontia")) {
      return <ClinicaGeralPage onNavigate={navigateTo} />;
    }
    if (p.includes("sobre")) {
      return <SobrePage onNavigate={navigateTo} />;
    }
    if (p.includes("depoimentos")) {
      return <DepoimentosPage onNavigate={navigateTo} />;
    }
    if (p.startsWith("/blog")) {
      const parts = p.split("/blog/").filter(Boolean);
      const activePostSlug = parts.length > 0 ? parts[0] : undefined;
      return <BlogPage onNavigate={navigateTo} activePostSlug={activePostSlug} />;
    }
    if (p.includes("contato")) {
      return <ContatoPage onNavigate={navigateTo} />;
    }
    if (p.includes("revisao") || p.includes("imprimir")) {
      return <RevisaoConteudoPage onNavigate={navigateTo} />;
    }

    // Default Fallback to Home
    return <HomePage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F5EBE9] selection:text-[#A65B52]">
      
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenConfigManager={() => setConfigManagerOpen(true)}
        onOpenSchemaInspector={() => setSchemaInspectorOpen(true)}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSchemaInspector={() => setSchemaInspectorOpen(true)}
      />

      {/* WhatsApp Floating Sticky Action Button */}
      <WhatsAppFloatingButton />

      {/* Media & Doctor Info Config Manager Modal */}
      <ConfigManagerModal
        isOpen={configManagerOpen}
        onClose={() => setConfigManagerOpen(false)}
      />

      {/* Schema.org & SEO Audit Modal */}
      <SchemaInspectorModal
        isOpen={schemaInspectorOpen}
        onClose={() => setSchemaInspectorOpen(false)}
        currentPath={currentPath}
      />

    </div>
  );
}
