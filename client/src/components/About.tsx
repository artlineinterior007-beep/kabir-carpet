import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="about-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="about-content"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1985, Kabir Carpet International represents three
                generations of master craftsmen dedicated to preserving the
                ancient art of carpet weaving. From our workshop in Kantit,
                Mirzapur, we continue the rich tradition of Uttar Pradesh's
                textile heritage.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our family business combines time-honored techniques passed down
                through generations with contemporary design sensibilities,
                creating carpets that bridge traditional Indian artistry with
                global aesthetic preferences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Each carpet tells a story of meticulous craftsmanship, premium
                materials sourced from across India, and the passionate dedication
                of artisans who treat their work as both livelihood and art form.
              </p>

              <motion.div
                className="flex items-center space-x-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                data-testid="about-highlight"
              >
                <div className="bg-accent/10 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Since 1985</h3>
                  <p className="text-sm text-muted-foreground">
                    Three generations of excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="about-gallery"
            >
              <img
                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Traditional carpet weaving artisan at work on handloom"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
                loading="lazy"
                data-testid="gallery-image-1"
              />
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt="Skilled hands creating intricate carpet knots and patterns"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
                loading="lazy"
                data-testid="gallery-image-2"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt="Vibrant colored threads and yarns for carpet weaving"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
                loading="lazy"
                data-testid="gallery-image-3"
              />
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Traditional carpet weaving workshop with multiple looms"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
                loading="lazy"
                data-testid="gallery-image-4"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
