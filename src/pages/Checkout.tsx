import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form.tsx";
import { useCart } from "../context/CartContext.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Separator } from "../components/ui/separator.tsx";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
};

const checkoutSchema = z.object({
  // Shipping
  name: z.string().min(2, "Nombre requerido"),
  address: z.string().min(5, "Dirección requerida"),
  city: z.string().min(2, "Ciudad requerida"),
  zip: z.string().min(4, "Código postal requerido"),
  // Payment
  cardName: z.string().min(2, "Nombre del titular requerido"),
  cardNumber: z.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, "Número de tarjeta inválido"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Fecha de expiración inválida (MM/AA)"),
  cvc: z.string().min(3).max(4, "CVC inválido"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/catalog");
      toast.info("Tu carrito está vacío. ¡Llenalo con nuestros productos!");
    }
  }, [cartItems, navigate]);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout form submitted:", data);
    toast.success("¡Compra realizada con éxito!", {
      description: "Gracias por tu compra. Te hemos enviado un email con los detalles.",
    });
    clearCart();
    navigate("/");
  };
  
  if (cartItems.length === 0) {
    return null; // Redirecting...
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Finalizar Compra</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader><CardTitle>Información de Envío</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Nombre y Apellido</FormLabel><FormControl><Input placeholder="Juan Pérez" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem><FormLabel>Dirección de Envío</FormLabel><FormControl><Input placeholder="Av. Corrientes 1234, Piso 5, Depto A" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem><FormLabel>Ciudad</FormLabel><FormControl><Input placeholder="CABA" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="zip" render={({ field }) => (
                        <FormItem><FormLabel>Código Postal</FormLabel><FormControl><Input placeholder="C1043AAL" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Detalles de Pago</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <FormField control={form.control} name="cardName" render={({ field }) => (
                        <FormItem><FormLabel>Nombre en la Tarjeta</FormLabel><FormControl><Input placeholder="Juan M. Pérez" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="cardNumber" render={({ field }) => (
                        <FormItem><FormLabel>Número de Tarjeta</FormLabel><FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="expiryDate" render={({ field }) => (
                            <FormItem><FormLabel>Vencimiento (MM/AA)</FormLabel><FormControl><Input placeholder="12/28" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="cvc" render={({ field }) => (
                            <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                    </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader><CardTitle>Resumen del Pedido</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.product.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                            <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded"/>
                            <div>
                                <p className="font-medium text-foreground">{item.product.name}</p>
                                <p className="text-muted-foreground">Cant: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                  <Separator/>
                  <div className="flex justify-between"><p>Subtotal</p><p>{formatPrice(totalPrice)}</p></div>
                  <div className="flex justify-between"><p>Envío</p><p className="text-success">Gratis</p></div>
                  <Separator/>
                  <div className="flex justify-between text-lg font-bold"><p>Total a Pagar</p><p>{formatPrice(totalPrice)}</p></div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Pagar {formatPrice(totalPrice)}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </form>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
