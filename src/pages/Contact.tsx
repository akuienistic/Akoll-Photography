import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Instagram, Calendar, Heart, Send, CheckCircle } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    brideNames: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    guestCount: "",
    package: "",
    hearAbout: "",
    vision: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully!",
        description: "Thank you for your interest. I'll respond within 24 hours.",
        duration: 5000
      });
      setFormData({
        brideNames: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        guestCount: "",
        package: "",
        hearAbout: "",
        vision: "",
        budget: ""
      });
    }, 2000);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const faqs = [{
    question: "How far in advance should I book?",
    answer: "I recommend booking 12-18 months in advance, especially for peak wedding season (May-October). This ensures availability and allows time for proper planning."
  }, {
    question: "Do you travel for weddings?",
    answer: "Yes! I love destination weddings and am available for travel worldwide. Travel expenses are included in destination packages."
  }, {
    question: "When will I receive my photos?",
    answer: "You'll receive a sneak peek within 48 hours and your full gallery within 4-6 weeks. Rush delivery is available for an additional fee."
  }, {
    question: "What's included in your packages?",
    answer: "All packages include high-resolution edited images, online gallery, print release, and timeline planning assistance. Specific inclusions vary by package."
  }];
  return <main className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-elegant-dark mb-6 animate-elegant-entrance">
            Let's Create Something Beautiful
          </h1>
          <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto animate-fade-in-up">
            I'm excited to learn about your love story and discuss how we can capture your wedding day with timeless elegance.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Card className="p-6 shadow-elegant hover:shadow-luxe transition-all duration-300 hover-scale">
                <CardHeader className="pb-4">
                  <CardTitle className="font-playfair text-xl text-elegant-dark flex items-center animate-fade-in-up">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-outfit font-medium text-elegant-dark">Email</p>
                      <a href="mailto:hello@akollphotography.com" className="font-outfit text-soft-gray hover:text-primary transition-colors">
                        hello@akollphotography.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-outfit font-medium text-elegant-dark">Phone</p>
                      <a href="tel:+1234567890" className="font-outfit text-soft-gray hover:text-primary transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-outfit font-medium text-elegant-dark">Location</p>
                      <p className="font-outfit text-soft-gray">
                        Juba, South Sudan<br />
                        Available for travel worldwide
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-outfit font-medium text-elegant-dark">Response Time</p>
                      <p className="font-outfit text-soft-gray">
                        Within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    <Instagram className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-outfit font-medium text-elegant-dark">Instagram</p>
                      <a href="https://instagram.com/akollphotography" className="font-outfit text-soft-gray hover:text-primary transition-colors">
                        @akollphotography
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Availability */}
              
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 shadow-elegant hover:shadow-luxe transition-all duration-300 hover-scale">
                <CardHeader className="pb-6">
                  <CardTitle className="font-playfair text-2xl text-elegant-dark animate-fade-in-up">
                    Wedding Inquiry Form
                  </CardTitle>
                  <p className="font-outfit text-soft-gray animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    Please share your wedding details so I can provide the best recommendations for your celebration.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <div>
                        <Label htmlFor="brideNames" className="font-outfit font-medium text-elegant-dark">
                          Partner Names *
                        </Label>
                        <Input id="brideNames" placeholder="Sarah & Michael" value={formData.brideNames} onChange={e => handleInputChange("brideNames", e.target.value)} required className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="font-outfit font-medium text-elegant-dark">
                          Email Address *
                        </Label>
                        <Input id="email" type="email" placeholder="sarah@email.com" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required className="mt-2" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <div>
                        <Label htmlFor="phone" className="font-outfit font-medium text-elegant-dark">
                          Phone Number
                        </Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="weddingDate" className="font-outfit font-medium text-elegant-dark">
                          Wedding Date
                        </Label>
                        <Input id="weddingDate" type="date" value={formData.weddingDate} onChange={e => handleInputChange("weddingDate", e.target.value)} className="mt-2" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <div>
                        <Label htmlFor="venue" className="font-outfit font-medium text-elegant-dark">
                          Venue or Location
                        </Label>
                        <Input id="venue" placeholder="The Plaza Hotel, NYC" value={formData.venue} onChange={e => handleInputChange("venue", e.target.value)} className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="guestCount" className="font-outfit font-medium text-elegant-dark">
                          Guest Count
                        </Label>
                        <Select onValueChange={value => handleInputChange("guestCount", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select guest count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="intimate">Intimate (under 50)</SelectItem>
                            <SelectItem value="medium">Medium (50-150)</SelectItem>
                            <SelectItem value="large">Large (150-300)</SelectItem>
                            <SelectItem value="grand">Grand (300+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                      <div>
                        <Label htmlFor="package" className="font-outfit font-medium text-elegant-dark">
                          Package Interest
                        </Label>
                        <Select onValueChange={value => handleInputChange("package", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engagement">Engagement Collection</SelectItem>
                            <SelectItem value="luxury">Luxury Wedding Day</SelectItem>
                            <SelectItem value="destination">Destination Wedding</SelectItem>
                            <SelectItem value="platinum">Platinum Experience</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="budget" className="font-outfit font-medium text-elegant-dark">
                          Photography Budget
                        </Label>
                        <Select onValueChange={value => handleInputChange("budget", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-8k">$5,000 - $8,000</SelectItem>
                            <SelectItem value="8k-12k">$8,000 - $12,000</SelectItem>
                            <SelectItem value="12k-18k">$12,000 - $18,000</SelectItem>
                            <SelectItem value="18k+">$18,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                      <Label htmlFor="hearAbout" className="font-outfit font-medium text-elegant-dark">
                        How did you hear about us?
                      </Label>
                      <Select onValueChange={value => handleInputChange("hearAbout", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="venue">Venue Recommendation</SelectItem>
                          <SelectItem value="wedding-wire">WeddingWire</SelectItem>
                          <SelectItem value="the-knot">The Knot</SelectItem>
                          <SelectItem value="magazine">Wedding Magazine</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                      <Label htmlFor="vision" className="font-outfit font-medium text-elegant-dark">
                        Tell me about your wedding vision
                      </Label>
                      <Textarea id="vision" placeholder="Share your style, important moments, special traditions, or anything else you'd like me to know about your celebration..." value={formData.vision} onChange={e => handleInputChange("vision", e.target.value)} className="mt-2 min-h-[120px]" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} variant="luxury" size="lg" className="w-full hover-scale animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
                      {isSubmitting ? <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                          Sending Inquiry...
                        </> : <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Inquiry
                        </>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-elegant-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-outfit text-lg text-soft-gray max-w-2xl mx-auto">
              Here are answers to some common questions about the wedding photography process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up hover-scale" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-0">
                  <h3 className="font-playfair text-lg font-semibold text-elegant-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-outfit text-soft-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </main>;
};
export default Contact;