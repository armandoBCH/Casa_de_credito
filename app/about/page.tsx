"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Award,
  Star,
  Handshake,
  TrendingUp,
  Phone
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Pasión por el Hogar",
    description: "Creemos que cada hogar merece ser especial. Trabajamos con dedicación para ayudarte a crear el espacio perfecto para vos y tu familia."
  },
  {
    icon: Handshake,
    title: "Confianza y Transparencia",
    description: "Construimos relaciones duraderas basadas en la honestidad. Sin sorpresas, sin letra chica, solo condiciones claras y justas."
  },
  {
    icon: Users,
    title: "Compromiso con el Cliente",
    description: "Tu satisfacción es nuestra prioridad. Desde la primera consulta hasta la entrega, estamos con vos en cada paso del proceso."
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Conjunto",
    description: "Crecemos cuando nuestros clientes crecen. Por eso ofrecemos soluciones flexibles que se adaptan a tu situación económica."
  }
];

const stats = [
  { icon: Users, number: "5,000+", label: "Familias Satisfechas" },
  { icon: Clock, number: "10", label: "Años de Experiencia" },
  { icon: Award, number: "50+", label: "Marcas de Calidad" },
  { icon: Shield, number: "100%", label: "Compra Segura" }
];

const timeline = [
  {
    year: "2014",
    title: "Fundación",
    description: "Iniciamos como una pequeña empresa familiar con el sueño de ayudar a las familias a equipar sus hogares."
  },
  {
    year: "2017",
    title: "Expansión",
    description: "Ampliamos nuestro catálogo y comenzamos a trabajar con las mejores marcas del mercado."
  },
  {
    year: "2020",
    title: "Digitalización",
    description: "Lanzamos nuestra tienda online para mejorar la experiencia del cliente y facilitar la compra directa."
  },
  {
    year: "2024",
    title: "Líderes del Sector",
    description: "Nos consolidamos como referentes en la venta de muebles y electrodomésticos en la región."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/20">
              Desde 2014
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Tu Socio de Confianza
              <span className="block text-accent-light">para Equipar tu Hogar</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Más de 10 años ayudando a familias a conseguir 
              los muebles y electrodomésticos que necesitan, con la mejor atención y múltiples formas de pago.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Casa del Credito nació en 2014 con una misión clara: hacer que el equipamiento 
                    del hogar sea accesible para todas las familias. Comenzamos como 
                    una pequeña empresa familiar que entendía la importancia de la confianza
                    y el buen servicio.
                  </p>
                  <p>
                    A lo largo de estos años, hemos crecido junto a nuestros clientes, 
                    adaptándonos a sus necesidades y manteniendo siempre nuestros valores 
                    de cercanía, transparencia y calidad.
                  </p>
                  <p>
                    Hoy somos líderes en el sector, pero seguimos siendo esa empresa 
                    que se preocupa genuinamente por ayudar a cada cliente a hacer realidad 
                    el hogar de sus sueños.
                  </p>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                <img
                  src="https://placehold.co/2340x1560/f0f0f0/333333?text=Equipo+Sonriendo"
                  alt="Familia en el hogar"
                  className="rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-primary">
                  <div className="flex items-center gap-3">
                    <Star className="h-8 w-8 fill-current" />
                    <div>
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-sm opacity-90">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Los principios que nos guían en cada decisión y nos ayudan a construir 
                relaciones duraderas con nuestros clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="bg-card border-border hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestro Crecimiento
              </h2>
              <p className="text-lg text-muted-foreground">
                El camino que nos trajo hasta donde estamos hoy
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="bg-card border-border shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-primary text-primary-foreground">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dónde Estamos
              </h2>
              <p className="text-lg text-muted-foreground">
                Ubicados en Olavarría para servirte mejor
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Nuestra Sede Principal
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      España 3024, B7400 Olavarría, Provincia de Buenos Aires
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Contamos con un showroom donde podés ver y tocar todos nuestros productos. 
                      También tenemos un equipo de asesores especializados que te van a 
                      ayudar a encontrar la mejor opción para vos.
                    </p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Horarios de Atención</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes a Viernes:</span>
                      <span className="font-medium">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados:</span>
                      <span className="font-medium">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos:</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-up">
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    También te Atendemos Online
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestro equipo puede asesorarte por WhatsApp para lo que necesites,
                    sin compromisos.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://wa.me/5492284598212?text=Hola! Me gustaría hacer una consulta">
                      <Phone className="h-4 w-4" />
                      Contactar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Equipar tu Hogar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sumate a las miles de familias que ya confían en nosotros. 
              Empezá hoy mismo y llevate lo que necesitás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/catalog">
                  Ver Productos
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/contact">
                  Contacto
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
