import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <main className="pt-16">
          <HeroSection />
          <FeatureShowcase />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
