import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, MapPin } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Weddings" },
    { id: "ceremony", name: "Ceremonies" },
    { id: "reception", name: "Receptions" },
    { id: "engagement", name: "Engagements" },
    { id: "destination", name: "Destinations" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sarah & Michael",
      location: "Château de Versailles, France",
      category: "destination",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&h=600&q=80",
      description: "An intimate ceremony in the gardens of Versailles"
    },
    {
      id: 2,
      title: "Emma & James",
      location: "The Plaza, New York",
      category: "ceremony",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=600&q=80",
      description: "Classic elegance in Manhattan's finest venue"
    },
    {
      id: 3,
      title: "Isabella & Alexander",
      location: "Napa Valley Vineyard",
      category: "reception",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80",
      description: "A romantic celebration among the vineyards"
    },
    {
      id: 4,
      title: "Sophia & William",
      location: "Central Park, New York",
      category: "engagement",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&h=600&q=80",
      description: "Golden hour engagement session"
    },
    {
      id: 5,
      title: "Grace & Thomas",
      location: "Santorini, Greece",
      category: "destination",
      image: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=800&h=600&q=80",
      description: "Sunset ceremony overlooking the Aegean Sea"
    },
    {
      id: 6,
      title: "Charlotte & Henry",
      location: "The Met Cloisters, New York",
      category: "ceremony",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&h=600&q=80",
      description: "Medieval romance in the heart of Manhattan"
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-elegant-dark mb-6 animate-elegant-entrance">
            Wedding Gallery
          </h1>
          <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto animate-fade-in-up">
            A curated collection of our most cherished moments, showcasing the beauty and emotion of luxury weddings around the world.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border animate-fade-in-up">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "luxury" : "ghost"}
                onClick={() => setSelectedCategory(category.id)}
                className="font-outfit animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group overflow-hidden shadow-elegant hover:shadow-luxe transition-all duration-500 animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} wedding photography`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-playfair text-xl font-semibold text-elegant-dark">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="font-outfit text-xs">
                        {categories.find(c => c.id === item.category)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center text-soft-gray mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-outfit text-sm">{item.location}</span>
                    </div>
                    <p className="font-outfit text-sm text-soft-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding text-center animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
            Your Story Awaits
          </h2>
          <p className="font-outfit text-lg text-soft-gray mb-8 max-w-2xl mx-auto">
            Ready to create your own timeless wedding gallery? Let's discuss how we can capture the magic of your special day.
          </p>
          <Button variant="luxury" size="lg" className="hover-scale">
            Book Your Wedding
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Gallery;