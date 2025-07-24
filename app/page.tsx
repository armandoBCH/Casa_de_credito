import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import FeaturedProducts from "../src/components/FeaturedProducts";
import { Categories, Testimonials, CTA } from "../src/components/HomeSections";
import Footer from "../src/components/Footer";
import WhyChooseUs from "../src/components/WhyChooseUs";
import HomePromotions from "../src/components/HomePromotions";
import SimulatorCTA from "../src/components/SimulatorCTA";

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
