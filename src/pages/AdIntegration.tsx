import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdIntegrationGuide from "@/components/AdIntegrationGuide";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Ad Integration <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how to integrate ad platforms and monetize your content on The House of Blackness
            </p>
          </div>

          <AdIntegrationGuide />

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Ad Placement Strategy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our platform uses strategic ad placements to maximize revenue while maintaining excellent user experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Banner Ads</strong> - Positioned at the top of content sections for high visibility</li>
                  <li><strong>Sidebar Ads</strong> - Persistent placement alongside main content (desktop only)</li>
                  <li><strong>Inline Ads</strong> - Naturally integrated between content sections</li>
                  <li><strong>Featured Slots</strong> - Premium placements for streams, mixes, and shop items</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Content Advertising</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Artists and content creators can promote their work through featured slots:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-2">Featured Streams</h3>
                    <p className="text-sm">Top placement in streams section with star badge and priority listing</p>
                    <p className="text-primary font-bold mt-2">$99/week</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-2">Featured Mixes</h3>
                    <p className="text-sm">Highlighted in booth mixes section with featured badge</p>
                    <p className="text-primary font-bold mt-2">$79/week</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-2">Featured Shop</h3>
                    <p className="text-sm">Prime position in shop with best seller badge</p>
                    <p className="text-primary font-bold mt-2">$149/2 weeks</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <div className="bg-muted/20 rounded-lg p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Keep ads relevant to the house music and DJ community</li>
                  <li>✓ Maintain 60/40 content-to-ad ratio for optimal user experience</li>
                  <li>✓ Use lazy loading for ad scripts to improve page performance</li>
                  <li>✓ Implement responsive ad units for mobile compatibility</li>
                  <li>✓ A/B test ad placements to optimize click-through rates</li>
                  <li>✓ Monitor ad performance metrics regularly</li>
                  <li>✓ Ensure ads comply with platform and network policies</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdIntegration;