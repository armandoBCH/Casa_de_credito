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
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Separator } from "../components/ui/separator.tsx";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group.tsx";
import { Banknote, CreditCard, Landmark } from "lucide-react";
import { Label } from "../components/ui/label.tsx";
import { Badge } from "../components/ui/badge.tsx";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
};

const checkoutSchema = z.object({
  // Shipping
  name: z.string().min(2, "Nombre requerido"),
  address: z.string().min(5, "Dirección requerida"),
  city: z.string().min(2, "Ciudad requerida"),
  zip: z.string().min(4, "Código postal requerido"),
  
  paymentMethod: z.enum(['card', 'transfer', 'cash']),

  // Payment - conditional
  cardName: z.string().optional(),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvc: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.paymentMethod === 'card') {
        if (!data.cardName || data.cardName.length < 2) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Nombre del titular requerido", path: ['cardName'] });
        }
        if (!data.cardNumber || !/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/.test(data.cardNumber.replace(/\s/g, ''))) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Número de tarjeta inválido", path: ['cardNumber'] });
        }
        if (!data.expiryDate || !/^(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})$/.test(data.expiryDate)) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Fecha de expiración inválida (MM/AA)", path: ['expiryDate'] });
        }
        if (!data.cvc || !/^[0-9]{3,4}$/.test(data.cvc)) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "CVC inválido", path: ['cvc'] });
        }
    }
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/catalog");
      toast.info("Tu carrito está vacío. ¡Llenalo con nuestros productos!");
    }
  }, [cartItems, navigate]);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
        paymentMethod: 'card'
    }
  });

  const finalPrice = useMemo(() => {
    switch (paymentMethod) {
      case "transfer":
        return totalPrice * (1 - 0.06); // 6% discount
      case "cash":
        return totalPrice * (1 - 0.145); // 14.5% discount
      case "card":
      default:
        return totalPrice;
    }
  }, [totalPrice, paymentMethod]);

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout form submitted:", {...data, finalPrice});
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
                        <FormItem><FormLabel>Ciudad</FormLabel><FormControl><Input placeholder="Olavarría" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="zip" render={({ field }) => (
                        <FormItem><FormLabel>Código Postal</FormLabel><FormControl><Input placeholder="B7400" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Método de Pago</CardTitle></CardHeader>
                <CardContent>
                    <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={(value) => {
                                        field.onChange(value);
                                        setPaymentMethod(value);
                                    }}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 gap-4"
                                    >
                                        <Label className={`flex flex-col items-start p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary ring-2 ring-primary' : 'border-border'}`}>
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="card" id="card" />
                                                    <CreditCard className="h-5 w-5"/>
                                                    <span className="font-semibold">Tarjeta de Crédito/Débito</span>
                                                </div>
                                                <img src="https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/5.24.0/mercadopago/logo__small.png" alt="Mercado Pago" className="h-6"/>
                                            </div>
                                            <p className="text-sm text-muted-foreground ml-8 mt-1">Hasta 6 cuotas sin interés.</p>
                                        </Label>
                                        <Label className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'transfer' ? 'border-primary ring-2 ring-primary' : 'border-border'}`}>
                                             <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="transfer" id="transfer" />
                                                    <Landmark className="h-5 w-5"/>
                                                    <span className="font-semibold">Transferencia Bancaria</span>
                                                </div>
                                                <Badge variant="success">6% OFF</Badge>
                                            </div>
                                        </Label>
                                        <Label className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'cash' ? 'border-primary ring-2 ring-primary' : 'border-border'}`}>
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="cash" id="cash" />
                                                    <Banknote className="h-5 w-5"/>
                                                    <span className="font-semibold">Efectivo</span>
                                                </div>
                                                <Badge variant="success">14.5% OFF</Badge>
                                            </div>
                                        </Label>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {paymentMethod === 'card' && (
                        <div className="space-y-4 mt-6 animate-fade-in">
                            <Separator/>
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
                        </div>
                    )}
                     {paymentMethod === 'transfer' && (
                        <div className="mt-6 bg-muted/50 p-4 rounded-lg animate-fade-in">
                            <h4 className="font-semibold mb-2">Instrucciones para Transferencia</h4>
                            <p className="text-sm text-muted-foreground">Realizá la transferencia al CBU/Alias y envianos el comprobante por WhatsApp para confirmar tu pedido.</p>
                            <div className="mt-2 text-sm">
                                <p><strong>CBU:</strong> 0001112223334445556667</p>
                                <p><strong>Alias:</strong> CASA.CREDITO.OLAV</p>
                            </div>
                        </div>
                    )}
                    {paymentMethod === 'cash' && (
                         <div className="mt-6 bg-muted/50 p-4 rounded-lg animate-fade-in">
                            <h4 className="font-semibold mb-2">Instrucciones para Pago en Efectivo</h4>
                            <p className="text-sm text-muted-foreground">Acercate a nuestro local en España 3024, Olavarría, para realizar el pago y retirar tu pedido.</p>
                        </div>
                    )}
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
                                <p className="font-medium text-foreground line-clamp-1">{item.product.name}</p>
                                <p className="text-muted-foreground">Cant: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                  <Separator/>
                  <div className="flex justify-between"><p>Subtotal</p><p>{formatPrice(totalPrice)}</p></div>
                   {paymentMethod !== 'card' && (
                    <div className="flex justify-between text-success font-semibold">
                      <p>Descuento ({paymentMethod === 'transfer' ? '6%' : '14.5%'})</p>
                      <p>-{formatPrice(totalPrice - finalPrice)}</p>
                    </div>
                  )}
                  <div className="flex justify-between"><p>Envío</p><p className="text-success font-semibold">Gratis</p></div>
                  <Separator/>
                  <div className="flex justify-between text-lg font-bold"><p>Total a Pagar</p><p>{formatPrice(finalPrice)}</p></div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Pagar {formatPrice(finalPrice)}
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