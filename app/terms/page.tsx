import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Términos y Condiciones
        </h1>
        <div className="prose max-w-none text-muted-foreground leading-loose">
          <p>
            Bienvenido a Casa del Credito. Al acceder y utilizar nuestro sitio
            web, aceptas cumplir y estar sujeto a los siguientes términos y
            condiciones de uso.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Uso del Sitio Web
          </h2>
          <p>
            El contenido de las páginas de este sitio web es para tu
            información y uso general. Está sujeto a cambios sin previo aviso.
            Ni nosotros ni ningún tercero ofrecemos garantía en cuanto a la
            exactitud, puntualidad, rendimiento, integridad o idoneidad de la
            información y los materiales que se encuentran u ofrecen en este
            sitio web para un propósito particular.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Propiedad Intelectual
          </h2>
          <p>
            Este sitio web contiene material que es de nuestra propiedad o que
            nos ha sido licenciado. Este material incluye, pero no se limita a,
            el diseño, la maquetación, el aspecto, la apariencia y los
            gráficos. La reproducción está prohibida salvo de conformidad con el
            aviso de derechos de autor, que forma parte de estos términos y
            condiciones.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Precios y Pagos
          </h2>
          <p>
            Todos los precios están en Pesos Argentinos (ARS) e incluyen IVA. Nos
            reservamos el derecho de cambiar los precios en cualquier momento
            sin previo aviso. El pago se debe realizar en el momento de la
            compra a través de los métodos de pago disponibles en el sitio.
          </p>
          
          <p className="mt-8">
            Fecha de última actualización: 22 de Julio de 2024.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
