import { Card, CardContent } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { Button } from "./ui/button.tsx";
import { 
  Shield, 
  Clock, 
  Truck, 
  CreditCard, 
  Star, 
  CheckCircle,
  ArrowRight,
  Quote
} from "lucide-react";
import * as ReactRouterDom from "react-router-dom";

const benefits = [
  {
    icon: Clock,
    title: "Aprobación en 24hs",
    description: "Proceso rápido y sin complicaciones. Tu respuesta en menos de un día.",
    color: "text-accent"
  },
  {
    icon: CreditCard,
    title: "Sin Interés hasta 12 cuotas",
    description: "Llevate lo que necesitás y pagalo cómodamente sin interés.",
    color: "text-success"
  },
  {
    icon: Truck,
    title: "Entrega Gratuita",
    description: "Llevamos tu compra hasta tu hogar sin costo adicional en CABA y GBA.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "Protección adicional para tu tranquilidad y la de tu familia.",
    color: "text-warning"
  }
];

const testimonials = [
  {
    name: "María García",
    text: "Excelente atención y muy buenos precios. Pude equipar mi cocina completa en 12 cuotas sin interés.",
    rating: 5,
    location: "Villa Urquiza, CABA"
  },
  {
    name: "Carlos Rodríguez",
    text: "Rápidos y confiables. Me aprobaron el crédito en el mismo día y la entrega fue puntual.",
    rating: 5,
    location: "San Isidro, GBA"
  },
  {
    name: "Ana Martínez",
    text: "Los recomiendo 100%. Precios justos y financiación accesible para toda la familia.",
    rating: 5,
    location: "Palermo, CABA"
  }
];

const categories = [
  {
    name: "Muebles de Living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 120,
    href: "/catalog?category=living"
  },
  {
    name: "Electrodomésticos",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 85,
    href: "/catalog?category=electrodomesticos"
  },
  {
    name: "Tecnología",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 95,
    href: "/catalog?category=tecnologia"
  },
  {
    name: "Dormitorio",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: 75,
    href: "/catalog?category=dormitorio"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir Casa de Crédito?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 10 años de experiencia nos respaldan como líderes en financiamiento de muebles y electrodomésticos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="text-center bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explorá Nuestras Categorías
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontrá exactamente lo que necesitás para tu hogar en nuestras categorías especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ReactRouterDom.Link
              key={category.name}
              to={category.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.productCount} productos</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-sm">
                      Ver Todo
                    </Badge>
                  </div>
                </div>
              </Card>
            </ReactRouterDom.Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <ReactRouterDom.Link to="/catalog">
              Ver Catálogo Completo
              <ArrowRight className="h-5 w-5" />
            </ReactRouterDom.Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de familias ya confían en nosotros para equipar sus hogares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card border-border hover:shadow-card transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CheckCircle className="h-5 w-5 text-success" />
            <span>+5,000 familias satisfechas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Empezá a Equipar tu Hogar Hoy Mismo
        </h2>
        <p className="text-xl mb-8 opacity-90 animate-slide-up">
          No esperes más. Conseguí aprobación en 24hs y llevate lo que necesitás 
          con las mejores condiciones del mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="secondary" size="lg" asChild>
            <ReactRouterDom.Link to="/catalog">
              Ver Productos
            </ReactRouterDom.Link>
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
            <a href="https://wa.me/1234567890?text=Hola! Quiero consultar sobre financiamiento">
              Contactar Ahora
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>10 años de experiencia</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>+5,000 clientes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>98% aprobación</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Benefits, Categories, Testimonials, CTA };
