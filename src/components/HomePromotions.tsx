import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { Button } from "./ui/button.tsx";
import { ArrowRight } from "lucide-react";

const promotionsData = [
  {
    title: "Hasta 50% OFF",
    description: "En productos seleccionados por Black Friday.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    link: "/promotions"
  },
  {
    title: "12 Cuotas Sin Interés",
    description: "En toda la tienda con tarjetas de crédito.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    link: "/promotions"
  },
  {
    title: "Combos Exclusivos",
    description: "Equipá tu living o cocina y ahorrá.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    link: "/promotions"
  },
];

const HomePromotions = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
           <Badge className="mb-4 bg-primary/10 text-primary font-semibold border-primary/20">Ofertas Especiales</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aprovechá Nuestras Promociones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenemos descuentos y financiación imperdibles para que te lleves todo lo que querés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotionsData.map((promo, index) => (
            <Link to={promo.link} key={index} className="group block animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="relative h-56">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{promo.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{promo.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/promotions">
              Ver Todas las Promociones
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePromotions;
