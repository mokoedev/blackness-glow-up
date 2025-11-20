import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import AdPurchaseModal from "./AdPurchaseModal";

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-primary">THOB</span>
            </h3>
            <p className="text-muted-foreground">
              The Only House That Matters
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#streams" className="text-muted-foreground hover:text-primary transition-colors">Streams</a></li>
              <li><a href="#mixes" className="text-muted-foreground hover:text-primary transition-colors">Booth Mixes</a></li>
              <li><a href="#shop" className="text-muted-foreground hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Know Your DJs</a></li>
              <li><a href="/ad-integration" className="text-muted-foreground hover:text-primary transition-colors">Ad Integration Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Advertising */}
          <div className="space-y-4">
            <h4 className="font-semibold">Advertising</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Boost your visibility with featured placement
            </p>
            <AdPurchaseModal />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 The House of Blackness. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;