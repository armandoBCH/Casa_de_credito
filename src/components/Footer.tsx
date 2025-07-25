import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="https://res.cloudinary.com/dbq5jp6jn/image/upload/v1753127509/Captura_de_pantalla_2025-07-21_164537_qjn0wq.png" alt="Casa del Credito" width={40} height={40} />
              <span className="font-bold text-xl">Casa del Credito</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tu socio de confianza para equipar tu hogar. Ofrecemos los mejores productos
              con financiamiento accesible y sin complicaciones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Catálogo", href: "/catalog" },
                { name: "Promociones", href: "/promotions" },
                { name: "Sobre Nosotros", href: "/about" },
                { name: "Contacto", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="font-semibold text-lg">Categorías</h3>
            <nav className="space-y-3">
              {[
                "Muebles",
                "Electrónicos",
                "Electrodomésticos",
                "Living",
                "Dormitorio",
                "Cocina",
              ].map((category) => (
                <Link
                  key={category}
                  href={`/catalog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-3">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfono / WhatsApp</p>
                   <a href="https://wa.me/5492284598212" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                    +54 9 2284 598212
                  </a>
                  <a href="tel:+5492284387540" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    +54 9 2284 387540
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:compras@casadelcredito.com.ar" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    compras@casadelcredito.com.ar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-primary-foreground/80">
                    España 3024, B7400<br />
                    Olavarría, Provincia de Buenos Aires
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hours and Social */}
          <div className="space-y-6 lg:col-span-2">
            <div>
                <h3 className="font-semibold text-lg mb-3">Horarios</h3>
                <div className="space-y-2 text-primary-foreground/80">
                    <p>Lun - Vie: 9:00 - 19:00</p>
                    <p>Sábados: 9:00 - 17:00</p>
                    <p>Domingos: Cerrado</p>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-3">Redes</h3>
                <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light" asChild>
                      <a href="https://www.instagram.com/casadelcredito/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Casa del Credito. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;