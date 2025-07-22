import { useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Badge } from "../components/ui/badge.tsx";
import { Input } from "../components/ui/input.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select.tsx";
import { Search, Filter, ShoppingCart, Eye, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
const sofaImage = "/assets/product-sofa.jpg";
const tvImage = "/assets/product-tv.jpg";
const appliancesImage = "/assets/product-appliances.jpg";

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Juego de Living Moderno 3+2+1",
    category: "Muebles",
    price: 89999,
    installmentPrice: 7499,
    installments: 12,
    image: sofaImage,
    discount: 20,
    isPromoted: true,
  },
  {
    id: 2,
    name: "Smart TV 55'' 4K Ultra HD Samsung",
    category: "Electrónicos",
    price: 129999,
    installmentPrice: 10833,
    installments: 12,
    image: tvImage,
    discount: 15,
    isPromoted: false,
  },
  {
    id: 3,
    name: "Combo Cocina Completa Acero Inoxidable",
    category: "Electrodomésticos",
    price: 199999,
    installmentPrice: 16666,
    installments: 12,
    image: appliancesImage,
    discount: 25,
    isPromoted: true,
  },
  {
    id: 4,
    name: "Comedor 6 Sillas Moderno",
    category: "Muebles",
    price: 65999,
    installmentPrice: 5499,
    installments: 12,
    image: sofaImage,
    discount: 10,
    isPromoted: false,
  },
  {
    id: 5,
    name: "Notebook Gamer 15.6'' RTX",
    category: "Electrónicos",
    price: 299999,
    installmentPrice: 24999,
    installments: 12,
    image: tvImage,
    discount: 0,
    isPromoted: true,
  },
  {
    id: 6,
    name: "Heladera No Frost 364L",
    category: "Electrodomésticos",
    price: 189999,
    installmentPrice: 15833,
    installments: 12,
    image: appliancesImage,
    discount: 18,
    isPromoted: false,
  },
];

const categories = ["Todos", "Muebles", "Electrónicos", "Electrodomésticos"];
const sortOptions = [
  { value: "price-asc", label: "Precio: Menor a Mayor" },
  { value: "price-desc", label: "Precio: Mayor a Menor" },
  { value: "name", label: "Nombre A-Z" },
  { value: "discount", label: "Mayor Descuento" },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  return (
    <Card className="group bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isPromoted && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              Promoción
            </Badge>
          )}
          {product.discount > 0 && (
            <Badge variant="destructive" className="font-semibold">
              -{product.discount}%
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white" asChild>
            <Link to={`/product/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white" asChild>
            <Link to="/simulator">
              <Calculator className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.price / (1 - product.discount / 100))}
              </span>
            )}
          </div>
          <div className="text-accent font-semibold">
            {product.installments} cuotas de {formatPrice(product.installmentPrice)}
          </div>
          <p className="text-xs text-muted-foreground">Sin interés</p>
        </div>

        <Button variant="default" size="sm" className="w-full" asChild>
          <Link to={`/product/${product.id}`}>
            <ShoppingCart className="h-4 w-4" />
            Ver Producto
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("name");

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "discount":
          return b.discount - a.discount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-muted-foreground">
            Encontrá todo lo que necesitás para tu hogar con las mejores condiciones de financiamiento
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
            <p className="text-muted-foreground mb-6">
              Probá con otros términos de búsqueda o cambiá los filtros
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
                setSortBy("name");
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
