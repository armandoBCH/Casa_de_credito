import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Política de Privacidad
        </h1>
        <div className="prose max-w-none text-muted-foreground leading-loose">
          <p>
            En Casa del Credito, valoramos y respetamos tu privacidad. Esta
            Política de Privacidad describe cómo recopilamos, usamos y
            protegemos tu información personal cuando utilizas nuestro sitio web.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Información que Recopilamos
          </h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como tu
            nombre, dirección de correo electrónico, dirección postal y número de
            teléfono cuando te registras, realizas una compra o te comunicas con
            nosotros.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Cómo Usamos tu Información
          </h2>
          <p>
            Utilizamos la información que recopilamos para:
          </p>
          <ul>
            <li>Procesar tus pedidos y gestionar tu cuenta.</li>
            <li>
              Comunicarnos contigo sobre tu pedido, nuestros productos y
              ofertas promocionales.
            </li>
            <li>Mejorar nuestro sitio web y la experiencia del cliente.</li>
            <li>Cumplir con nuestras obligaciones legales y normativas.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Protección de tu Información
          </h2>
          <p>
            Implementamos una variedad de medidas de seguridad para mantener la
            seguridad de tu información personal. Tu información personal está
            contenida detrás de redes seguras y solo es accesible por un número
            limitado de personas que tienen derechos especiales de acceso a
            dichos sistemas y están obligadas a mantener la información
            confidencial.
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
