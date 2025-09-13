import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Camera, Heart, Globe, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  const achievements = [
    "Featured in Vogue Weddings",
    "Martha Stewart Weddings Vendor",
    "The Knot Best of Weddings 2023",
    "WeddingWire Couples' Choice Award"
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Authentic Emotion",
      description: "I believe every wedding tells a unique love story that deserves to be captured with genuine emotion and artistic beauty."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Timeless Elegance",
      description: "My approach focuses on creating images that will remain beautiful and meaningful for generations to come."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Connection",
      description: "Building trust and comfort with each couple ensures natural, authentic moments throughout your celebration."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-elegant-entrance">
              <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-elegant-dark mb-6">
                Hello, I'm
                <br />
                <span className="text-primary italic">Akol</span>
              </h1>
              <p className="font-outfit text-lg text-soft-gray leading-relaxed mb-6">
                For over a decade, I've had the privilege of documenting love stories across the world's most beautiful venues. Based in Juba, South Sudan, I specialize in luxury wedding photography that captures the authentic emotion and timeless elegance of your celebration.
              </p>
              <p className="font-outfit text-lg text-soft-gray leading-relaxed mb-8">
                My passion lies in creating images that transcend trends—photographs that will move you to tears decades from now, just as they do today.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="font-outfit">
                    {achievement}
                  </Badge>
                ))}
              </div>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="aspect-[3/4] bg-gradient-subtle rounded-2xl overflow-hidden shadow-luxe">
                <img
                  src="akoll.png"
                  alt="Akol, luxury wedding photographer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-elegant">
                <Camera className="h-8 w-8 mb-2" />
                <p className="font-outfit font-medium text-sm">10+ Years</p>
                <p className="font-outfit text-xs opacity-90">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              My Philosophy
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-3xl mx-auto leading-relaxed">
              Every wedding is a masterpiece waiting to be revealed. My role is to observe, anticipate, and capture those fleeting moments of pure emotion that make your celebration uniquely yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center p-8 shadow-elegant hover:shadow-luxe transition-all duration-300 animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 text-primary-foreground shadow-soft">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-elegant-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="font-outfit text-soft-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
                  A Decade of Celebrations
                </h2>
                <p className="font-outfit text-lg text-soft-gray leading-relaxed mb-6">
                  From intimate elopements in Tuscany to grand celebrations at The Plaza, I've had the honor of documenting over 300 weddings across six continents.
                </p>
                <p className="font-outfit text-lg text-soft-gray leading-relaxed">
                  Each celebration has taught me something new about love, family, and the art of storytelling through photography.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary mb-2">300+</div>
                  <p className="font-outfit text-soft-gray">Weddings Captured</p>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="font-outfit text-soft-gray">Luxury Venues</p>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary mb-2">25</div>
                  <p className="font-outfit text-soft-gray">Countries Visited</p>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="font-outfit text-soft-gray">Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&h=400&q=80"
                alt="Wedding photography behind the scenes"
                className="w-full h-64 object-cover rounded-lg shadow-elegant"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=300&h=400&q=80"
                className="w-full h-64 object-cover rounded-lg shadow-elegant mt-8"
                alt="Luxury wedding venue"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto container-padding text-center animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="font-outfit text-lg text-soft-gray mb-8 max-w-2xl mx-auto">
            I would love to learn about your vision and discuss how we can create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/gallery">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;