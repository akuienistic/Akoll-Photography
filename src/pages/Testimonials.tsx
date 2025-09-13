import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, Heart, MapPin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      wedding: "Château de Versailles, France",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Elena captured our wedding with such artistry and emotion. Every photograph tells the story of our love beautifully. We couldn't be happier with the results.",
      rating: 5,
      venue: "Luxury Destination",
      featured: true
    },
    {
      name: "Isabella & James Rodriguez",
      wedding: "The Plaza, New York",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Working with Akol was an absolute dream. His professionalism and artistic vision exceeded all expectations. Our photos are pure magic.",
      rating: 5,
      venue: "Luxury Hotel",
      featured: false
    },
    {
      name: "Grace & Alexander Thompson", 
      wedding: "Napa Valley Vineyard",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Akol has an incredible gift for capturing genuine moments. He made us feel so comfortable, and the photos reflect our authentic joy and love.",
      rating: 5,
      venue: "Vineyard Wedding",
      featured: true
    },
    {
      name: "Charlotte & William Davis",
      wedding: "The Met Cloisters, New York",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Akol's attention to detail is extraordinary. He captured every emotion, every laugh, every tear. Our wedding album is a treasure we'll cherish forever.",
      rating: 5,
      venue: "Historic Venue",
      featured: false
    },
    {
      name: "Emma & Thomas Wilson",
      wedding: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "From our first consultation to receiving our final gallery, Akol provided exceptional service. His artistic vision transformed our special day into timeless art.",
      rating: 5,
      venue: "Destination Wedding",
      featured: true
    },
    {
      name: "Sophia & Henry Martinez",
      wedding: "Central Park Conservatory Garden",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Akol's work speaks for itself - elegant, romantic, and absolutely stunning. He has a rare talent for capturing the soul of a celebration.",
      rating: 5,
      venue: "Garden Wedding",
      featured: false
    }
  ];

  const press = [
    {
      publication: "Vogue Weddings",
      title: "Top Wedding Photographers of 2023",
      quote: "Akol brings unparalleled artistry to luxury wedding photography.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=100&h=50&q=80"
    },
    {
      publication: "Martha Stewart Weddings",
      title: "Featured Vendor Spotlight",
      quote: "Exceptional talent with an eye for timeless elegance.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=100&h=50&q=80"
    },
    {
      publication: "The Knot",
      title: "Best of Weddings 2023",
      quote: "Consistently delivers breathtaking photography that couples treasure.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=100&h=50&q=80"
    }
  ];

  const venues = [
    "The Plaza Hotel", "The Metropolitan Museum", "Brooklyn Botanic Garden", 
    "The New York Public Library", "Central Park Conservatory Garden", "The High Line Hotel",
    "The Rainbow Room", "One World Observatory", "The Foundry", "Green Building"
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-elegant-dark mb-6 animate-elegant-entrance">
            Client Love Stories
          </h1>
          <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto animate-fade-in-up">
            Nothing brings me more joy than hearing from couples about their experience and seeing how their photographs become treasured family heirlooms.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              What Couples Say
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Every testimonial represents a couple whose love story I was honored to capture and preserve for generations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-8 shadow-elegant hover:shadow-luxe transition-all duration-500 animate-fade-in-up hover-scale ${
                  testimonial.featured ? 'border-primary border-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {testimonial.featured && (
                    <Badge className="bg-gradient-gold text-primary-foreground font-outfit mb-4">
                      Featured Review
                    </Badge>
                  )}
                  
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary opacity-60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warm-gold fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-outfit text-foreground leading-relaxed text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow-soft"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-playfair font-semibold text-elegant-dark">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center text-soft-gray text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="font-outfit">{testimonial.wedding}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-outfit text-xs">
                      {testimonial.venue}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              Press & Recognition
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Honored to be featured in leading wedding publications and recognized by industry professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {press.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img
                      src={item.logo}
                      alt={item.publication}
                      className="h-12 mx-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-elegant-dark mb-2">
                    {item.publication}
                  </h3>
                  <p className="font-outfit text-sm text-primary mb-3 font-medium">
                    {item.title}
                  </p>
                  <blockquote className="font-outfit text-soft-gray text-sm italic leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preferred Venues */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              Preferred Venues
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              I've had the privilege of photographing weddings at New York's most prestigious venues and destinations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {venues.map((venue, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-outfit text-sm font-medium text-foreground">
                  {venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up">
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
              <p className="font-outfit text-soft-gray">Happy Couples</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="font-outfit text-soft-gray">5-Star Reviews</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="font-outfit text-soft-gray">Luxury Venues</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">10</div>
              <p className="font-outfit text-soft-gray">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto container-padding text-center animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
            Ready to Create Your Love Story?
          </h2>
          <p className="font-outfit text-lg text-soft-gray mb-8 max-w-2xl mx-auto">
            Join the couples who have trusted me to capture their most precious moments. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;