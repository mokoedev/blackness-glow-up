import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Star } from "lucide-react";

const streams = [
  {
    id: 1,
    title: "Saturday Live Stream",
    dj: "Multiple DJs",
    viewers: "1.2k",
    thumbnail: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&auto=format&fit=crop",
    featured: true,
    live: true,
  },
  {
    id: 2,
    title: "YugoTheBishop Official Channel",
    dj: "YugoTheBishop",
    viewers: "850",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop",
    featured: true,
    live: false,
  },
  {
    id: 3,
    title: "Deep House Sessions",
    dj: "House Collective",
    viewers: "620",
    thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&auto=format&fit=crop",
    featured: false,
    live: true,
  },
];

const FeaturedStreams = () => {
  return (
    <section id="streams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Featured <span className="text-primary">Streams</span>
            </h2>
            <p className="text-muted-foreground">The Pulse of Live Music</p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Streams
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <Card key={stream.id} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={stream.thumbnail} 
                  alt={stream.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {stream.live && (
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground animate-pulse">
                    LIVE
                  </Badge>
                )}
                {stream.featured && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{stream.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{stream.dj}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {stream.viewers} viewers
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStreams;