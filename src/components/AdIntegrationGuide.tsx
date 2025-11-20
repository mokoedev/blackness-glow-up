import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "lucide-react";

const AdIntegrationGuide = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          Ad Platform Integration Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="adsense" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="adsense">Google AdSense</TabsTrigger>
            <TabsTrigger value="carbon">Carbon Ads</TabsTrigger>
            <TabsTrigger value="custom">Custom Ads</TabsTrigger>
          </TabsList>

          <TabsContent value="adsense" className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Google AdSense Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Replace the placeholder div in AdPlacement component with your AdSense code
              </p>
              <div className="bg-muted/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs">
{`<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
     data-ad-slot="YOUR_AD_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`}
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="carbon" className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Carbon Ads Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Carbon Ads provides ethical advertising for developers and designers
              </p>
              <div className="bg-muted/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs">
{`<!-- Carbon Ads -->
<script async type="text/javascript" 
  src="//cdn.carbonads.com/carbon.js?serve=YOUR_PLACEMENT_ID&placement=YOUR_SITE_ID" 
  id="_carbonads_js">
</script>

<!-- Add this CSS to style Carbon Ads -->
<style>
  #carbonads {
    display: block;
    overflow: hidden;
    padding: 1em;
    max-width: 330px;
    border-radius: 4px;
    text-align: center;
  }
</style>`}
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Custom Ad Network Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Example structure for integrating custom ad networks
              </p>
              <div className="bg-muted/20 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs">
{`// Custom Ad Component Example
import { useEffect } from 'react';

const CustomAd = ({ adId, placement }) => {
  useEffect(() => {
    // Load your ad network's script
    const script = document.createElement('script');
    script.src = 'https://your-ad-network.com/ads.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize ad when script loads
    script.onload = () => {
      if (window.YourAdNetwork) {
        window.YourAdNetwork.displayAd({
          id: adId,
          placement: placement
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [adId, placement]);

  return <div id={\`ad-\${adId}\`} />;
};`}
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">📝 Implementation Notes</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Replace placeholders in AdPlacement.tsx with actual ad network code</li>
            <li>• Test ads in production environment (most ad networks don't work in localhost)</li>
            <li>• Ensure ads comply with your ad network's policies</li>
            <li>• Monitor ad performance and adjust placements for optimal revenue</li>
            <li>• Consider implementing lazy loading for better performance</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdIntegrationGuide;