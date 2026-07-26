import { createFileRoute } from "@tanstack/react-router";
import { Camera, ChevronDown, ChevronUp, Mail, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/model-hero.jpg";
import gallery1 from "../assets/model-gallery-1.jpg";
import gallery2 from "../assets/model-gallery-2.jpg";
import gallery3 from "../assets/model-gallery-3.jpg";
import gallery4 from "../assets/model-gallery-4.jpg";
import {
  Facebook,
  Instagram,
  TikTokIcon,
  WhatsAppIcon,
} from "../components/social-icons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sofía Vélez | Modelo & Creadora de Contenido" },
      {
        name: "description",
        content:
          "Portafolio digital de Sofía Vélez. Explora su galería editorial, conoce su historia y conecta con ella en TikTok, Instagram, Facebook y WhatsApp.",
      },
      {
        property: "og:title",
        content: "Sofía Vélez | Modelo & Creadora de Contenido",
      },
      {
        property: "og:description",
        content:
          "Portafolio digital de Sofía Vélez. Explora su galería editorial, conoce su historia y conecta con ella en redes sociales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const socialLinks = [
  {
    name: "TikTok",
    href: "https://tiktok.com/@sofiavelez.model",
    icon: TikTokIcon,
    label: "Sígueme en TikTok",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sofiavelez.model",
    icon: Instagram,
    label: "Sígueme en Instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/sofiavelez.model",
    icon: Facebook,
    label: "Sígueme en Facebook",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: WhatsAppIcon,
    label: "Escríbeme por WhatsApp",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Sofía Vélez en vestido blanco editorial" },
  { src: gallery2, alt: "Retrato de belleza de Sofía Vélez" },
  { src: gallery3, alt: "Sofía Vélez en abrigo camel" },
  { src: gallery4, alt: "Sofía Vélez en retrato lifestyle" },
];

function Index() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const mobileLimit = 4;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 md:px-12 lg:flex-row lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-gold-soft),transparent_40%)]" />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Modelo &amp; Creadora
            </span>
            <h1 className="text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Sofía
              <br />
              <span className="italic text-taupe">Vélez</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Bienvenida a mi portafolio digital. Aquí encontrarás una selección
              de mi trabajo, mi historia y las mejores formas de conectar conmigo.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:text-gold hover:shadow-md"
                >
                  <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
                </a>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              <Mail className="h-4 w-4" />
              Trabajemos juntas
            </a>
          </div>

          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-soft via-cream-dark to-cream opacity-60 blur-2xl" />
            <img
              src={heroImage}
              alt="Sofía Vélez, modelo editorial"
              width={1024}
              height={1280}
              loading="eager"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-espresso/10"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex">
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <div className="h-8 w-px bg-border" />
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-3xl border border-gold/30" />
              <img
                src={gallery4}
                alt="Sofía Vélez en sesión lifestyle"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
              Sobre mí
            </span>
            <h2 className="text-4xl text-foreground md:text-5xl">
              Pasión por la imagen, <span className="italic text-taupe">autenticidad en cada proyecto</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy Sofía Vélez, modelo y creadora de contenido con sede en
                Latinoamérica. Me especializo en editoriales de moda, campañas de
                belleza y contenido lifestyle para marcas que buscan transmitir
                emoción y elegancia.
              </p>
              <p>
                Desde sesiones en estudio hasta proyectos en locación, cada
                fotografía es una oportunidad para contar una historia. Mi
                objetivo es crear imágenes que sean atemporales, sofisticadas y
                genuinas.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-card p-5 shadow-sm">
                <Camera className="mb-3 h-6 w-6 text-gold" />
                <p className="text-2xl font-semibold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="rounded-2xl bg-card p-5 shadow-sm">
                <Sparkles className="mb-3 h-6 w-6 text-gold" />
                <p className="text-2xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Campañas realizadas</p>
              </div>
              <div className="rounded-2xl bg-card p-5 shadow-sm">
                <MapPin className="mb-3 h-6 w-6 text-gold" />
                <p className="text-2xl font-semibold text-foreground">Latam</p>
                <p className="text-sm text-muted-foreground">Disponible para viajes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="portafolio" className="bg-cream-dark/30 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
              Portafolio
            </span>
            <h2 className="text-4xl text-foreground md:text-5xl">
              Galería <span className="italic text-taupe">seleccionada</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Una muestra de editoriales, retratos de belleza y sesiones
              lifestyle que reflejan mi versatilidad frente a cámara.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {galleryImages.map((image, index) => {
              const hiddenOnMobile = index >= mobileLimit && !showAllGallery;
              return (
                <div
                  key={image.alt}
                  className={`group relative overflow-hidden rounded-2xl ${
                    hiddenOnMobile ? "hidden sm:block" : "block"
                  } ${index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-2" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[4/5]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>

          {galleryImages.length > mobileLimit && (
            <button
              type="button"
              onClick={() => setShowAllGallery((prev) => !prev)}
              className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-accent sm:hidden"
            >
              {showAllGallery ? (
                <>
                  Ver menos <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Ver más fotos <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </section>

      {/* Socials CTA */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground shadow-2xl shadow-primary/20 md:px-16">
          <Sparkles className="mx-auto mb-6 h-8 w-8 text-gold" />
          <h2 className="text-3xl md:text-5xl">
            Conecta conmigo en <span className="italic text-gold-soft">redes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Sígueme para ver detrás de cámaras, nuevos proyectos y contenido
            exclusivo. ¡Me encantaría tenerte en mi comunidad!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground hover:text-primary"
              >
                <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-cream-dark/30 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
            Contacto
          </span>
          <h2 className="text-4xl text-foreground md:text-5xl">
            ¿Trabajamos <span className="italic text-taupe">juntas?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estoy disponible para colaboraciones, campañas, editoriales y
            proyectos de contenido. Escríbeme y hablemos.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contacto@sofiavelez.model"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              contacto@sofiavelez.model
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-accent sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-medium text-foreground">
              Sofía Vélez
            </p>
            <p className="text-sm text-muted-foreground">
              Modelo &amp; Creadora de Contenido
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sofía Vélez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
