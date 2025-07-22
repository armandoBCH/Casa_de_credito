import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import FeaturedProducts from "../components/FeaturedProducts.tsx";
import { Benefits, Categories, Testimonials, CTA } from "../components/HomeSections.tsx";
import Footer from "../components/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
