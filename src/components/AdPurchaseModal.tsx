import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AdPurchaseModal = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      id: "featured-stream",
      name: "Featured Stream Slot",
      price: "$99",
      duration: "7 days",
      icon: Star,
      features: ["Top of streams section", "Star badge", "Priority listing"],
    },
    {
      id: "featured-mix",
      name: "Featured Mix Slot",
      price: "$79",
      duration: "7 days",
      icon: Zap,
      features: ["Top of mixes section", "Featured badge", "Highlighted card"],
    },
    {
      id: "featured-shop",
      name: "Featured Shop Slot",
      price: "$149",
      duration: "14 days",
      icon: Sparkles,
      features: ["Prime shop position", "Best seller badge", "2 weeks exposure"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ad purchase request submitted! Our team will contact you shortly.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          Purchase Ad Space
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Purchase Ad Space</DialogTitle>
          <DialogDescription>
            Boost your visibility with featured placement on The House of Blackness
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Plan Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Select Your Plan</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <CardContent className="p-4">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-bold mb-1">{plan.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-1">{plan.price}</p>
                      <p className="text-sm text-muted-foreground mb-3">{plan.duration}</p>
                      <ul className="space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="mr-2">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content-url">Content URL *</Label>
              <Input id="content-url" placeholder="Link to your stream/mix/product" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ad-type">Ad Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select ad type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured Slot</SelectItem>
                  <SelectItem value="banner">Banner Ad</SelectItem>
                  <SelectItem value="sidebar">Sidebar Ad</SelectItem>
                  <SelectItem value="inline">Inline Ad</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your advertising goals..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Request
              </Button>
              <DialogTrigger asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DialogTrigger>
            </div>
          </form>

          {/* Integration Info */}
          <div className="bg-muted/20 rounded-lg p-4 mt-6">
            <h3 className="font-semibold mb-2 text-sm">For Ad Network Integration</h3>
            <p className="text-xs text-muted-foreground mb-2">
              We support integration with major ad platforms including Google AdSense, Carbon Ads, and custom ad networks.
            </p>
            <code className="text-xs bg-background p-2 rounded block">
              {`<!-- Ad placement code -->\n<div id="thob-ad-slot"></div>`}
            </code>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdPurchaseModal;