import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Categories, Testimonials, CTA } from "@/components/HomeSections";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomePromotions from "@/components/HomePromotions";
import SimulatorCTA from "@/components/SimulatorCTA";

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
