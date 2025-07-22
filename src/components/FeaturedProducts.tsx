import { Button } from "./ui/button.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { products, Product } from "../data/products.ts";
import { useCart } from "../context/CartContext.tsx";
import { toast } from "sonner";

const featuredProducts = products.filter(p => p.isPromoted).slice(0, 3);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} agregado al carrito!`);
  };

  return (
    <Card className="group bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isPromoted && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              Promoción
            </Badge>
          )}
          {product.discount > 0 && (
            <Badge variant="destructive" className="font-semibold">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white" asChild>
             <Link to={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
             </Link>
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4 flex flex-col h-[280px]">
        {/* Category */}
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-grow">
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>

        {/* Pricing */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.discount > 0 && product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="text-accent font-semibold">
            {product.installments} cuotas de {formatPrice(product.installmentPrice)}
          </div>
          <p className="text-xs text-muted-foreground">Sin interés</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Button variant="default" size="sm" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Productos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí nuestra selección de productos más vendidos con las mejores condiciones de financiamiento
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/catalog">
              Ver Todo el Catálogo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;