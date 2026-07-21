import { useState, useEffect } from "react";
import {
  Menu, X, Phone, MapPin, Clock, Star,
  Heart, BookOpen, Shield, Users, Lightbulb, Globe,
  GraduationCap, Facebook, Instagram, Baby, Smile,
  Utensils, BookMarked, AlarmClock, Palette, MessageCircle,
  Sprout, Handshake, Sparkles, Building2, Mail, ExternalLink,
  ArrowLeft, ArrowRight, Calendar, Tag, ChevronRight, Music, Search, Image as ImageIcon,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import pablitoGuide   from "@/imports/PABLO_PRINCIPAL__1_.png";
import logoKinder     from "@/imports/IDENTIDAD_VISUAL_KINDER__3_.png";
import logoHero       from "@/imports/LOGO_KINDER_J_LISTOS_PARA_USAR.png";
import pablitoDrawing from "@/imports/PABLITO_OFICIAL_DIBUJANDO.png";
import pablitoEnglish from "@/imports/PABLO_APRENDIENDO_INGLES.png";
import avatarLactantes from "@/imports/lactantes.png";
import avatarMaternal  from "@/imports/maternal.png";
import gal6  from "@/imports/GALERIA__6_.jpg";
import gal7  from "@/imports/GALERIA__7_.jpg";
import gal9  from "@/imports/GALERIA__9_.jpg";
import gal10 from "@/imports/GALERIA__10_.jpg";
import gal11 from "@/imports/GALERIA__11_.jpg";
import foto1 from "@/imports/foto1.jpg";
import foto2 from "@/imports/foto 2.jpg";
import foto3 from "@/imports/foto 3.jpg";
import foto4 from "@/imports/foto 4.jpg";
import foto5 from "@/imports/foto 5.jpg";
import foto6 from "@/imports/foto 6.jpg";
// ─── Palette ──────────────────────────────────────────────────────────────────
const NAVY   = "#021b51";
const YELLOW = "#ffdf00";
const RED    = "#d0082e";
const GREEN  = "#57b949";

type View = "landing" | "blog" | "article";

// ─── TikTok icon ──────────────────────────────────────────────────────────────
function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
    </svg>
  );
}

// ─── Decorative dots ─────────────────────────────────────────────────────────
function ColorDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: YELLOW }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: GREEN }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: RED }} />
    </div>
  );
}

