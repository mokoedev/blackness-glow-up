import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Join the <span className="text-primary">Movement?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unleash your creative power with the House of Blackness. Elevate your craft, engage live 
            with a passionate audience, and perfect your art in a supportive, dynamic community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              Join as Creator
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
              Browse Content
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">2.5k+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Live Streams</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">1k+</div>
              <div className="text-sm text-muted-foreground">Booth Mixes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;