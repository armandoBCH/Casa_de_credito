import { Button } from "./ui/button.tsx";
import { ArrowRight, Calculator, Star } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/assets/hero-furniture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary/95 to-primary-light/90 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Muebles y electrodomésticos de calidad"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-accent-light">
              <Star className="h-4 w-4 fill-current" />
              <span>Casa de Crédito Confiable</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Muebles y Electrodomésticos
            <span className="block text-accent">Sin Interés*</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Equipá tu hogar con los mejores productos y págalos en cómodas cuotas.
            Aprobación inmediata y entrega rápida en toda la ciudad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button variant="accent" size="lg" asChild>
              <Link to="/catalog">
                Ver Catálogo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/simulator">
                <Calculator className="h-5 w-5" />
                Simular Cuotas
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/80 text-sm animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Aprobación en 24hs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Sin gastos administrativos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Entrega gratuita</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
