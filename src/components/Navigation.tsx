import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
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
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-semibold text-elegant-dark hover:text-primary transition-colors duration-300">Akoll Photography</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`font-outfit text-sm font-medium transition-colors duration-300 relative group ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>)}
            <Button variant="luxury" size="sm" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block font-outfit text-base font-medium py-2 transition-colors duration-300 ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4">
                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navigation;