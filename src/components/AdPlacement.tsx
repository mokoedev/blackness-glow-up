import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface AdPlacementProps {
  type: "banner" | "sidebar" | "inline";
  title?: string;
}

const AdPlacement = ({ type, title = "Advertisement" }: AdPlacementProps) => {
  const getAdSize = () => {
    switch (type) {
      case "banner":
        return "w-full h-32";
      case "sidebar":
        return "w-full h-96";
      case "inline":
        return "w-full h-48";
      default:
        return "w-full h-48";
    }
  };

  return (
    <Card className="bg-card/50 border-border/50 overflow-hidden">
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
          <span>{title}</span>
          <ExternalLink className="w-3 h-3" />
        </div>
        <div className={`${getAdSize()} bg-muted/20 border border-border/50 rounded flex items-center justify-center text-muted-foreground text-sm`}>
          {/* Integration snippet placeholder - Replace with actual ad network code */}
          <div className="text-center px-4">
            <p className="mb-2">Ad Space Available</p>
            <Button 
              size="sm" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Advertise Here
            </Button>
          </div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {/* Ad network integration code goes here */}
          {/* Example: Google AdSense, Carbon Ads, etc. */}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdPlacement;