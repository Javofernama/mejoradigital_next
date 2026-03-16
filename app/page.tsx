import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Laptop,
  Cog,
  Shield,
  BarChart,
  Cloud,
  Smartphone,
  Building,
  ArrowRight,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Testimonials } from "@/components/testimonials";
import { ClientLogos } from "@/components/client-logos";
//import { NewsletterSignup } from "@/components/newsletter-signup"

import appImage from "@/assets/images/dev.webp";
import { FeaturedSolutions } from "@/components/fetured-solutions";
import { AssociatesShowcase } from "@/components/associates-showcases";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos plataformas y aplicaciones personalizadas para que tu negocio funcione mejor y más rápido.",
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Laptop,
      title: "Transformación Digital Empresarial",
      description:
        "Digitalizamos tus procesos, eliminamos tareas manuales y hacemos tu empresa más eficiente.",
      color: "from-accent/20 to-success/20",
    },
    {
      icon: Cog,
      title: "Integración y Automatización de Sistemas",
      description:
        "Hacemos que todos tus sistemas y herramientas trabajen juntos de forma automática.",
      color: "from-success/20 to-primary/20",
    },
    {
      icon: Shield,
      title: "Ciberseguridad y Protección de Datos",
      description:
        "Protegemos la información de tu empresa con auditorías de seguridad y buenas prácticas.",
      color: "from-primary/20 to-success/20",
    },
    {
      icon: BarChart,
      title: "Inteligencia de Negocios y Análisis de Datos",
      description:
        "Transformamos tus datos en información valiosa para que tomes mejores decisiones.",
      color: "from-accent/20 to-primary/20",
    },
    {
      icon: Cloud,
      title: "Desarrollo de Productos SaaS",
      description:
        "Si tienes una idea de software como servicio, la hacemos realidad con tecnología escalable.",
      color: "from-success/20 to-accent/20",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles y Web",
      description:
        "Creamos apps modernas y fáciles de usar para conectar mejor con tus clientes.",
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Building,
      title: "Plataformas para Empresas",
      description:
        "Diseñamos software especializado para optimizar la gestión de tu negocio.",
      color: "from-accent/20 to-success/20",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0">
            <div className="animate-pulse-slow absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="animate-pulse-slow absolute right-1/4 top-3/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 py-12 md:py-24 lg:grid-cols-2 lg:py-32">
              {/* Hero Section */}
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-success animate-gradient">
                    Soluciones Digitales y Desarrollo de Software para Hacer
                    Crecer tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Transformamos ideas en software a medida, optimizamos
                    procesos y protegemos tu empresa con tecnología de
                    vanguardia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="animate-fade-in" asChild>
                    <Link href="/servicios">Conoce Nuestros Servicios</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="animate-fade-in"
                    asChild
                  >
                    <Link href="/contacto">Agenda una Consulta</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>+10 años desarrollando soluciones digitales</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>
                      Empresas en América y Europa confían en nosotros
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Tecnología escalable y segura para tu negocio</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-3xl" />
                  <Image
                    src={appImage}
                    alt="Digital Platform Illustration"
                    width={600}
                    height={600}
                    className="relative rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explora nuestros servicios
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Ofrecemos soluciones tecnológicas integrales para impulsar y
                  proteger tu negocio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                    <CardContent className="relative p-6">
                      <div className="flex flex-col gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5 w-fit">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/servicios">
                  Ver Todos los Servicios
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI & Automation Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container relative px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Automatización Inteligente
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tu negocio, trabajando solo
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Implementamos agentes de IA y flujos automatizados que ejecutan tareas,
                  toman decisiones y conectan tus sistemas — sin intervención humana.
                </p>
              </div>
            </div>

            {/* Main grid */}
            <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
              {/* Card 1 - Agentes IA */}
              <Card className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6 space-y-4">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit">
                    {/* Bot icon inline */}
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.713-1.115 2.461l-1.084-.242m0 0l1.084.242M5 14.5l-1.402 1.902c-1 1-.03 2.713 1.115 2.461l1.571-.35" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Agentes Virtuales con IA</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Agentes conversacionales y autónomos que atienden clientes, procesan
                      solicitudes y ejecutan acciones en tiempo real, integrados a tus canales.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {["Atención al cliente 24/7", "Procesamiento de documentos", "Toma de decisiones autónoma"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Card 2 - n8n / Automatización */}
              <Card className="group relative overflow-hidden border-accent/10 hover:border-accent/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6 space-y-4">
                  <div className="rounded-xl bg-accent/10 p-3 w-fit">
                    <Cog className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Flujos con n8n & Make</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Automatizamos tus operaciones conectando apps, APIs y bases de datos
                      con flujos visuales que corren solos, sin código complejo.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {["Integración entre sistemas", "Notificaciones automáticas", "Reportes y sincronización"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Card 3 - Procesos con IA */}
              <Card className="group relative overflow-hidden border-success/10 hover:border-success/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6 space-y-4">
                  <div className="rounded-xl bg-success/10 p-3 w-fit">
                    <BarChart className="h-6 w-6 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Procesos Potenciados con IA</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Incorporamos modelos de lenguaje y visión artificial en tus flujos
                      de trabajo para clasificar, resumir, predecir y generar contenido.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {["LLMs integrados a tu stack", "Clasificación y extracción", "Generación de contenido"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Bottom banner */}
            <div className="mx-auto max-w-5xl mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left space-y-1">
                  <p className="font-semibold text-lg">¿Tienes un proceso repetitivo que quieres automatizar?</p>
                  <p className="text-sm text-muted-foreground">
                    Cuéntanos cómo trabaja tu equipo hoy y diseñamos una solución a medida.
                  </p>
                </div>
                <Button size="lg" className="shrink-0 group" asChild>
                  <Link href="/contacto">
                    Agenda una llamada
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section - Replaces Video Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Soluciones Que Destacan
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Descubre cómo nuestras soluciones tecnológicas pueden
                  transformar tu negocio
                </p>
              </div>
            </div>
            <FeaturedSolutions />
          </div>
        </section>

        {/* Associates Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter">Nuestros Asociados</h2>
                <p className="mx-auto max-w-[700px] text-sm text-muted-foreground md:text-base">
                  Colaboramos con las mejores empresas para ofrecer soluciones integrales
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl py-6">
              <AssociatesShowcase />
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Empresas que han trabajado con nosotros
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Nuestros clientes incluyen empresas de tecnología, banca y
                  retail
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <ClientLogos />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Lo que dicen nuestros clientes
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Historias de éxito de quienes ya han transformado su negocio
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para llevar tu empresa al siguiente nivel con
                  tecnología de vanguardia?
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Agenda una consulta gratuita y descubre cómo podemos ayudarte
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contacto">
                    Escríbenos Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container flex flex-col gap-6 px-4 py-12 md:px-6 lg:gap-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Sobre Nosotros</h3>
                <p className="text-sm text-muted-foreground">
                  Expertos en desarrollo de software, transformación digital y
                  tecnologías innovadoras para empresas.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
                  <nav className="flex flex-col gap-2 text-sm">
                    <Link href="/servicios" className="hover:underline">
                      Servicios
                    </Link>
                    <Link href="/nosotros" className="hover:underline">
                      Quiénes Somos
                    </Link>
                    <Link href="/contacto" className="hover:underline">
                      Contacto
                    </Link>
                    <Link href="/politica-de-privacidad" className="hover:underline">
                      Política de Privacidad
                    </Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Contacto</h3>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>contacto@mejoradigital.cl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t pt-6 text-center text-sm text-muted-foreground">
              <p>© 2025 Mejora Digital. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
