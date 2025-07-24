"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  const handleRemove = (productId: number, productName: string) => {
    removeFromCart(productId);
    toast.error(`${productName} eliminado del carrito.`);
  };
  
  const handleCheckout = () => {
      router.push('/checkout');
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Tu Carrito de Compras
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-border rounded-lg">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">
              Parece que todavía no has agregado ningún producto.
            </p>
            <Button asChild>
              <Link href="/catalog">Explorar Catálogo</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(({ product, quantity }) => (
                <Card key={product.id} className="flex items-center p-4">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                  <div className="flex-grow">
                    <Link href={`/product/${product.id}`} className="font-semibold text-lg hover:text-primary transition-colors">{product.name}</Link>
                    <p className="text-muted-foreground text-sm">{product.category}</p>
                    <p className="text-primary font-bold mt-1">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center border border-input rounded-md">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity - 1)}>
                          <Minus className="h-4 w-4"/>
                      </Button>
                      <span className="w-8 text-center font-semibold text-sm">{quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity + 1)}>
                          <Plus className="h-4 w-4"/>
                      </Button>
                    </div>
                    <p className="w-24 text-right font-semibold text-lg">{formatPrice(product.price * quantity)}</p>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => handleRemove(product.id, product.name)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Resumen de Compra</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="font-semibold text-success">Gratis</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <Button variant="hero" size="lg" className="w-full" onClick={handleCheckout}>
                      Continuar Compra <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
