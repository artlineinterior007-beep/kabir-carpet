import { motion } from "framer-motion";
import { Globe, Hammer, Droplets, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Globe,
      title: "Material Sourcing",
      description: "We carefully select premium wool, silk, and specialty fibers from trusted suppliers across India, ensuring each material meets our exacting quality standards.",
      color: "bg-primary/10 group-hover:bg-primary/20 text-primary"
    },
    {
      icon: Hammer,
      title: "Hand Knotting",
      description: "Master artisans employ traditional hand-knotting techniques, creating intricate patterns with patience and precision that only human hands can achieve.",
      color: "bg-secondary/10 group-hover:bg-secondary/20 text-secondary"
    },
    {
      icon: Droplets,
      title: "Washing & Treatment",
      description: "Each carpet undergoes specialized washing and treatment processes to enhance its luster, softness, and durability while preserving the vibrancy of colors.",
      color: "bg-accent/10 group-hover:bg-accent/20 text-accent"
    },
    {
      icon: CheckCircle,
      title: "Final Inspection",
      description: "Our quality control team meticulously inspects every carpet, ensuring it meets our standards for craftsmanship, design integrity, and overall excellence.",
      color: "bg-primary/10 group-hover:bg-primary/20 text-primary"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background" data-testid="process-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="process-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Crafting Process
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sourcing the finest materials to the final finishing touches,
              discover the meticulous process behind every Kabir carpet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="process-steps">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`process-step-${index + 1}`}
                >
                  <motion.div
                    className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                    whileHover={{ y: -8 }}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors ${step.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-secondary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
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
