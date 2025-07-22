import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { Button } from "./ui/button.tsx";
import { ArrowRight, Star, Tag } from "lucide-react";

const promotionsData = [
  {
    id: 1,
    title: "Black Friday - Hasta 50% OFF",
    description: "Los mejores descuentos del año en toda la tienda.",
    isHot: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Combo Living Completo",
    description: "Sillón 3 cuerpos + mesa de centro + rack TV y más.",
    isHot: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Descuento por Transferencia",
    description: "Pagá por transferencia y obtené un 6% de descuento.",
    isHot: true,
    image: "https://images.unsplash.com/photo-1560520655-54316a4a1545?auto=format&fit=crop&w=800&q=80",
  },
];

const PromotionsHighlight = () => {
  const hotPromotions = promotionsData.filter(p => p.isHot).slice(0, 3);
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Tag className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Promociones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No te pierdas nuestras ofertas exclusivas por tiempo limitado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotPromotions.map((promo, index) => (
            <Link to="/promotions" key={promo.id} className="group block animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground font-semibold">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    OFERTA HOT
                  </Badge>
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

export default PromotionsHighlight;