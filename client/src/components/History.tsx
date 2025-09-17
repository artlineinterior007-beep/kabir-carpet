import { motion } from "framer-motion";

export default function History() {
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Kabir Carpet International was established in Mirzapur, beginning our journey as a family-owned business dedicated to preserving traditional carpet weaving techniques.",
      color: "bg-accent text-accent-foreground"
    },
    {
      year: "1992", 
      title: "Global Expansion",
      description: "Secured our first international order, marking the beginning of our global journey and establishing relationships with overseas clients.",
      color: "bg-secondary text-secondary-foreground"
    },
    {
      year: "2001",
      title: "Second Generation", 
      description: "The second generation joined the business, bringing fresh perspectives while maintaining our commitment to traditional craftsmanship and quality.",
      color: "bg-primary text-primary-foreground"
    },
    {
      year: "2010",
      title: "Innovation & Growth",
      description: "Integrated modern design techniques and quality control systems while preserving traditional hand-weaving methods, expanding our product range significantly.",
      color: "bg-accent text-accent-foreground"
    },
    {
      year: "2020", 
      title: "Third Generation",
      description: "The third generation entered the business, bringing digital innovation and sustainable practices while honoring our heritage of excellence and craftsmanship.",
      color: "bg-secondary text-secondary-foreground"
    },
    {
      year: "Today",
      title: "Continuing Legacy",
      description: "Today, we continue to blend traditional artistry with contemporary design, serving discerning customers worldwide while maintaining our commitment to quality and craftsmanship.",
      color: "bg-primary text-primary-foreground",
      isCurrent: true
    }
  ];

  return (
    <section id="history" className="py-20 bg-background" data-testid="history-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="history-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Heritage
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of dedication, innovation, and growth spanning four decades
              of carpet craftsmanship.
            </p>
          </motion.div>

          <div className="relative" data-testid="timeline">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border timeline-line" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative pl-20 timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`timeline-item-${milestone.year.toLowerCase()}`}
                >
                  <motion.div
                    className={`bg-card rounded-xl p-6 shadow-lg ${
                      milestone.isCurrent ? "border-2 border-accent" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className={`px-4 py-2 rounded-full font-bold text-lg ${milestone.color}`}>
                        {milestone.year}
                      </span>
                      <h3 className="font-playfair text-xl font-semibold text-secondary ml-4">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
