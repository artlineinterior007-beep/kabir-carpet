import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#process", label: "Our Process" },
    { href: "#catalog", label: "Catalog" },
    { href: "#history", label: "Our History" },
    { href: "#contact", label: "Contact" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      href: "https://instagram.com/kabircarpetinternational",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
      name: "Threads",
      href: "https://threads.net/@kabircarpetinternational", 
      path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/19fDwDE9b2/?mibextid=wwXIfr",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-testid="footer-company-info"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.svg"
                  alt="Kabir Carpet International Logo"
                  className="w-12 h-12 rounded-lg"
                  data-testid="footer-logo"
                />
                <div>
                  <h3 className="font-playfair text-xl font-semibold">
                    Kabir Carpet International
                  </h3>
                  <p className="text-sm text-secondary-foreground/80">
                    Crafting Excellence Since 1985
                  </p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-4 max-w-md">
                Three generations of master craftsmen dedicated to preserving the
                ancient art of carpet weaving, combining traditional techniques with
                contemporary design.
              </p>
              <p className="text-sm text-secondary-foreground/60">
                Kantit, Mirzapur, Uttar Pradesh, India
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-testid="footer-quick-links"
            >
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm text-left"
                    data-testid={`footer-link-${link.href.replace('#', '')}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-testid="footer-contact-info"
            >
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-2">
                <a
                  href="mailto:internationalkabircarpet@gmail.com"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-email"
                >
                  internationalkabircarpet@gmail.com
                </a>
                <a
                  href="tel:+918299401959"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-phone-taufique"
                >
                  +91 82994 01959 (Taufique)
                </a>
                <a
                  href="tel:+919336570525"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-phone-mohammad"
                >
                  +91 93365 70525 (Mohammad)
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-secondary-foreground/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            data-testid="footer-bottom"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0" data-testid="copyright">
                © 2024 Kabir Carpet International. All rights reserved.
              </p>
              <div className="flex space-x-4" data-testid="footer-social-links">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                    whileHover={{ scale: 1.2 }}
                    data-testid={`footer-social-${social.name.toLowerCase()}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