// ─── Pablito guide mascot (secondary character) ───────────────────────────────
function PablitoGuide({
  message, subMessage, borderColor = YELLOW, size = 88, side = "left",
}: {
  message: string; subMessage?: string; borderColor?: string; size?: number; side?: "left" | "right";
}) {
  return (
    <div className={`flex items-end gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}>
      <div
        className="rounded-full overflow-hidden flex-shrink-0 shadow-xl"
        style={{ width: size, height: size, border: `5px solid ${borderColor}`, backgroundColor: "#0a1a38" }}
      >
        <ImageWithFallback src={pablitoGuide} alt="Pablito" className="w-full h-full object-cover object-center" />
      </div>
      <div className={`rounded-2xl px-4 py-3 shadow-lg bg-white ${side === "left" ? "rounded-bl-none" : "rounded-br-none"}`}>
        <p className="text-sm font-black leading-tight" style={{ color: NAVY }}>{message}</p>
        {subMessage && <p className="text-xs font-semibold mt-0.5 opacity-60" style={{ color: NAVY }}>{subMessage}</p>}
      </div>
    </div>
  );
}

// ─── Blog data ────────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    id: "primeros-anos",
    title: "¿Por qué los primeros años de vida son tan importantes para el desarrollo infantil?",
    excerpt: "Los primeros años de vida representan una de las etapas más importantes en el crecimiento de una persona. Descubre por qué cada experiencia, cada juego y cada abrazo marcan la diferencia.",
    category: "Desarrollo Infantil",
    date: "Julio 2025",
    readTime: "4–5 minutos",
    image: pablitoDrawing,
  },
  {
    id: "aprender-ingles",
    title: "Aprender inglés desde los primeros años: una puerta abierta al futuro",
    excerpt: "Aprender un segundo idioma desde la infancia no solo favorece la comunicación, sino que también fortalece habilidades cognitivas, sociales y culturales que acompañarán a los niños durante toda su vida.",
    category: "Inglés y Bilingüismo",
    date: "Julio 2025",
    readTime: "4–5 minutos",
    image: pablitoEnglish,
  },
];

// ─── Blog list ────────────────────────────────────────────────────────────────
function BlogListView({ onRead, onHome }: { onRead: (id: string) => void; onHome: () => void }) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="py-20 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <button onClick={onHome} className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-bold mb-8 transition-colors">
            <ArrowLeft size={14} /> Volver al inicio
          </button>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-wider" style={{ backgroundColor: YELLOW, color: NAVY }}>
            <BookOpen size={12} /> Blog Educativo
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Blog del <span style={{ color: YELLOW }}>Braniff</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            Artículos sobre desarrollo infantil, metodologías educativas y consejos para acompañar el crecimiento de tus hijos.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, i) => {
            const accent = [GREEN, NAVY][i % 2];
            return (
              <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className="relative h-52 bg-gray-50 overflow-hidden">
                  <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-black px-3 py-1.5 rounded-full" style={{ backgroundColor: accent }}>
                      <Tag size={10} /> {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-black leading-snug mb-3" style={{ color: NAVY }}>{article.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{article.excerpt}</p>
                  <button onClick={() => onRead(article.id)} className="inline-flex items-center gap-2 text-white font-black px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: accent }}>
                    Leer artículo <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-200 min-h-[340px]">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: YELLOW }}>
              <Sprout size={28} style={{ color: NAVY }} />
            </div>
            <h3 className="text-base font-black mb-2" style={{ color: NAVY }}>Próximamente</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">Estamos preparando más artículos sobre desarrollo infantil, tips para padres y novedades del Braniff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared article CTA ───────────────────────────────────────────────────────
function ArticleCTA() {
  return (
    <section className="rounded-3xl p-8 border border-blue-100" style={{ backgroundColor: "#f0f4ff" }}>
      <div className="flex items-start gap-4 flex-wrap">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
          <Building2 size={22} color="white" />
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-black mb-2" style={{ color: NAVY }}>Conoce el Centro de Desarrollo Infantil Alberto Braniff</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Te invitamos a descubrir un espacio donde el aprendizaje, el juego y el desarrollo integral acompañan cada etapa de la infancia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-5">
            {([
              { icon: Phone, text: "+52 55 6817 3872", href: "https://wa.me/5215568173872", color: GREEN },
              { icon: Mail, text: "centrodedesarrolloinfantilalbe@gmail.com", href: "mailto:centrodedesarrolloinfantilalbe@gmail.com", color: NAVY },
              { icon: ExternalLink, text: "centrodedesarrolloinfantilalbertobraniff.com", href: "https://centrodedesarrolloinfantilalbertobraniff.com", color: GREEN },
              { icon: Clock, text: "Lunes a viernes · 7:00am a 6:00pm", href: undefined as string | undefined, color: YELLOW },
              { icon: MapPin, text: "Alberto Braniff 56, Col. Aviación Civil, CDMX 15740", href: undefined as string | undefined, color: RED },
            ]).map(({ icon: Icon, text, href, color }, i) =>
              href ? (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 group">
                  <Icon size={14} style={{ color }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-xs">{text}</span>
                </a>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <Icon size={14} style={{ color }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-xs">{text}</span>
                </div>
              )
            )}
          </div>
          <a href="https://wa.me/5215568173872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-black px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: GREEN }}>
            Agenda una visita <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Article view ─────────────────────────────────────────────────────────────
function ArticleView({ articleId, onBack, onHome }: { articleId: string; onBack: () => void; onHome: () => void }) {
  const article = ARTICLES.find(a => a.id === articleId) ?? ARTICLES[0];
  const devItems = [
    { icon: Heart, color: RED, label: "Desarrollo emocional" },
    { icon: Users, color: NAVY, label: "Habilidades sociales" },
    { icon: MessageCircle, color: GREEN, label: "Comunicación" },
    { icon: Palette, color: YELLOW, label: "Creatividad" },
    { icon: Sprout, color: GREEN, label: "Autonomía" },
    { icon: GraduationCap, color: NAVY, label: "Motricidad" },
    { icon: Lightbulb, color: YELLOW, label: "Curiosidad por descubrir el mundo" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500 font-semibold flex-wrap">
          <button onClick={onHome} className="hover:text-blue-900 transition-colors">Inicio</button>
          <ChevronRight size={13} />
          <button onClick={onBack} className="hover:text-blue-900 transition-colors">Blog</button>
          <ChevronRight size={13} />
          <span className="truncate max-w-xs" style={{ color: NAVY }}>Artículo</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 text-white text-xs font-black px-3 py-1.5 rounded-full" style={{ backgroundColor: GREEN }}>
            <Tag size={10} /> {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-gray-400 font-semibold"><Calendar size={13} /> {article.date}</span>
          <span className="flex items-center gap-1.5 text-sm text-gray-400 font-semibold"><Clock size={13} /> {article.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8" style={{ color: NAVY }}>{article.title}</h1>
        <div className="rounded-3xl overflow-hidden bg-gray-50 mb-12 shadow-xl" style={{ height: 380 }}>
          <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-contain object-center" />
        </div>

        <div className="space-y-10 text-gray-700" style={{ fontSize: 17, lineHeight: 1.8 }}>
          {article.id === "primeros-anos" && <>
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: NAVY }}>Introducción</h2>
              <p>Los primeros años de vida representan una de las etapas más importantes en el crecimiento de una persona. Durante este periodo, las niñas y los niños desarrollan habilidades que serán la base de su aprendizaje, su forma de relacionarse con los demás y la confianza con la que enfrentarán nuevos desafíos a lo largo de su vida.</p>
              <p className="mt-4">Cada experiencia cuenta. Un juego compartido, una historia antes de dormir, una canción, una actividad artística o una conversación cotidiana contribuyen al desarrollo del lenguaje, la creatividad, el pensamiento y las habilidades sociales.</p>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN + "22" }}>
                  <Sprout size={20} style={{ color: GREEN }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>Aprender jugando</h2>
              </div>
              <p>El juego es mucho más que una forma de entretenimiento. Es la manera natural en que los niños descubren el mundo que los rodea.</p>
              <p className="mt-4">Mientras juegan, aprenden a resolver problemas, expresar sus emociones, trabajar en equipo, desarrollar su imaginación y fortalecer su motricidad.</p>
              <blockquote className="my-6 border-l-4 pl-6 py-2 bg-gray-50 rounded-r-2xl" style={{ borderColor: GREEN }}>
                <p className="text-lg font-black italic leading-relaxed" style={{ color: NAVY }}>
                  "Los espacios educativos que integran el juego como parte de su metodología favorecen un aprendizaje más dinámico, participativo y duradero."
                </p>
              </blockquote>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY + "15" }}>
                  <Shield size={20} style={{ color: NAVY }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>Un entorno seguro hace la diferencia</h2>
              </div>
              <p>Para que un niño pueda aprender necesita sentirse seguro, acompañado y valorado.</p>
              <p className="mt-4">Un ambiente donde recibe cariño, respeto y atención fortalece su autoestima y le permite desarrollar confianza para expresar sus ideas, hacer preguntas y enfrentar nuevos retos.</p>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: RED + "18" }}>
                  <Heart size={20} style={{ color: RED }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>El desarrollo integral</h2>
              </div>
              <p>El crecimiento infantil va mucho más allá del aprendizaje académico. También implica fortalecer aspectos como:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {devItems.map(({ icon: Icon, color, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color + "18" }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: NAVY }}>{label}</span>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN + "18" }}>
                  <Users size={20} style={{ color: GREEN }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>La importancia de trabajar en equipo con las familias</h2>
              </div>
              <p>La educación comienza en casa y se fortalece en la escuela.</p>
              <p className="mt-4">Cuando madres, padres, tutores y docentes trabajan de manera conjunta, los niños reciben un acompañamiento más sólido y coherente, favoreciendo su bienestar y desarrollo.</p>
            </section>
            <section className="rounded-3xl p-8 text-white" style={{ backgroundColor: NAVY }}>
              <div className="flex items-center gap-3 mb-4">
                <Star size={22} style={{ color: YELLOW }} fill={YELLOW} />
                <h2 className="text-2xl font-black">Conclusión</h2>
              </div>
              <p className="text-blue-100 leading-relaxed">Los primeros años de vida representan una oportunidad única para descubrir, aprender y crecer. Brindar a las niñas y los niños un entorno lleno de cariño, seguridad y experiencias significativas les permite desarrollar habilidades que los acompañarán durante toda su vida.</p>
              <p className="text-blue-100 leading-relaxed mt-4">En el Centro de Desarrollo Infantil Alberto Braniff creemos que cada experiencia, cada juego y cada pequeño logro contribuyen a formar personas curiosas, seguras y felices.</p>
            </section>
            <ArticleCTA />
            <section className="border-t border-gray-100 pt-8">
              <p className="text-xs text-gray-400 leading-relaxed italic">
                <strong className="text-gray-500">Fuentes de consulta:</strong> UNICEF, UNESCO, OMS y Harvard Center on the Developing Child, además de la experiencia educativa del Centro de Desarrollo Infantil Alberto Braniff.
              </p>
            </section>
          </>}

          {article.id === "aprender-ingles" && <>
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: NAVY }}>Introducción</h2>
              <p>Cada vez son más las familias que buscan una educación que prepare a sus hijos para desenvolverse en un mundo cada vez más conectado. Aprender un segundo idioma desde la infancia no solo favorece la comunicación, sino que también fortalece habilidades cognitivas, sociales y culturales que acompañarán a los niños durante toda su vida.</p>
              <p className="mt-4">En el Centro de Desarrollo Infantil Alberto Braniff, el aprendizaje del inglés forma parte de la experiencia diaria a través de juegos, canciones, cuentos y actividades diseñadas para cada etapa de desarrollo.</p>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY + "15" }}>
                  <Globe size={20} style={{ color: NAVY }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>¿Por qué aprender inglés desde pequeños?</h2>
              </div>
              <p>Durante los primeros años de vida, el cerebro posee una gran capacidad para adquirir nuevos conocimientos y desarrollar habilidades de comunicación.</p>
              <blockquote className="my-6 border-l-4 pl-6 py-2 bg-gray-50 rounded-r-2xl" style={{ borderColor: NAVY }}>
                <p className="text-lg font-black italic leading-relaxed" style={{ color: NAVY }}>
                  "Lo más importante es que este aprendizaje se realice respetando el ritmo de cada niño, convirtiendo el idioma en una experiencia cotidiana y agradable."
                </p>
              </blockquote>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN + "18" }}>
                  <Sprout size={20} style={{ color: GREEN }} />
                </div>
                <h2 className="text-2xl font-black" style={{ color: NAVY }}>Aprender jugando también en inglés</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {[
                  { icon: Music, color: RED, label: "Canciones y música" },
                  { icon: BookOpen, color: NAVY, label: "Cuentos y narraciones" },
                  { icon: Palette, color: YELLOW, label: "Actividades artísticas y creativas" },
                  { icon: Smile, color: GREEN, label: "Juegos didácticos" },
                  { icon: MessageCircle, color: NAVY, label: "Conversaciones sencillas" },
                  { icon: Users, color: RED, label: "Dinámicas grupales" },
                ].map(({ icon: Icon, color, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color + "18" }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: NAVY }}>{label}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-3xl p-8 text-white" style={{ backgroundColor: NAVY }}>
              <div className="flex items-center gap-3 mb-4">
                <Star size={22} style={{ color: YELLOW }} fill={YELLOW} />
                <h2 className="text-2xl font-black">Conclusión</h2>
              </div>
              <p className="text-blue-100 leading-relaxed">Aprender un segundo idioma desde la infancia es mucho más que incorporar nuevas palabras al vocabulario. Es brindar a las niñas y los niños herramientas que fortalecerán su confianza, su comunicación y su capacidad para desenvolverse en un mundo cada vez más conectado.</p>
              <p className="text-blue-100 leading-relaxed mt-4">En el Centro de Desarrollo Infantil Alberto Braniff creemos que el aprendizaje del inglés debe ser una experiencia positiva, cercana y divertida.</p>
            </section>
            <ArticleCTA />
            <section className="border-t border-gray-100 pt-8">
              <p className="text-xs text-gray-400 leading-relaxed italic">
                <strong className="text-gray-500">Fuentes de consulta:</strong> UNICEF, UNESCO, OMS, British Council y Harvard Center on the Developing Child, además de la experiencia educativa del Centro de Desarrollo Infantil Alberto Braniff.
              </p>
            </section>
          </>}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 border-2 font-black px-6 py-3 rounded-full text-sm transition-all" style={{ borderColor: NAVY, color: NAVY }}>
            <ArrowLeft size={14} /> Volver al Blog
          </button>
          <button onClick={onHome} className="inline-flex items-center gap-2 font-black px-6 py-3 rounded-full text-sm transition-all" style={{ backgroundColor: YELLOW, color: NAVY }}>
            Ir al sitio web <ArrowRight size={14} />
          </button>
        </div>
      </article>

      <div className="py-6 px-4 text-center" style={{ backgroundColor: NAVY }}>
        <p className="text-xs" style={{ color: "rgba(140,170,220,0.5)" }}>
          © 2025 Centro de Desarrollo Infantil Alberto Braniff · ¡Porque el Principio es Básico!
        </p>
      </div>
    </div>
  );
}

// ─── FAQ Chatbot ──────────────────────────────────────────────────────────────
const FAQ = [
  { q: "¿Qué edades aceptan?", a: "Atendemos desde los 45 días de nacido hasta los 5 años, en tres niveles: Lactantes (45 días–1 año), Maternal (1–2 años) y Preescolar (3–5 años)." },
  { q: "¿Tienen inglés diario?", a: "¡Sí! Ofrecemos 1 hora y media de inglés todos los días, integrada a la rutina mediante canciones, juegos, cuentos y conversaciones naturales." },
  { q: "¿Cuál es el horario?", a: "Nuestro horario regular es de lunes a viernes de 7:00 a.m. a 6:00 p.m. También contamos con horario extendido para adaptarnos al ritmo de cada familia." },
  { q: "¿Dónde están ubicados?", a: "Estamos en Alberto Braniff 56, Col. Aviación Civil, Ciudad de México, C.P. 15740." },
  { q: "¿Cómo inscribo a mi hijo?", a: "El proceso es muy sencillo: conoce nuestra propuesta, agenda un tour y completa la documentación. Puedes iniciar llenando nuestro formulario en línea.", cta: true },
  { q: "¿Tienen servicio de comedor?", a: "Sí, contamos con servicio de comedor en un espacio limpio y supervisado, donde los niños fortalecen hábitos saludables y aprenden a convivir." },
  { q: "¿Qué actividades complementarias ofrecen?", a: "Ofrecemos arte, música, experimentación científica, lectura, deporte en equipo, formación en valores y mucho más." },
  { q: "¿Cuánto cuesta la inscripción?", a: "Para conocer costos, becas y disponibilidad te invitamos a agendar una visita o enviarnos un mensaje.", cta: true },
  { q: "¿Cómo puedo contactarlos?", a: "Puedes escribirnos por WhatsApp al +52 55 6817 3872, por correo a centrodedesarrolloinfantilalbe@gmail.com, o llenando nuestro formulario en línea.", cta: true },
];

type ChatMsg = { from: "pablo" | "user"; text: string; cta?: boolean };

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { from: "pablo", text: "¡Hola! Soy Pablo, el asistente del Braniff. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [answered, setAnswered] = useState(false);

  const ask = (item: typeof FAQ[0]) => {
    setMessages(prev => [...prev, { from: "user", text: item.q }, { from: "pablo", text: item.a, cta: item.cta }]);
    setAnswered(true);
  };
  const reset = () => { setMessages([{ from: "pablo", text: "¡Claro! ¿Tienes alguna otra pregunta?" }]); setAnswered(false); };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[340px] max-w-[calc(100vw-2rem)] flex flex-col shadow-2xl rounded-3xl overflow-hidden" style={{ fontFamily: "'Nunito', sans-serif", maxHeight: "70vh" }}>
          <div className="px-5 py-4 flex items-center gap-3 flex-shrink-0" style={{ backgroundColor: NAVY }}>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${YELLOW}`, backgroundColor: "#0a1a38" }}>
              <ImageWithFallback src={pablitoGuide} alt="Pablo" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-1">
              <p className="text-white font-black text-sm leading-tight">Pablo</p>
              <p className="text-blue-300 text-xs">Asistente del Braniff</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-blue-300 hover:text-white transition-colors p-1"><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3" style={{ minHeight: 180 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-semibold ${msg.from === "pablo" ? "bg-white shadow-sm rounded-tl-none" : "text-white font-bold rounded-tr-none"}`} style={msg.from === "pablo" ? { color: NAVY } : { backgroundColor: NAVY }}>
                  {msg.text}
                  {msg.cta && (
                    <a href="https://wa.me/5215568173872" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-white font-black px-4 py-2 rounded-full text-xs w-fit" style={{ backgroundColor: GREEN }}>
                      Escribirnos por WhatsApp <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border-t border-gray-100 p-3 flex-shrink-0">
            {!answered ? (
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {FAQ.map((item, i) => (
                  <button key={i} onClick={() => ask(item)} className="w-full text-left text-xs font-bold px-3 py-2.5 rounded-xl transition-all" style={{ backgroundColor: "#f0f4ff", color: NAVY }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = NAVY; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f0f4ff"; (e.currentTarget as HTMLButtonElement).style.color = NAVY; }}>
                    {item.q}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button onClick={reset} className="w-full text-xs font-black border-2 py-2.5 rounded-xl transition-all" style={{ borderColor: NAVY, color: NAVY }}>
                  Hacer otra pregunta
                </button>
                <a href="https://wa.me/5215568173872" target="_blank" rel="noopener noreferrer" className="w-full text-center text-xs font-black text-white py-2.5 rounded-xl flex items-center justify-center gap-1.5" style={{ backgroundColor: GREEN }}>
                  Hablar con nosotros <ArrowRight size={12} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(o => !o)} className="fixed bottom-5 right-4 sm:right-6 z-[9999] flex items-center gap-2 hover:-translate-y-1 transition-all" style={{ filter: "drop-shadow(0 8px 24px rgba(2,27,81,0.35))" }}>
        {!open && <span className="text-white text-xs font-black px-3 py-2 rounded-full whitespace-nowrap" style={{ backgroundColor: NAVY }}>¿Tienes dudas?</span>}
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: `4px solid ${YELLOW}`, backgroundColor: "#0a1a38" }}>
          <ImageWithFallback src={pablitoGuide} alt="Pablo chatbot" className="w-full h-full object-cover object-center" />
        </div>
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white animate-pulse" style={{ backgroundColor: GREEN }} />}
      </button>
    </>
  );
}

// ─── Gallery data ─────────────────────────────────────────────────────────────
const GALLERY = [
  { src: gal7,  alt: "Alumno practicando escritura en clase" },
  { src: gal11, alt: "Niños en la casita de juegos del Braniff" },
  { src: gal6,  alt: "Niños jugando en el área de tiendita" },
  { src: gal10, alt: "Niño en clase con su cuaderno" },
  { src: gal9,  alt: "Alumno leyendo en la biblioteca del Braniff" },

  { src: foto1, alt: "Niñas participando en una actividad de arte y creatividad." },
  { src: foto2, alt: "Patio principal y áreas de juego del Kinder Alberto Braniff." },
  { src: foto3, alt: "Alumno desarrollando habilidades lógico-matemáticas con material didáctico." },
  { src: foto4, alt: "Niños realizando actividades de psicomotricidad." },
  { src: foto5, alt: "Alumnos y docentes durante una actividad grupal." },
  { src: foto6, alt: "Salón de estimulación temprana y desarrollo sensorial." },
];


const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Programas", href: "#programas" },
  { label: "Inglés Diario", href: "#ingles" },
  { label: "Contacto", href: "#contacto" },
];

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<View>("landing");
  const [articleId, setArticleId] = useState("primeros-anos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="${NAVY}"/>
      <circle cx="32" cy="32" r="26" fill="${YELLOW}"/>
      <text x="32" y="43" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="28" fill="${NAVY}">B</text>
    </svg>`;
    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.href = url;
    document.title = "Centro de Desarrollo Infantil Alberto Braniff";
  }, []);

  const goHome = () => { setView("landing"); window.scrollTo(0, 0); };
  const goBlog = () => { setView("blog"); window.scrollTo(0, 0); };
  const goArticle = (id: string) => { setArticleId(id); setView("article"); window.scrollTo(0, 0); };
  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (view !== "landing") { setView("landing"); setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (view === "blog") return <><BlogListView onRead={goArticle} onHome={goHome} /><ChatBot /></>;
  if (view === "article") return <><ArticleView articleId={articleId} onBack={goBlog} onHome={goHome} /><ChatBot /></>;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-2 min-h-[4.5rem]">
          <button onClick={goHome} className="flex items-center">
            <img src={logoKinder} alt="Centro de Desarrollo Infantil Alberto Braniff" className="h-12 w-auto object-contain" />
          </button>
          <ul className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button onClick={() => scrollTo(link.href)} className="relative text-[13px] font-bold transition-colors group py-1" style={{ color: NAVY + "aa" }}>
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 rounded-full" style={{ backgroundColor: GREEN }} />
                </button>
              </li>
            ))}
            <li>
              <button onClick={goBlog} className="relative text-[13px] font-bold transition-colors group py-1" style={{ color: NAVY + "aa" }}>
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 rounded-full" style={{ backgroundColor: GREEN }} />
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("#admisiones")} className="text-white text-[13px] font-black px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: RED }}>
                Admisiones
              </button>
            </li>
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors" style={{ color: NAVY }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-2 shadow-lg">
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="block w-full text-left px-6 py-3.5 text-sm font-bold hover:bg-gray-50 transition-colors" style={{ color: NAVY }}>
                {link.label}
              </button>
            ))}
            <button onClick={goBlog} className="block w-full text-left px-6 py-3.5 text-sm font-bold hover:bg-gray-50 transition-colors" style={{ color: NAVY }}>Blog</button>
            <div className="px-6 py-3">
              <button onClick={() => scrollTo("#admisiones")} className="w-full text-white font-black py-3 rounded-full text-sm" style={{ backgroundColor: RED }}>Admisiones</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden bg-white">
        {/* Multi-color top bar */}
        <div className="flex h-2">
          <div className="flex-1" style={{ backgroundColor: NAVY }} />
          <div className="flex-1" style={{ backgroundColor: RED }} />
          <div className="flex-1" style={{ backgroundColor: YELLOW }} />
          <div className="flex-1" style={{ backgroundColor: GREEN }} />
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[78vh] lg:min-h-[580px]">

            {/* Left column: copy + CTAs */}
            <div className="order-2 lg:order-1 flex flex-col">
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] mb-5" style={{ color: NAVY }}>
                Aprender, crecer<br />
                y <span style={{ color: GREEN }}>descubrir</span><br />
                <span style={{ color: RED }}>desde el principio</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Acompañamos a tus hijos en sus primeros pasos con amor, seguridad y experiencias que los preparan para la vida.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://wa.me/5215568173872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-black px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                  style={{ backgroundColor: NAVY }}
                >
                  Solicitar información <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => scrollTo("#programas")}
                  className="border-2 font-black px-7 py-3.5 rounded-full transition-all text-sm hover:-translate-y-0.5"
                  style={{ borderColor: GREEN, color: GREEN }}
                >
                  Ver programas
                </button>
              </div>

              <ColorDots />
            </div>

            {/* Right column: Circular logo big, clean */}
            <div className="order-1 lg:order-2 flex justify-center items-center py-8">
              <ImageWithFallback
                src={logoHero}
                alt="Centro de Desarrollo Infantil Alberto Braniff"
                className="object-contain w-full drop-shadow-xl"
                style={{ maxWidth: 420, maxHeight: 420 }}
              />
            </div>

          </div>
        </div>
      </section>


      {/* ── FEATURE TILES — navy bg ──────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, label: "Desarrollo integral", desc: "Crecimiento emocional, social, físico y cognitivo", bg: YELLOW, fg: NAVY },
            { icon: Globe, label: "Inglés todos los días", desc: "1.5 horas diarias de inmersión natural y divertida", bg: GREEN, fg: "#fff" },
            { icon: Shield, label: "Ambiente seguro", desc: "Espacios cuidados para el bienestar de cada niño", bg: RED, fg: "#fff" },
            { icon: Heart, label: "Atención cercana", desc: "Comunicación constante y cercana con las familias", bg: "#fff", fg: NAVY },
          ].map(({ icon: Icon, label, desc, bg, fg }) => (
            <div key={label} className="group rounded-3xl p-6 text-center cursor-default hover:-translate-y-1 transition-all hover:shadow-xl" style={{ backgroundColor: bg }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: fg === NAVY ? "rgba(2,27,81,0.12)" : "rgba(255,255,255,0.22)" }}>
                <Icon size={26} style={{ color: fg }} strokeWidth={2} />
              </div>
              <h3 className="font-black text-sm mb-2 leading-tight" style={{ color: fg }}>{label}</h3>
              <p className="text-xs leading-relaxed" style={{ color: fg, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS — yellow bg ─────────────────────────────────────────────── */}
      <section id="programas" className="py-20 relative overflow-hidden" style={{ backgroundColor: YELLOW }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Baby size={13} style={{ color: NAVY }} />
              <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: NAVY }}>Nuestros niveles</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: NAVY }}>
              Nuestros Niveles<br />y Programas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { avatar: avatarLactantes, title: "Lactantes", age: "45 días a 1 año", accent: NAVY, text: "Los primeros abrazos y descubrimientos merecen un lugar lleno de calma, cariño y protección. Acompañamos a los bebés con atención personalizada y estimulación temprana que respeta su ritmo de desarrollo." },
              { avatar: avatarMaternal,  title: "Maternal",  age: "1 a 2 años",      accent: RED,  text: "Cada paso, cada palabra y cada pequeño logro se convierte en una gran aventura. A través del juego y la exploración, los niños fortalecen su autonomía y aprenden a convivir con alegría y confianza." },
              { avatar: pablitoGuide,   title: "Preescolar", age: "3 a 5 años",     accent: GREEN, text: "Aquí la curiosidad encuentra su espacio para crecer. Cada día está lleno de preguntas, colores, experimentos y cuentos que despiertan el deseo de aprender, imaginar y crear." },
            ].map(({ avatar, title, age, accent, text }) => (
              <div key={title} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="h-2" style={{ backgroundColor: accent }} />
                <div className="p-7 flex flex-col flex-1">
                  {/* Avatar */}
                  <div className="mb-5 flex justify-center">
                    <div className="rounded-full overflow-hidden shadow-md" style={{ width: 96, height: 96, border: `4px solid ${accent}` }}>
                      <ImageWithFallback
                        src={avatar}
                        alt={`Avatar nivel ${title}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-1 text-center" style={{ color: NAVY }}>{title}</h3>
                  <p className="text-xs font-black mb-4 uppercase tracking-wider text-center" style={{ color: accent }}>{age}</p>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{text}</p>
                  <div className="mt-5 h-1 w-8 rounded-full" style={{ backgroundColor: accent }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <PablitoGuide message="¿En qué puedo ayudarte?" subMessage="¡Pregúntame lo que quieras!" borderColor="#57b949" side="right" size={100} />
          </div>
        </div>
      </section>

      {/* ── NOSOTROS / MISIÓN / VISIÓN — navy bg ─────────────────────────────── */}
<section id="nosotros" className="py-20 relative overflow-hidden" style={{ backgroundColor: NAVY }}>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-2 mb-3">
        <Sprout size={13} style={{ color: YELLOW }} />
        <span
          className="font-black text-[11px] uppercase tracking-[0.2em]"
          style={{ color: YELLOW }}
        >
          Quiénes somos
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">
        Una comunidad de amor,
        <br />
        aprendizaje y crecimiento
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        {
          icon: Building2,
          title: "Quiénes somos",
          bg: "rgba(255,255,255,0.06)",
          borderCol: YELLOW,
          iconColor: YELLOW,
          titleColor: "#FFFFFF",
          textColor: "rgba(220,235,255,0.85)",
          desc: "Somos un espacio educativo donde las niñas y los niños encuentran un ambiente seguro, alegre y lleno de experiencias que despiertan su curiosidad natural. Acompañamos su crecimiento desde los primeros meses de vida hasta el preescolar."
        },
        {
          icon: Heart,
          title: "Nuestra misión",
          bg: GREEN,
          borderCol: GREEN,
          iconColor: "#FFFFFF",
          titleColor: "#FFFFFF",
          textColor: "rgba(220,235,255,0.85)",
          desc: "Brindar un espacio educativo cálido, seguro e inspirador donde cada niña y niño pueda descubrir el mundo con alegría, desarrollar sus habilidades y fortalecer su confianza a través del juego, la exploración y el aprendizaje significativo."
        },
        {
          icon: Sparkles,
          title: "Nuestra visión",
          bg: YELLOW,
          borderCol: YELLOW,
          iconColor: NAVY,
          titleColor: NAVY,
          textColor: "rgba(11,32,85,0.88)",
          desc: "Ser una institución reconocida por formar niñas y niños felices, seguros, curiosos y preparados para los retos del futuro. Un espacio donde las familias encuentren mucho más que una escuela: una comunidad educativa."
        },
      ].map(
        ({
          icon: Icon,
          title,
          bg,
          borderCol,
          iconColor,
          titleColor,
          textColor,
          desc,
        }) => (
          <div
            key={title}
            className="rounded-3xl p-8 border"
            style={{
              backgroundColor: bg,
              borderColor: borderCol + "44",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
              style={{ backgroundColor: borderCol + "33" }}
            >
              <Icon size={22} style={{ color: iconColor }} />
            </div>

            <h3
              className="text-xl font-black mb-4"
              style={{ color: titleColor }}
            >
              {title}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: textColor }}
            >
              {desc}
            </p>
          </div>
        )
      )}
    </div>
  </div>
</section>
      {/* ── SERVICES — navy bg ───────────────────────────────────────────────── */}
      <section id="ingles" className="py-20 relative overflow-hidden" style={{ backgroundColor: NAVY }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: YELLOW }}>Nuestros servicios</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 leading-tight">
              Todo lo que necesitan<br />tus pequeños
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: "Inglés todos los días", desc: "1.5 horas diarias de inglés de forma natural y divertida", accent: YELLOW },
              { icon: Utensils, label: "Servicio de comedor", desc: "Alimentación nutritiva en ambiente limpio y supervisado", accent: GREEN },
              { icon: BookMarked, label: "Taller de tareas", desc: "Apoyo cercano para fortalecer hábitos de estudio", accent: RED },
              { icon: AlarmClock, label: "Horario extendido", desc: "Atención segura que se adapta al ritmo de tu familia", accent: YELLOW },
              { icon: Palette, label: "Actividades complementarias", desc: "Arte, música, deportes, ciencia y más cada día", accent: GREEN },
              { icon: Heart, label: "Formación en valores", desc: "Niños seguros, generosos y felices desde pequeños", accent: RED },
              { icon: MessageCircle, label: "Comunicación familiar", desc: "Avances y momentos especiales compartidos siempre", accent: YELLOW },
              { icon: Sprout, label: "Estimulación temprana", desc: "Desarrollo óptimo desde los primeros meses de vida", accent: GREEN },
            ].map(({ icon: Icon, label, desc, accent }) => (
              <div key={label} className="rounded-2xl p-5 transition-all cursor-default hover:-translate-y-0.5 border" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: accent + "33" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: accent + "25" }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <h4 className="font-black text-white text-sm mb-2 leading-tight">{label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(180,200,255,0.75)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — white bg ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <Star size={13} style={{ color: YELLOW }} fill={YELLOW} />
              <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: GREEN }}>Lo que dicen nuestras familias</span>
            </div>
            <h2 className="text-3xl font-black mt-2" style={{ color: NAVY }}>Historias que nos inspiran</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "María González", role: "Mamá de Sofía, 3 años", text: "Desde que Sofía llegó al Braniff su desarrollo fue increíble. Las maestras son muy cariñosas y siempre nos mantienen informados de cada avance.", initials: "MG", color: GREEN },
              { name: "Roberto Hernández", role: "Papá de Emilio, 2 años", text: "Lo mejor fue ver cómo Emilio aprendió palabras en inglés jugando. El ambiente es muy seguro y el equipo es de primera.", initials: "RH", color: NAVY },
              { name: "Ana Martínez", role: "Mamá de Isabella, 4 años", text: "La comunicación con los maestros es constante y cálida. Siempre sé qué está aprendiendo mi hija. Una escuela que te hace sentir tranquilo.", initials: "AM", color: RED },
              { name: "Carlos López", role: "Papá de Mateo, 1 año", text: "Confiamos el cuidado de nuestro bebé desde los 10 meses. El área de lactantes es impecable, cálida y llena de amor.", initials: "CL", color: YELLOW },
            ].map(({ name, role, text, initials, color }) => (
              <div key={name} className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col border border-gray-100">
                <div className="h-2" style={{ backgroundColor: color }} />
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} fill={YELLOW} color={YELLOW} />)}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 italic flex-1">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0" style={{ backgroundColor: color === YELLOW ? NAVY : color }}>
                      <span style={{ color: "white" }}>{initials}</span>
                    </div>
                    <div>
                      <p className="text-xs font-black" style={{ color: NAVY }}>{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA — light gray bg ───────────────────────────────────────────── */}
      <section id="galeria" className="py-20" style={{ backgroundColor: "#f7f8fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <ImageIcon size={13} style={{ color: GREEN }} />
              <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: GREEN }}>Galería</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mt-2" style={{ color: NAVY }}>La vida en el Braniff</h2>
            <p className="text-gray-500 mt-2 text-base max-w-lg mx-auto">
              Momentos reales de aprendizaje, juego y convivencia en nuestras instalaciones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 focus:outline-none"
                style={{ aspectRatio: "4/3" }}
              >
                <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(2,27,81,0.2)] transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                    <Search size={18} style={{ color: NAVY }} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 font-semibold mt-6">
            Más fotos próximamente — síguenos en redes sociales
          </p>
        </div>

        {lightbox !== null && (
          <div className="fixed inset-0 z-[9998] bg-black/92 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i - 1 + GALLERY.length) % GALLERY.length : null); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all">
              <ArrowLeft size={22} />
            </button>
            <div className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
              <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].alt} className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
              <p className="text-white/70 text-sm text-center px-4">{GALLERY[lightbox].alt}</p>
              <div className="flex gap-2 mt-1">
                {GALLERY.map((_, i) => (
                  <button key={i} onClick={() => setLightbox(i)} className="w-2.5 h-2.5 rounded-full transition-all" style={{ backgroundColor: i === lightbox ? YELLOW : "rgba(255,255,255,0.35)" }} />
                ))}
              </div>
            </div>
            <button onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i + 1) % GALLERY.length : null); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all">
              <ArrowRight size={22} />
            </button>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-all">
              <X size={20} />
            </button>
          </div>
        )}
      </section>

      {/* ── ADMISSIONS — red bg ──────────────────────────────────────────────── */}
      <section id="admisiones" className="py-20 relative overflow-hidden" style={{ backgroundColor: RED }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <GraduationCap size={13} style={{ color: YELLOW }} />
                <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: YELLOW }}>Proceso de admisión</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-10 leading-tight">
                Únete a nuestra<br />comunidad
              </h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Conoce nuestra propuesta", desc: "Visita nuestra página, explora nuestros programas y descubre por qué el Braniff es el lugar ideal para tus hijos.", bg: NAVY },
                  { step: "02", title: "Agenda un tour", desc: "Visita nuestras instalaciones, conoce al equipo docente y vive la experiencia Braniff de primera mano.", bg: YELLOW },
                  { step: "03", title: "Proceso de inscripción", desc: "Completa la documentación y reserva el lugar de tu pequeño. Te acompañamos en cada paso del camino.", bg: "#fff" },
                  { step: "04", title: "¡Bienvenido al Braniff!", desc: "Tu hijo se une a nuestra comunidad educativa. ¡Juntos comenzamos esta gran aventura de aprendizaje!", bg: GREEN },
                ].map(({ step, title, desc, bg }) => {
                  const fg = bg === YELLOW ? NAVY : bg === "#fff" ? NAVY : "#fff";
                  return (
                    <div key={step} className="flex gap-5 items-start group">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base flex-shrink-0 shadow-md group-hover:scale-105 transition-transform" style={{ backgroundColor: bg, color: fg }}>
                        {step}
                      </div>
                      <div className="pt-1.5">
                        <h4 className="font-black text-white mb-1.5">{title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="https://wa.me/5215568173872" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 font-black px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm" style={{ backgroundColor: YELLOW, color: NAVY }}>
                Agendar una visita <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex flex-col items-center gap-5 lg:pt-6">
              <div className="relative">
                <div className="rounded-full overflow-hidden shadow-2xl" style={{ width: 208, height: 208, border: `8px solid ${YELLOW}`, backgroundColor: "#0a1a38" }}>
                  <ImageWithFallback src={pablitoGuide} alt="Pablito te espera en el Braniff" className="w-full h-full object-cover object-center" />
                </div>
                <div className="absolute -top-4 -right-4 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg" style={{ backgroundColor: NAVY }}>
                  ¡Te esperamos!
                </div>
              </div>
              <div className="rounded-2xl rounded-tl-none px-6 py-4 text-center shadow-lg" style={{ backgroundColor: YELLOW }}>
                <p className="font-black" style={{ color: NAVY }}>El Braniff será tu</p>
                <p className="font-black" style={{ color: NAVY }}>segundo hogar</p>
              </div>
              <div className="bg-white rounded-3xl p-5 w-full shadow-sm space-y-3 max-w-xs">
                <h4 className="font-black text-sm mb-1" style={{ color: NAVY }}>Información de contacto</h4>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone size={14} style={{ color: GREEN }} className="flex-shrink-0" />
                  <span className="font-bold">+52 55 6817 3872</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={14} style={{ color: RED }} className="flex-shrink-0 mt-0.5" />
                  <span>Alberto Braniff 56, Aviación Civil, CDMX 15740</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock size={14} style={{ color: NAVY }} className="flex-shrink-0" />
                  <span>Lun - Vie · 7:00am a 6:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT — white bg ────────────────────────────────────────────────── */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <MessageCircle size={13} style={{ color: GREEN }} />
              <span className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: GREEN }}>Contáctanos</span>
            </div>
            <h2 className="text-3xl font-black mt-2" style={{ color: NAVY }}>Estamos aquí para ti</h2>
            <p className="text-gray-400 mt-1.5 text-sm">Escríbenos y te responderemos a la brevedad</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Phone, label: "WhatsApp", value: "+52 55 6817 3872", sub: "Lun - Vie · 7:00am - 6:00pm", color: GREEN },
              { icon: MapPin, label: "Dirección", value: "Alberto Braniff 56", sub: "Aviación Civil, CDMX 15740", color: RED },
              { icon: Clock, label: "Horario", value: "Lun - Vie 7:00 - 18:00", sub: "Horario extendido disponible", color: NAVY },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div key={label} className="rounded-3xl p-7 text-center hover:shadow-md transition-shadow border border-gray-100" style={{ backgroundColor: "#f7f8fa" }}>
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: color + "15" }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-black" style={{ color: NAVY }}>{value}</p>
                <p className="text-xs text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ backgroundColor: NAVY }}>
            <ColorDots className="justify-center mb-6" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">¿Lista para agendar una visita?</h3>
            <p className="text-blue-200 text-base mb-8 max-w-md mx-auto">
              Escríbenos y con gusto te contamos todo sobre nuestros programas y el proceso de admisión.
            </p>
            <a
              href="https://wa.me/5215568173872"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-black px-10 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg text-base"
              style={{ backgroundColor: YELLOW, color: NAVY }}
            >
              Agendar visita <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER — navy bg ─────────────────────────────────────────────────── */}
      <footer className="text-white pt-14 pb-8 px-4" style={{ backgroundColor: NAVY }}>
        {/* Color bar */}
        <div className="flex h-1 mb-10 rounded-full overflow-hidden max-w-7xl mx-auto">
          <div className="flex-1" style={{ backgroundColor: RED }} />
          <div className="flex-1" style={{ backgroundColor: YELLOW }} />
          <div className="flex-1" style={{ backgroundColor: GREEN }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h5 className="font-black text-sm mb-6 uppercase tracking-wider" style={{ color: YELLOW }}>Contacto</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} style={{ color: YELLOW }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "rgba(180,200,255,0.8)" }}>Alberto Braniff 56, Aviación Civil,<br />Ciudad de México, 15740</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={15} style={{ color: YELLOW }} className="flex-shrink-0" />
                  <span className="text-sm" style={{ color: "rgba(180,200,255,0.8)" }}>Lun - Vie · 7:00am a 6:00pm</span>
                </li>
                <li>
                  <a href="https://wa.me/5215568173872" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Phone size={15} style={{ color: YELLOW }} className="flex-shrink-0" />
                    <span className="text-sm group-hover:text-white transition-colors" style={{ color: "rgba(180,200,255,0.8)" }}>+52 55 6817 3872</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:centrodedesarrolloinfantilalbe@gmail.com" className="flex items-center gap-3 group">
                    <Mail size={15} style={{ color: YELLOW }} className="flex-shrink-0" />
                    <span className="text-sm break-all group-hover:text-white transition-colors" style={{ color: "rgba(180,200,255,0.8)" }}>centrodedesarrolloinfantilalbe<br />@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://centrodedesarrolloinfantilalbertobraniff.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <ExternalLink size={15} style={{ color: YELLOW }} className="flex-shrink-0" />
                    <span className="text-sm group-hover:text-white transition-colors" style={{ color: "rgba(180,200,255,0.8)" }}>centrodedesarrolloinfantil<br />albertobraniff.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-sm mb-6 uppercase tracking-wider" style={{ color: YELLOW }}>Navegación</h5>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <button onClick={() => scrollTo(link.href)} className="text-sm hover:text-white transition-colors text-left" style={{ color: "rgba(180,200,255,0.8)" }}>{link.label}</button>
                  </li>
                ))}
                <li><button onClick={() => scrollTo("#admisiones")} className="text-sm hover:text-white transition-colors text-left" style={{ color: "rgba(180,200,255,0.8)" }}>Admisiones</button></li>
                <li><button onClick={goBlog} className="text-sm hover:text-white transition-colors text-left" style={{ color: "rgba(180,200,255,0.8)" }}>Blog</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-sm mb-6 uppercase tracking-wider" style={{ color: YELLOW }}>Programas</h5>
              <ul className="space-y-3">
                {[
                  { icon: Baby, label: "Lactantes (45d - 1 año)" },
                  { icon: Smile, label: "Maternal (1 - 2 años)" },
                  { icon: BookOpen, label: "Preescolar (3 - 5 años)" },
                  { icon: Globe, label: "Inglés diario" },
                  { icon: Palette, label: "Actividades complementarias" },
                  { icon: AlarmClock, label: "Horario extendido" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <Icon size={13} style={{ color: YELLOW }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: "rgba(180,200,255,0.8)" }}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-black text-sm mb-6 uppercase tracking-wider" style={{ color: YELLOW }}>Síguenos</h5>
              <div className="space-y-3">
                {[
                  { href: "https://www.facebook.com/centrodedesarrolloinfantilalbertobraniff/", label: "Facebook", hoverBg: "#1877F2", icon: "fb" },
                  { href: "https://www.instagram.com/kinderalbertobraniff/", label: "Instagram", hoverBg: "#E1306C", icon: "ig" },
                  { href: "https://www.tiktok.com/@kinderalbertobraniff", label: "TikTok", hoverBg: "#010101", icon: "tt" },
                ].map(({ href, label, hoverBg, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = hoverBg)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)")}>
                      {icon === "fb" && <Facebook size={16} />}
                      {icon === "ig" && <Instagram size={16} />}
                      {icon === "tt" && <TikTokIcon size={16} />}
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors" style={{ color: "rgba(180,200,255,0.8)" }}>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(140,170,220,0.5)" }}>
            <p>© 2025 Centro de Desarrollo Infantil Alberto Braniff. Todos los derechos reservados.</p>
            <p>¡Porque el Principio es Básico!</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
