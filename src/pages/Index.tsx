import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedStreams from "@/components/FeaturedStreams";
import FeaturedMixes from "@/components/FeaturedMixes";
import FeaturedShop from "@/components/FeaturedShop";
import Events from "@/components/Events";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import AdPlacement from "@/components/AdPlacement";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <AdPlacement type="banner" title="Sponsored" />
      </div>

      <FeaturedStreams />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <FeaturedMixes />
          </div>
          <div className="space-y-6">
            <AdPlacement type="sidebar" title="Featured Partner" />
          </div>
        </div>
      </div>

      <FeaturedShop />
      
      <div className="container mx-auto px-4 py-8">
        <AdPlacement type="inline" title="Recommended" />
      </div>

      <Events />
      <Blog />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;