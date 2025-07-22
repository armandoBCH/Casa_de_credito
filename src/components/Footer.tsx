import * as ReactRouterDom from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button.tsx";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <ReactRouterDom.Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/49914b77-2d53-4907-86de-257a71b67cb3.png" alt="Casa de Crédito" className="h-10 w-10" />
              <span className="font-bold text-xl">Casa de Crédito</span>
            </ReactRouterDom.Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tu socio de confianza para equipar tu hogar. Ofrecemos los mejores productos
              con financiamiento accesible y sin complicaciones.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Catálogo", href: "/catalog" },
                { name: "Promociones", href: "/promotions" },
                { name: "Simulador de Cuotas", href: "/simulator" },
                { name: "Sobre Nosotros", href: "/about" },
                { name: "Contacto", href: "/contact" },
              ].map((link) => (
                <ReactRouterDom.Link
                  key={link.name}
                  to={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </ReactRouterDom.Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Categorías</h3>
            <nav className="space-y-3">
              {[
                "Muebles de Living",
                "Muebles de Dormitorio",
                "Electrodomésticos",
                "Electrónicos",
                "Decoración",
                "Cocina y Comedor",
              ].map((category) => (
                <ReactRouterDom.Link
                  key={category}
                  to={`/catalog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {category}
                </ReactRouterDom.Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    +54 11 1234-5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@casadecredito.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    info@casadecredito.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-primary-foreground/80">
                    Av. Principal 1234<br />
                    Ciudad, Provincia
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-4 border-t border-primary-light/20">
              <p className="font-medium mb-2">Horarios de Atención</p>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <p>Lun - Vie: 9:00 - 19:00</p>
                <p>Sábados: 9:00 - 17:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Casa de Crédito. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <ReactRouterDom.Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Política de Privacidad
              </ReactRouterDom.Link>
              <ReactRouterDom.Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Términos y Condiciones
              </ReactRouterDom.Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
