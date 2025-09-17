import { motion } from "framer-motion";
import { Users, Star, Ruler, Globe } from "lucide-react";

export default function UVP() {
  const advantages = [
    {
      icon: Users,
      title: "Three Generations of Mastery",
      description: "Four decades of inherited expertise, where traditional techniques passed down through generations meet contemporary craftsmanship standards.",
      color: "bg-primary/10 group-hover:bg-primary/20 text-primary"
    },
    {
      icon: Star,
      title: "Global Material Sourcing", 
      description: "Premium wool, silk, and specialty fibers sourced from trusted suppliers across India, ensuring exceptional quality and durability in every carpet.",
      color: "bg-secondary/10 group-hover:bg-secondary/20 text-secondary"
    },
    {
      icon: Ruler,
      title: "Custom Dimensions",
      description: "Bespoke carpets crafted to your exact specifications, from standard sizes to completely custom dimensions tailored to your space requirements.",
      color: "bg-accent/10 group-hover:bg-accent/20 text-accent"
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Indian artistry meeting global quality expectations, with rigorous quality control and international shipping capabilities for discerning customers worldwide.",
      color: "bg-primary/10 group-hover:bg-primary/20 text-primary"
    }
  ];

  return (
    <section id="uvp" className="py-20 bg-card" data-testid="uvp-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="uvp-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Choose Kabir Carpets
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four decades of expertise, combining traditional craftsmanship with
              global standards to deliver carpets of unmatched quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="uvp-advantages">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`uvp-advantage-${index + 1}`}
                >
                  <motion.div
                    className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full"
                    whileHover={{ y: -8 }}
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors ${advantage.color}`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-secondary mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
