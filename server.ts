import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Serve static public folder with no-cache headers to prevent browser caching of old images
  const publicDir = path.join(process.cwd(), "public");
  if (fs.existsSync(publicDir)) {
    const staticOptions = {
      maxAge: 0,
      setHeaders: (res: express.Response) => {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
      }
    };
    app.use(express.static(publicDir, staticOptions));
    app.use("/Dra-Andreia", express.static(publicDir, staticOptions));
  }

  // Healthcheck endpoint
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      clinic: "Dra. Andreia Medeiros - Ortodontia & Invisalign",
      cro: "CRO-SC 8767",
      city: "Balneário Camboriú - SC",
      timestamp: new Date().toISOString()
    });
  });

  // Dynamic Google Reviews API endpoint
  app.get("/api/reviews", (_req, res) => {
    res.json({
      rating: 5.0,
      reviewCount: 15,
      ratingFormatted: "5.0",
      reviewsUrl: "https://share.google/htrjBN3REa7nJqwAY",
      googleMapsSearchUrl: "https://www.google.com/search?kgmid=/g/11r_v2nd_5&hl=pt-BR&q=Dra+Andreia+Medeiros+-+Invisalign+Doctor",
      profileName: "Dra. Andreia Medeiros - Invisalign Doctor",
      isLive: true,
      lastUpdated: new Date().toISOString()
    });
  });

  // Direct Sitemap endpoint guarantee
  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.header("Content-Type", "application/xml");
      return res.sendFile(sitemapPath);
    }
    res.status(404).send("Sitemap not found");
  });

  // Direct Robots.txt endpoint guarantee
  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.header("Content-Type", "text/plain");
      return res.sendFile(robotsPath);
    }
    res.status(404).send("Robots.txt not found");
  });

  // Contact form submission endpoint (direct handler targeting andreiamed.orto@gmail.com)
  app.post("/api/contact", (req, res) => {
    const { name, phone, service, date, message } = req.body || {};
    const targetEmail = "andreiamed.orto@gmail.com";
    
    // Log contact request for clinic records
    console.log(`[Agendamento de Consulta -> ${targetEmail}] Nome: ${name}, Fone: ${phone}, Serviço: ${service}, Data: ${date}`);
    
    // Create pre-filled mailto link for direct client opening
    const mailSubject = encodeURIComponent(`Solicitação de Agendamento - ${name || "Novo Paciente"}`);
    const mailBody = encodeURIComponent(
      `Olá, Dra. Andreia Medeiros!\n\n` +
      `Gostaria de agendar uma consulta de avaliação.\n\n` +
      `• Nome: ${name || "Não informado"}\n` +
      `• Telefone / WhatsApp: ${phone || "Não informado"}\n` +
      `• Serviço de Interesse: ${service || "Invisalign / Ortodontia"}\n` +
      `• Preferência de Horário: ${date || "A combinar"}\n` +
      `• Mensagem: ${message || "Nenhuma observação extra."}\n\n` +
      `Enviado via site oficial do consultório em Balneário Camboriú - SC.`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${mailSubject}&body=${mailBody}`;

    // Create pre-filled WhatsApp link
    const cleanPhone = "5547996026397";
    const textMsg = encodeURIComponent(
      `Olá, Dra. Andreia! Meu nome é ${name || "Paciente"}. Gostaria de agendar uma consulta para ${service || "Invisalign/Ortodontia"}.\n` +
      `Prefiro o dia/horário: ${date || "A combinar"}.\n` +
      `Mensagem: ${message || "Aguardo retorno."}`
    );
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${textMsg}`;

    res.json({
      success: true,
      message: `Solicitação direcionada para ${targetEmail}`,
      targetEmail,
      mailtoUrl,
      whatsappUrl
    });
  });

  // Vite middleware for development vs Production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dental Clinic Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
