import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Clock, MapPin, Camera, Heart, Sparkles, Globe, Crown } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Engagement Collection",
      price: "From $1,200",
      duration: "2-hour session",
      icon: <Heart className="h-6 w-6" />,
      description: "Capture the excitement of your engagement with an intimate portrait session.",
      features: [
        "2-hour engagement session",
        "Location scouting assistance",
        "50+ edited high-resolution images",
        "Online gallery for sharing",
        "Print release included",
        "Styling guidance"
      ],
      popular: false
    },
    {
      name: "Luxury Wedding Day",
      price: "From $6,500",
      duration: "10-hour coverage",
      icon: <Camera className="h-6 w-6" />,
      description: "Complete wedding day coverage with timeless, elegant photography.",
      features: [
        "10 hours of wedding day coverage",
        "Getting ready through reception",
        "200+ edited high-resolution images",
        "Online gallery with download rights",
        "Print release included",
        "Timeline planning assistance",
        "Second photographer available",
        "USB drive with all images"
      ],
      popular: true
    },
    {
      name: "Destination Wedding",
      price: "From $12,000",
      duration: "Multi-day coverage",
      icon: <Globe className="h-6 w-6" />,
      description: "Comprehensive destination wedding photography with travel included.",
      features: [
        "3-day minimum coverage",
        "Travel expenses included",
        "Welcome party & rehearsal dinner",
        "Full wedding day coverage",
        "400+ edited high-resolution images",
        "Luxury album included",
        "Location scouting session",
        "Print release & USB included"
      ],
      popular: false
    },
    {
      name: "Platinum Experience",
      price: "From $15,000",
      duration: "Unlimited coverage",
      icon: <Crown className="h-6 w-6" />,
      description: "The ultimate luxury wedding photography experience with white-glove service.",
      features: [
        "Unlimited day-of coverage",
        "Engagement session included",
        "Welcome party coverage",
        "Rehearsal dinner coverage",
        "Second photographer included",
        "500+ edited images",
        "Luxury Italian leather album",
        "Custom USB presentation box",
        "Priority timeline planning",
        "Complimentary bridal boudoir session"
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Second Photographer",
      price: "$800",
      description: "Additional perspective and comprehensive coverage"
    },
    {
      name: "Bridal Boudoir Session",
      price: "$1,200",
      description: "Intimate portraits for your partner"
    },
    {
      name: "Luxury Album",
      price: "$1,800",
      description: "Hand-crafted Italian leather album with 50 pages"
    },
    {
      name: "Additional Hours",
      price: "$400/hour",
      description: "Extend your coverage beyond the package"
    },
    {
      name: "Rush Delivery",
      price: "$500",
      description: "Receive your gallery within 2 weeks"
    },
    {
      name: "Parent Albums",
      price: "$600 each",
      description: "Smaller albums for parents and family"
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-elegant-dark mb-6 animate-elegant-entrance">
            Wedding Services
          </h1>
          <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto animate-fade-in-up">
            Luxury wedding photography packages designed to capture every precious moment of your celebration with timeless elegance.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              Photography Packages
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Each package is thoughtfully crafted to meet the unique needs of your celebration, from intimate gatherings to grand affairs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden shadow-elegant hover:shadow-luxe transition-all duration-500 animate-fade-in-up hover-scale ${
                  pkg.popular ? 'border-primary border-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gold text-primary-foreground font-outfit">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg text-primary-foreground shadow-soft mr-4">
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-elegant-dark">
                        {pkg.name}
                      </h3>
                      <p className="font-outfit text-soft-gray text-sm">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-playfair text-3xl font-bold text-primary mb-2">
                      {pkg.price}
                    </p>
                    <p className="font-outfit text-soft-gray leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-outfit text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? "luxury" : "elegant"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">Inquire About This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              Enhance Your Experience
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Personalize your package with these carefully curated add-on services designed to elevate your wedding photography experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-lg font-semibold text-elegant-dark">
                      {addon.name}
                    </h3>
                    <span className="font-outfit font-medium text-primary">
                      {addon.price}
                    </span>
                  </div>
                  <p className="font-outfit text-soft-gray text-sm leading-relaxed">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              The Experience
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              From our first conversation to the delivery of your final gallery, every step is designed to be seamless and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We'll discuss your vision, venue, and timeline over coffee or video call.",
                icon: <Heart className="h-6 w-6" />
              },
              {
                step: "02", 
                title: "Planning",
                description: "Together we'll create a detailed timeline and shot list for your day.",
                icon: <Clock className="h-6 w-6" />
              },
              {
                step: "03",
                title: "Your Day",
                description: "Relax and enjoy while I capture every beautiful moment as it unfolds.",
                icon: <Camera className="h-6 w-6" />
              },
              {
                step: "04",
                title: "Delivery",
                description: "Receive your stunning gallery within 4-6 weeks, ready to share and treasure.",
                icon: <Sparkles className="h-6 w-6" />
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground mx-auto shadow-elegant">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-outfit font-medium">
                    {process.step}
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-elegant-dark mb-3">
                  {process.title}
                </h3>
                <p className="font-outfit text-soft-gray text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto container-padding text-center animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
            Let's Create Magic Together
          </h2>
          <p className="font-outfit text-lg text-soft-gray mb-8 max-w-2xl mx-auto">
            Every wedding is unique, and I'd love to create a custom package that perfectly fits your celebration and budget.
          </p>
          <Button variant="luxury" size="xl" asChild>
            <Link to="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;