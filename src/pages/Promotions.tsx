import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Badge } from "../components/ui/badge.tsx";
import { Button } from "../components/ui/button.tsx";
import { Calendar, Clock, Gift, Percent, Star, Tag } from "lucide-react";
import * as ReactRouterDom from "react-router-dom";

const promotions = [
  {
    id: 1,
    title: "Black Friday - Hasta 50% OFF",
    description: "Los mejores descuentos del año en toda la tienda. Muebles, electrodomésticos y más.",
    discount: 50,
    validUntil: "2024-11-30",
    isHot: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    terms: "Válido hasta agotar stock. No acumulable con otras promociones."
  },
  {
    id: 2,
    title: "Sin Interés en 12 Cuotas",
    description: "Llevate cualquier producto del catálogo y pagalo en 12 cuotas sin interés.",
    discount: 0,
    validUntil: "2024-12-31",
    isHot: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    terms: "Aplicable a productos seleccionados. Evaluación crediticia."
  },
  {
    id: 3,
    title: "Combo Living Completo",
    description: "Sillón 3 cuerpos + mesa de centro + rack TV + decoración incluida.",
    discount: 30,
    validUntil: "2024-12-15",
    isHot: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2458&q=80",
    terms: "Combo armado fijo. Entrega e instalación incluida."
  },
  {
    id: 4,
    title: "Electrodomésticos Premium",
    description: "Heladera + Lavarropas + Microondas con garantía extendida gratis.",
    discount: 25,
    validUntil: "2024-11-25",
    isHot: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    terms: "Instalación técnica incluida. Garantía extendida por 2 años."
  },
  {
    id: 5,
    title: "Cyber Monday Tecnología",
    description: "Smart TVs, notebooks y tablets con descuentos increíbles.",
    discount: 40,
    validUntil: "2024-11-27",
    isHot: true,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2533&q=80",
    terms: "Solo por 3 días. Stock limitado."
  },
  {
    id: 6,
    title: "Referí un Amigo",
    description: "Por cada amigo que compre, ambos obtienen $10.000 de descuento.",
    discount: 0,
    validUntil: "2024-12-31",
    isHot: false,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    terms: "Válido para compras superiores a $50.000. Un descuento por persona."
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const PromotionCard = ({ promotion }: { promotion: typeof promotions[0] }) => {
  const isExpiringSoon = new Date(promotion.validUntil) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  return (
    <Card className="group bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative">
        {/* Promotion Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={promotion.image}
            alt={promotion.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {promotion.isHot && (
            <Badge className="bg-destructive text-destructive-foreground font-semibold animate-pulse">
              <Star className="h-3 w-3 mr-1 fill-current" />
              HOT
            </Badge>
          )}
          {promotion.discount > 0 && (
            <Badge className="bg-primary text-primary-foreground font-semibold">
              <Percent className="h-3 w-3 mr-1" />
              -{promotion.discount}%
            </Badge>
          )}
          {isExpiringSoon && (
            <Badge variant="destructive" className="font-semibold">
              <Clock className="h-3 w-3 mr-1" />
              Por vencer
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
          {promotion.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {promotion.description}
        </p>

        {/* Validity */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Válido hasta: {formatDate(promotion.validUntil)}</span>
        </div>

        {/* Terms */}
        <div className="bg-muted/50 p-3 rounded-lg mb-4">
          <p className="text-xs text-muted-foreground">
            <strong>Términos:</strong> {promotion.terms}
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Button variant="hero" size="sm" className="flex-1" asChild>
            <ReactRouterDom.Link to="/catalog">
              <Gift className="h-4 w-4" />
              Ver Productos
            </ReactRouterDom.Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://wa.me/1234567890?text=Hola! Me interesa la promoción: {promotion.title}">
              Consultar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Promotions = () => {
  const hotPromotions = promotions.filter(p => p.isHot);
  const regularPromotions = promotions.filter(p => !p.isHot);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Tag className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Promociones Especiales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprovechá nuestras mejores ofertas y llevate los productos que necesitás con descuentos increíbles
          </p>
        </div>

        {/* Hot Promotions Section */}
        {hotPromotions.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-destructive fill-current" />
              <h2 className="text-2xl font-bold text-foreground">Ofertas Destacadas</h2>
              <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                Tiempo Limitado
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotPromotions.map((promotion, index) => (
                <div
                  key={promotion.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PromotionCard promotion={promotion} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regular Promotions Section */}
        {regularPromotions.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Gift className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Todas las Promociones</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPromotions.map((promotion, index) => (
                <div
                  key={promotion.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + hotPromotions.length) * 0.1}s` }}
                >
                  <PromotionCard promotion={promotion} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-primary p-12 rounded-2xl text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No encontraste lo que buscás?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contactanos y te ayudamos a encontrar la mejor oferta para vos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <ReactRouterDom.Link to="/catalog">
                Ver Catálogo Completo
              </ReactRouterDom.Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://wa.me/1234567890?text=Hola! Quiero consultar sobre las promociones">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Promotions;
