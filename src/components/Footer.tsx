import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-elegant-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-playfair text-3xl font-semibold text-primary-foreground mb-4 block">Akoll Photography</Link>
            <p className="font-outfit text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Luxury wedding photographer specializing in timeless, elegant celebrations. 
              Capturing your most precious moments with artistic vision and heartfelt storytelling.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-warm-gold hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-warm-gold hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-warm-gold hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 font-outfit">
              {[{
              name: "Home",
              href: "/"
            }, {
              name: "Gallery",
              href: "/gallery"
            }, {
              name: "About",
              href: "/about"
            }, {
              name: "Services",
              href: "/services"
            }, {
              name: "Testimonials",
              href: "/testimonials"
            }, {
              name: "Contact",
              href: "/contact"
            }].map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-warm-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 font-outfit text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-warm-gold mt-0.5" />
                <div>
                  <p className="text-sm">Email</p>
                  <a href="mailto:hello@elenarosephoto.com" className="hover:text-warm-gold transition-colors">hello@akollphotography.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-warm-gold mt-0.5" />
                <div>
                  <p className="text-sm">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-warm-gold transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm-gold mt-0.5" />
                <div>
                  <p className="text-sm">Location</p>
                  <p>Juba, South Sudan</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-outfit text-primary-foreground/60">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} Akol Photography.</span>
              <Heart className="h-4 w-4 text-warm-gold" />
              <span>All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              
              <Link to="/terms" className="hover:text-warm-gold transition-colors">Designed & Built by Simon Akuien Atem</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;