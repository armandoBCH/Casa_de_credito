"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Star, CheckCircle, Truck, Shield, MessageSquare, Plus, Minus, ShoppingCart, Banknote, Landmark, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

interface ProductDetailClientProps {
    product: Product;
    relatedProducts: Product[];
}

const ProductDetailClient = ({ product, relatedProducts }: ProductDetailClientProps) => {
  const [mainImage, setMainImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    setMainImage(product.image);
    setQuantity(1);
  }, [product]);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} agregado al carrito`, {
        description: `Cantidad: ${quantity}, Total: ${formatPrice(product.price * quantity)}`,
        action: {
            label: "Ver Carrito",
            onClick: () => router.push('/cart'),
        }
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/catalog">Catálogo</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
               <BreadcrumbLink asChild>
                <Link href={`/catalog?category=${product.category}`}>{product.category}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden">
              <Image src={mainImage} alt={product.name} width={800} height={600} className="w-full h-auto object-cover aspect-[4/3]" />
            </Card>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {product.images.map((img, idx) => (
                <Card 
                  key={idx} 
                  className={`overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt={`${product.name} view ${idx+1}`} width={150} height={150} className="w-full h-full object-cover aspect-square"/>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up">
            {product.isPromoted && <Badge className="mb-2">Promoción</Badge>}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} ({product.reviewCount} opiniones)</span>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{product.shortDescription}</p>

            <Card className="bg-muted/50 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice && <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>}
                </div>
                 <div className="space-y-2 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-accent"/>
                        <span><span className="font-semibold">Hasta 12 cuotas sin interés</span> de <span className="font-bold">{formatPrice(product.installmentPrice)}</span> con tarjeta</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Landmark className="h-4 w-4 text-success"/>
                        <span><span className="font-semibold">6% de descuento</span> por transferencia: <span className="font-bold">{formatPrice(product.price * 0.94)}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-success"/>
                        <span><span className="font-semibold">14.5% de descuento</span> en efectivo: <span className="font-bold">{formatPrice(product.price * 0.855)}</span></span>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-input rounded-md">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)}><Minus className="h-4 w-4"/></Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}><Plus className="h-4 w-4"/></Button>
              </div>
              <Button variant="hero" size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" /> Agregar al Carrito
              </Button>
            </div>
            
            <Button variant="secondary" size="lg" className="w-full" asChild>
                <a href={`https://wa.me/5492284598212?text=Hola! Me interesa el producto: ${product.name}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5"/> Consultar por WhatsApp
                </a>
            </Button>
            
            <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-success"/><span>Stock disponible</span></div>
                <div className="flex items-center gap-3"><Truck className="h-5 w-5 text-primary"/><span>Entrega a Domicilio en Olavarría y zona</span></div>
                <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-accent"/><span>{product.specs['Garantía'] || '12 meses'} de garantía</span></div>
            </div>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <Tabs defaultValue="description" className="w-full mb-16">
          <TabsList>
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specs">Especificaciones</TabsTrigger>
            <TabsTrigger value="reviews">Opiniones ({product.reviewCount})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="prose max-w-none text-muted-foreground pt-4 leading-loose">
            <p>{product.longDescription}</p>
          </TabsContent>
          <TabsContent value="specs" className="pt-4">
            <Card>
              <Table>
                <TableBody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-semibold text-foreground w-1/3">{key}</TableCell>
                      <TableCell className="text-muted-foreground">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <p className="text-muted-foreground">Sección de opiniones de clientes próximamente.</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
           <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            También te podría interesar
          </h2>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {relatedProducts.map(p => (
                <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group bg-card border-border hover:shadow-card transition-all duration-300">
                       <Link href={`/product/${p.id}`} className="block">
                         <div className="overflow-hidden rounded-t-lg">
                           <Image src={p.image} alt={p.name} width={400} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                         </div>
                        <CardContent className="p-4">
                           <h3 className="font-semibold text-md mb-2 line-clamp-2">{p.name}</h3>
                           <p className="text-lg font-bold text-primary">{formatPrice(p.price)}</p>
                        </CardContent>
                      </Link>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailClient;
