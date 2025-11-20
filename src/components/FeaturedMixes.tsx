import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, Star } from "lucide-react";

const mixes = [
  {
    id: 1,
    title: "Deep House Vibes Vol. 3",
    artist: "DJ Soundwave",
    duration: "2:45:30",
    plays: "25.3k",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Afro Tech Sessions",
    artist: "Rhythm Masters",
    duration: "1:58:45",
    plays: "18.7k",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Late Night Grooves",
    artist: "Midnight Collective",
    duration: "3:12:00",
    plays: "32.1k",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop",
    featured: false,
  },
];

const FeaturedMixes = () => {
  return (
    <section id="mixes" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Featured <span className="text-primary">Booth Mixes</span>
            </h2>
            <p className="text-muted-foreground">Echo Your Sound, Amplify Your Reach</p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Browse EchoNest
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mixes.map((mix) => (
            <Card key={mix.id} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={mix.cover} 
                  alt={mix.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {mix.featured && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-white/80 mb-1">{mix.duration}</p>
                  <h3 className="font-bold text-white text-lg mb-1">{mix.title}</h3>
                  <p className="text-sm text-white/80">{mix.artist}</p>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="mr-2 h-5 w-5" />
                    Play
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{mix.plays} plays</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMixes;