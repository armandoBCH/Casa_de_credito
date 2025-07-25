import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Quote,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "María García",
    text: "Excelente atención y muy buenos precios. Pude equipar mi cocina completa en 12 cuotas sin interés. Los recomiendo 100%, súper confiables.",
    rating: 5,
    location: "Olavarría"
  },
  {
    name: "Carlos Rodríguez",
    text: "Rápidos y confiables. Compré online y la entrega fue puntual y coordinada. ¡Muy recomendables!",
    rating: 5,
    location: "Sierras Bayas"
  },
  {
    name: "Ana Martínez",
    text: "Los recomiendo. Precios justos y financiación accesible.",
    rating: 5,
    location: "Olavarría"
  }
];

const categories = [
  {
    name: "Muebles de Living",
    image: "https://placehold.co/800x800/A8A29E/FFFFFF?text=Living",
    productCount: 120,
    href: "/catalog?category=living"
  },
  {
    name: "Electrodomésticos",
    image: "https://placehold.co/800x800/D6DBDF/34495E?text=Electro",
    productCount: 85,
    href: "/catalog?category=electrodomesticos"
  },
  {
    name: "Tecnología",
    image: "https://placehold.co/800x800/5D6D7E/FFFFFF?text=Tecnologia",
    productCount: 95,
    href: "/catalog?category=tecnologia"
  },
  {
    name: "Dormitorio",
    image: "https://placehold.co/800x800/85929E/FFFFFF?text=Dormitorio",
    productCount: 75,
    href: "/catalog?category=dormitorio"
  }
];

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
            <Link
              key={category.name}
              href={category.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.productCount} productos</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const featuredTestimonial = testimonials[0];
  const otherTestimonials = testimonials.slice(1, 3);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de miles de familias es nuestro mayor orgullo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Featured Testimonial */}
          <div className="animate-slide-up">
            <Card className="bg-card border-border shadow-card h-full flex flex-col">
              <CardContent className="p-8 flex-grow flex flex-col">
                <Quote className="h-10 w-10 text-primary/30 mb-6" />
                <p className="text-xl text-foreground mb-8 leading-relaxed italic flex-grow">
                  "{featuredTestimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="border-t border-border pt-4 flex-grow">
                    <p className="font-semibold text-lg text-primary">{featuredTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{featuredTestimonial.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Other Testimonials */}
          <div className="space-y-8">
            {otherTestimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 0.15}s` }}>
                <Card className="bg-card border-border hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                       <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-accent fill-current" />
                            ))}
                        </div>
                        <p className="font-semibold text-right text-foreground">- {testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/e97451/ffffff?text=Fondo+Abstracto')] opacity-10 bg-cover bg-center"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Empezá a Equipar tu Hogar Hoy Mismo
        </h2>
        <p className="text-xl mb-8 opacity-90 animate-slide-up">
          No esperes más. Conseguí lo que necesitás con las mejores condiciones del mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/catalog">
              Ver Productos
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
            <Link href="/contact">
              Contactar Ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Categories, Testimonials, CTA };