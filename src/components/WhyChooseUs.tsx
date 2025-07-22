import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.tsx";
import { CreditCard, Truck, ShieldCheck, LifeBuoy } from "lucide-react";

const whyChooseUsData = [
  {
    value: "item-1",
    icon: CreditCard,
    title: "Financiación a tu Medida",
    content: "Ofrecemos múltiples planes de financiación, incluyendo hasta 12 cuotas sin interés, para que puedas llevarte lo que querés hoy y pagarlo cómodamente."
  },
  {
    value: "item-2",
    icon: Truck,
    title: "Entrega Rápida y Segura",
    content: "Coordinamos la entrega a domicilio en Olavarría y la zona para que recibas tus productos en la puerta de tu casa, sin complicaciones."
  },
  {
    value: "item-3",
    icon: ShieldCheck,
    title: "Calidad y Garantía",
    content: "Trabajamos con las mejores marcas y todos nuestros productos cuentan con garantía oficial para tu total tranquilidad y confianza."
  },
  {
    value: "item-4",
    icon: LifeBuoy,
    title: "Atención Personalizada",
    content: "Nuestro equipo está siempre dispuesto a asesorarte y resolver tus dudas, brindándote una atención cercana y profesional en cada paso."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Casa del Credito?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos más que una casa de electrodomésticos. Somos tu socio de confianza para construir el hogar de tus sueños.
            </p>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {whyChooseUsData.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                    <div className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-10">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative animate-scale-in" style={{animationDelay: '0.2s'}}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2070"
              alt="Equipo de Casa del Credito brindando confianza a un cliente."
              className="rounded-2xl shadow-card aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
             <div className="absolute -top-4 -left-4 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;