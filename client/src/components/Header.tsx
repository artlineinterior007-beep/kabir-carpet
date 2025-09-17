import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollHeader } from "../hooks/useScrollHeader";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "catalog", label: "Catalog" },
    { id: "history", label: "History" },
    { id: "uvp", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      } text-white`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="main-header"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            data-testid="logo-section"
          >
            <img
              src="/logo.png"
              alt="Kabir Carpet International Logo"
              className="w-12 h-12 rounded-lg"
              data-testid="company-logo"
            />
            <div>
              <h1 className="font-playfair text-lg font-semibold text-secondary">
                Kabir Carpet
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                International
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-testid="desktop-nav"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors text-white"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-card border-t border-border mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            data-testid="mobile-menu"
          >
            <div className="container mx-auto px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-sm font-medium hover:text-primary transition-colors w-full text-left"
                  data-testid={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
