import Link from "next/link";
import { Button } from "./ui/button";
import { Calculator, ArrowRight } from "lucide-react";

const SimulatorCTA = () => {
  return (
    <section className="py-20 bg-gradient-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calculator className="h-12 w-12 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Calculá tus Cuotas al Instante
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Usá nuestro simulador de créditos para saber cómo podés financiar tu próxima compra. Es fácil, rápido y transparente.
        </p>
        <Button variant="secondary" size="lg" className="bg-background/20 text-white hover:bg-background/30" asChild>
          <Link href="/simulator">
            Probar el Simulador
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default SimulatorCTA;
