import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CLINIC_INFO, BLOG_POSTS_DATA } from "../data/clinicData";
import { getOptimizedImageUrl, handleImageError } from "../data/mediaAssets";
import { BlogPost } from "../types";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  MessageSquare, 
  X,
  Share2,
  CheckCircle2,
  Tag
} from "lucide-react";
import { updatePageSeo } from "../utils/seo";

interface BlogPageProps {
  onNavigate: (path: string) => void;
  activePostSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, activePostSlug }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (activePostSlug) {
      const post = BLOG_POSTS_DATA.find(p => p.slug === activePostSlug);
      if (post) {
        setSelectedPost(post);
        updatePageSeo(
          `/blog/${post.slug}`,
          post.seoTitle,
          post.seoDescription,
          undefined,
          post
        );
        return;
      }
    }

    setSelectedPost(null);
    updatePageSeo(
      "/blog",
      `Blog de Saúde Bucal e Ortodontia | Dra. Andreia Medeiros Balneário Camboriú`,
      `Artigos educativos sobre Invisalign, valores de alinhadores em Balneário Camboriú, aparelhos autoligados e tratamento miofuncional Myobrace.`
    );
  }, [activePostSlug]);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    onNavigate(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePost = () => {
    setSelectedPost(null);
    onNavigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
        {/* Header */}
      <section className="bg-[#F5F0ED] pt-12 pb-16 border-b border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white text-[#B98278] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#B98278]/30 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#B98278]" /> Artigos Informativos & SEO Local
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-[#25282B] max-w-3xl mx-auto leading-tight">
            Blog de <strong className="font-bold text-[#25282B]">Saúde Bucal & Ortodontia</strong> em Balneário Camboriú
          </h1>

          <p className="text-sm sm:text-base text-[#55585B] max-w-2xl mx-auto leading-relaxed">
            Conteúdo exclusivo escrito pela Dra. Andreia Medeiros (CRO-SC 8767) para esclarecer suas dúvidas sobre Invisalign, aparelhos e estética dental.
          </p>
        </div>
      </section>

      {/* Main Blog View or Article Detail Modal/Reader */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {selectedPost ? (
          /* FULL ARTICLE READER VIEW */
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-[#EAE3DF] shadow-2xs space-y-8 animate-in fade-in duration-200">
            
            {/* Back Button */}
            <button
              onClick={closePost}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B98278] hover:text-[#A36F66] transition-colors"
            >
              ← Voltar para todos os artigos do Blog
            </button>

            {/* Main Featured Image */}
            <div className="rounded-xl overflow-hidden border border-[#EAE3DF] max-h-96">
              <img
                src={getOptimizedImageUrl(selectedPost.image, { width: 1200, quality: 85 })}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => handleImageError(e)}
              />
            </div>

            {/* Article Header */}
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#FAF7F5] text-[#B98278] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#B98278]/30">
                {selectedPost.category}
              </span>

              <h1 className="text-2xl sm:text-4xl font-sans font-light text-[#25282B] leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#55585B] pt-1 border-b border-[#EAE3DF] pb-4">
                <span className="flex items-center gap-1 font-semibold text-[#25282B]">
                  <User className="w-3.5 h-3.5 text-[#B98278]" /> {selectedPost.author} ({selectedPost.authorTitle})
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#A0AEC0]" /> {selectedPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#A0AEC0]" /> {selectedPost.readTime}
                </span>
              </div>
            </div>

            {/* Article Content Render */}
            <div className="text-xs sm:text-sm text-[#55585B] leading-relaxed space-y-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ ...props }) => (
                    <h2 className="text-xl sm:text-2xl font-sans font-semibold text-[#25282B] mt-8 mb-3" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#25282B] mt-6 mb-2" {...props} />
                  ),
                  h4: ({ ...props }) => (
                    <h4 className="text-sm sm:text-base font-sans font-bold text-[#25282B] mt-4 mb-1" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="text-xs sm:text-sm text-[#55585B] leading-relaxed mb-4" {...props} />
                  ),
                  strong: ({ ...props }) => (
                    <strong className="font-bold text-[#25282B]" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="space-y-1.5 list-disc pl-5 mb-4 text-xs sm:text-sm text-[#55585B]" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="space-y-2 list-decimal pl-5 mb-4 text-xs sm:text-sm text-[#55585B]" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  hr: () => (
                    <hr className="my-6 border-[#EAE3DF]" />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="text-[#B98278] hover:text-[#A36F66] font-semibold underline underline-offset-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  table: ({ ...props }) => (
                    <div className="overflow-x-auto my-6 border border-[#EAE3DF] rounded-xl shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse" {...props} />
                    </div>
                  ),
                  thead: ({ ...props }) => (
                    <thead className="bg-[#FAF7F5] border-b border-[#EAE3DF] text-[#25282B]" {...props} />
                  ),
                  th: ({ ...props }) => (
                    <th className="p-3.5 font-bold text-[#25282B] border-r border-[#EAE3DF] last:border-r-0" {...props} />
                  ),
                  tbody: ({ ...props }) => (
                    <tbody className="divide-y divide-[#EAE3DF] bg-white" {...props} />
                  ),
                  tr: ({ ...props }) => (
                    <tr className="hover:bg-[#FAF7F5]/60 transition-colors" {...props} />
                  ),
                  td: ({ ...props }) => (
                    <td className="p-3.5 text-[#55585B] border-r border-[#EAE3DF] last:border-r-0" {...props} />
                  ),
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>

            {/* Article Tags */}
            <div className="pt-6 pb-2 border-t border-[#EAE3DF] space-y-2.5">
              <span className="text-xs font-bold text-[#25282B] uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#B98278]" /> TAGS:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {selectedPost.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-[#FAF7F5] hover:bg-[#F5F0ED] text-[#55585B] hover:text-[#25282B] text-xs font-medium rounded-lg border border-[#EAE3DF] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Article WhatsApp CTA */}
            <div className="p-6 bg-[#F5F0ED] text-[#25282B] rounded-xl text-center space-y-4 border border-[#EAE3DF] shadow-2xs">
              <p className="font-sans font-light text-lg text-[#25282B]">
                Ficou com alguma dúvida sobre <strong className="font-bold text-[#25282B]">este artigo</strong>?
              </p>
              <p className="text-xs text-[#55585B] max-w-md mx-auto">
                Converse diretamente com a equipe da Dra. Andreia Medeiros no WhatsApp em Balneário Camboriú.
              </p>
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(`Olá, Dra. Andreia! Li o artigo "${selectedPost.title}" no blog e gostaria de tirar dúvidas.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B98278] hover:bg-[#A36F66] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

          </div>
        ) : (
          /* BLOG LISTING GRID */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE3DF] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#FAF7F5]">
                    <img
                      src={getOptimizedImageUrl(post.image, { width: 600, quality: 80 })}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => handleImageError(e)}
                    />
                    <span className="absolute top-3 left-3 bg-[#25282B]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#A0AEC0]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#B98278]" /> {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-sans font-normal text-[#25282B] leading-snug hover:text-[#B98278] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-xs text-[#55585B] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openPost(post)}
                    className="w-full py-2.5 px-4 bg-[#FAF7F5] hover:bg-[#F5F0ED] text-[#25282B] border border-[#EAE3DF] rounded-full text-xs font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B98278]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
