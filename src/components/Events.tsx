import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "House Music Festival 2024",
    date: "Dec 15, 2024",
    location: "Virtual Event",
    attendees: "2.5k",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Deep House Masterclass",
    date: "Dec 22, 2024",
    location: "Online Workshop",
    attendees: "500",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
    status: "Registration Open",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-muted-foreground">Creating Unforgettable Musical Journeys</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
              <div className="md:flex">
                <div className="md:w-1/2 relative aspect-video md:aspect-square overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {event.status}
                  </Badge>
                </div>
                <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-4">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} registered
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Register Now
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;