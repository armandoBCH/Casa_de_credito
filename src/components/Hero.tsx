import { Button } from "./ui/button.tsx";
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  Shield,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

// Using a premium, bright, and modern interior image.
const heroImage =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2127";

const Hero = () => {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center min-h-[calc(100vh-64px)] py-16 md:py-20">
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tighter animate-fade-in">
              Transformá tu Hogar,
              <span className="block text-primary drop-shadow-[0_2px_4px_hsl(var(--primary-glow))]">
                Financiá tus Sueños.
              </span>
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Descubrí muebles y electrodomésticos de diseño con la financiación
              más accesible y transparente del mercado. Calidad y confianza para
              tu casa.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/catalog">
                  Explorar Catálogo
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/simulator">
                  <Calculator />
                  Simular Crédito
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-4 text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Hasta 12 Cuotas Sin Interés</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span>Entrega Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Garantía de Calidad</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="lg:col-span-6 mt-12 lg:mt-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Moderno y elegante living amueblado"
                className="rounded-3xl shadow-card aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;