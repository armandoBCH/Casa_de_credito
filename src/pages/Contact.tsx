import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input.tsx";
import { Textarea } from "../components/ui/textarea.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form.tsx";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, ingresá un email válido."),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
}).refine(data => !!data.subject, {
  message: "Por favor, seleccioná un asunto.",
  path: ["subject"],
});


type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: undefined,
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
    toast.success("¡Mensaje enviado!", {
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactanos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tenés alguna pregunta o necesitás ayuda? Estamos acá para asistirte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Oficina</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-muted-foreground">España 3024, B7400 Olavarría, Provincia de Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Teléfono y WhatsApp</h3>
                    <a href="tel:+5492284387540" className="block text-muted-foreground hover:text-primary transition-colors">+54 9 2284 387540</a>
                    <a href="https://wa.me/5492284598212" className="block text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">+54 9 2284 598212 (WhatsApp)</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:compras@casadelcredito.com.ar" className="text-muted-foreground hover:text-primary transition-colors">compras@casadelcredito.com.ar</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Horarios</h3>
                    <p className="text-muted-foreground">Lun - Vie: 9:00 - 19:00</p>
                    <p className="text-muted-foreground">Sáb: 9:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.580123545025!2d-60.33449692415176!3d-36.80413097227448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9594279b1a5e1e3b%3A0x8c7db7658793b58c!2sEspa%C3%B1a%203024%2C%20B7400%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1716313000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Casa del Credito"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card>
              <CardHeader>
                <CardTitle>Envianos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Ej: juan.perez@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 2284 123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asunto</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ''}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccioná un motivo de contacto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Consulta sobre producto">Consulta sobre producto</SelectItem>
                              <SelectItem value="Estado de mi compra">Estado de mi compra</SelectItem>
                              <SelectItem value="Servicio técnico">Servicio técnico</SelectItem>
                              <SelectItem value="Otra consulta">Otra consulta</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Escribí tu consulta acá..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;