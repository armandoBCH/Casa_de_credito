import { Button } from "./ui/button.tsx";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card.tsx";

const banners = [
  {
    title: "Renová tu Living",
    description: "Encontrá sofás, mesas y racks con diseños únicos.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2127",
    link: "/catalog?category=living",
    cta: "Ver Muebles"
  },
  {
    title: "Tecnología para tu Hogar",
    description: "Lo último en Smart TVs, audio y notebooks.",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=1925",
    link: "/catalog?category=electronicos",
    cta: "Descubrir Tech"
  }
];

const PromotionalBanners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.map((banner, index) => (
            <Link to={banner.link} key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="relative overflow-hidden rounded-2xl h-80 flex items-end p-8 text-white hover:shadow-primary transition-all duration-300">
                <div className="absolute inset-0">
                  <img src={banner.image} alt={banner.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">{banner.title}</h3>
                  <p className="mb-6 opacity-90 max-w-xs">{banner.description}</p>
                  <Button variant="secondary" size="lg">
                    {banner.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;