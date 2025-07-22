import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge.tsx";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { useCart } from "../context/CartContext.tsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Catálogo", href: "/catalog" },
    { name: "Promociones", href: "/promotions" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://res.cloudinary.com/dbq5jp6jn/image/upload/v1753127509/Captura_de_pantalla_2025-07-21_164537_qjn0wq.png" alt="Casa de Crédito" className="h-10 w-10" />
            <span className="font-bold text-xl text-primary">Casa de Crédito</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <Button variant="ghost" asChild>
              <a href="https://wa.me/5492284598212" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center rounded-full p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
                 <span className="sr-only">Ver carrito</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 space-y-2 border-t border-border">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://wa.me/5492284598212" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="accent" size="sm" className="w-full" asChild>
                  <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                     <ShoppingCart className="h-4 w-4" />
                    Ver Carrito ({totalItems})
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;