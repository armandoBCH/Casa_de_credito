import { useState } from "react";
import * as ReactRouterDom from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { Menu, X, Phone, Calculator } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = ReactRouterDom.useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Catálogo", href: "/catalog" },
    { name: "Promociones", href: "/promotions" },
    { name: "Simulador", href: "/simulator" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ReactRouterDom.Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/49914b77-2d53-4907-86de-257a71b67cb3.png" alt="Casa de Crédito" className="h-10 w-10" />
            <span className="font-bold text-xl">Casa de Crédito</span>
          </ReactRouterDom.Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                  <ReactRouterDom.Link
                    to={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(item.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    <span>{item.name}</span>
                  </ReactRouterDom.Link>
              </Button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+541112345678" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Llamanos</span>
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <ReactRouterDom.Link to="/simulator" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Simulador</span>
              </ReactRouterDom.Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-accordion-down">
          <nav className="flex flex-col space-y-2 px-4 py-6">
            {navigation.map((item) => (
              <ReactRouterDom.Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                <span>{item.name}</span>
              </ReactRouterDom.Link>
            ))}
            <div className="pt-4 border-t border-border mt-4 flex flex-col gap-3">
              <Button variant="outline" asChild>
                <a href="tel:+541112345678" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Llamanos</span>
                </a>
              </Button>
              <Button variant="hero" asChild>
                <ReactRouterDom.Link to="/simulator" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Simulador</span>
                </ReactRouterDom.Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;