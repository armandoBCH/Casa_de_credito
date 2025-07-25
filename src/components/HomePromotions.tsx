import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const promotionsData = [
  {
    title: "Hasta 50% OFF",
    description: "En productos seleccionados por Black Friday.",
    image: "https://images.unsplash.com/photo-1511556532299-8abe647faf39?q=80&w=1974&auto=format&fit=crop",
    link: "/promotions"
  },
  {
    title: "12 Cuotas Sin Interés",
    description: "En toda la tienda con tarjetas de crédito.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    link: "/promotions"
  },
  {
    title: "Combos Exclusivos",
    description: "Equipá tu living o cocina y ahorrá.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006a9a5a?q=80&w=2070&auto=format&fit=crop",
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
            <Link href={promo.link} key={index} className="group block animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="relative h-56">
                  <Image src={promo.image} alt={promo.title} width={800} height={600} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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
            <Link href="/promotions">
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