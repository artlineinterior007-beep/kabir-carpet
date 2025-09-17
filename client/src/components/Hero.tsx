import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden carpet-texture"
      data-testid="hero-section"
    >
      {/* Hero Background with Ken Burns Effect */}
      <div className="absolute inset-0 ken-burns">
        <img
          src="/assets/hero.png"
          alt="Kabir Carpet showcase"
          className="w-full h-full object-cover"
          data-testid="hero-background-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080";
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        data-testid="hero-content"
      >
        <motion.h1
          className="font-great-vibes text-4xl md:text-6xl lg:text-7xl mb-4 text-accent"
          variants={itemVariants}
          data-testid="hero-title"
        >
          Kabir Carpet International
        </motion.h1>

        <motion.h2
          className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          variants={itemVariants}
          data-testid="hero-subtitle"
        >
          Crafting Exquisite Carpets from Mirzapur, India
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200"
          variants={itemVariants}
          data-testid="hero-description"
        >
          Three generations of master craftsmen weaving tradition, artistry, and
          excellence into every carpet since 1985.
        </motion.p>

        <motion.button
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("catalog")}
          data-testid="cta-explore-catalog"
        >
          Explore Our Catalog
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("about")}
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
