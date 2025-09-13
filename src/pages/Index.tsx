import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Camera, Award } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto container-padding animate-elegant-entrance">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-tight">
            Timeless Wedding
            <br />
            <span className="italic text-warm-gold">Photography</span>
          </h1>
          <p className="font-outfit text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturing the elegance and romance of your most precious day with artistic vision and heartfelt storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/gallery">
                View Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-elegant-dark mb-6">
              Luxury Wedding Photography
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Specializing in sophisticated celebrations, intimate ceremonies, and destination weddings with an artistic eye for detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Romantic Storytelling",
                description: "Every photograph tells your unique love story with emotional depth and artistic beauty."
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Timeless Artistry", 
                description: "Classic, elegant photography that will remain beautiful for generations to come."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Luxury Experience",
                description: "White-glove service from consultation to delivery, ensuring a seamless photography experience."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 text-primary-foreground shadow-elegant">
                  {feature.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-elegant-dark mb-4">
                  {feature.title}
                </h3>
                <p className="font-outfit text-soft-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto container-padding text-center animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-elegant-dark mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="font-outfit text-lg text-soft-gray mb-8 max-w-2xl mx-auto">
            Your wedding day deserves to be captured with the artistry and elegance it represents. 
            Let's discuss how we can make your vision come to life.
          </p>
          <Button variant="luxury" size="xl" asChild>
            <Link to="/contact">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;