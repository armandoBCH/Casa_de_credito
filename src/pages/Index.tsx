import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import FeaturedProducts from "../components/FeaturedProducts.tsx";
import { Categories, Testimonials, CTA } from "../components/HomeSections.tsx";
import Footer from "../components/Footer.tsx";
import WhyChooseUs from "../components/WhyChooseUs.tsx";
import HomePromotions from "../components/HomePromotions.tsx";
import SimulatorCTA from "../components/SimulatorCTA.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Categories />
        <HomePromotions />
        <SimulatorCTA />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;