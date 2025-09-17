import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      name: "Taufique Alam",
      phone: "+91 82994 01959",
      email: "taufiquekabircarpet@gmail.com",
      icon: Users,
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Mohammad Yusuf", 
      phone: "+91 93365 70525",
      email: "yusufmzp@gmail.com",
      icon: Users,
      color: "bg-secondary/10 text-secondary"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@kabircarpetinternational",
      url: "https://instagram.com/kabircarpetinternational",
      bgColor: "bg-gradient-to-br from-purple-600 to-pink-500"
    },
    {
      name: "Threads",
      handle: "@kabircarpetinternational", 
      url: "https://threads.net/@kabircarpetinternational",
      bgColor: "bg-black"
    },
    {
      name: "Facebook",
      handle: "Visit our page",
      url: "https://www.facebook.com/share/19fDwDE9b2/?mibextid=wwXIfr",
      bgColor: "bg-blue-600"
    }
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: "Business Hours:",
      content: "Monday - Saturday, 9:00 AM - 6:00 PM (IST)"
    },
    {
      icon: Users,
      title: "Specialization:",
      content: "Hand-knotted carpets, Custom sizes, Traditional & contemporary designs"
    },
    {
      icon: Truck,
      title: "Shipping:",
      content: "Worldwide shipping available with careful packaging"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="contact-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to find your perfect carpet? Contact our team to discuss your
              requirements and get a personalized quote.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="contact-info"
            >
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-secondary mb-6">
                  Contact Our Team
                </h3>

                {/* Owner Contacts */}
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.div
                        key={index}
                        className="bg-card rounded-xl p-6 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        data-testid={`contact-card-${contact.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-full ${contact.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-secondary text-lg mb-2">
                              {contact.name}
                            </h4>
                            <div className="space-y-2">
                              <a
                                href={`tel:${contact.phone}`}
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                                data-testid={`phone-${contact.name.toLowerCase().replace(' ', '-')}`}
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                {contact.phone}
                              </a>
                              <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                                data-testid={`email-${contact.name.toLowerCase().replace(' ', '-')}`}
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                {contact.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Company Contact */}
              <motion.div
                className="bg-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                data-testid="company-contact"
              >
                <h4 className="font-semibold text-secondary text-lg mb-4">
                  Company Information
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:internationalkabircarpet@gmail.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    data-testid="company-email"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    internationalkabircarpet@gmail.com
                  </a>
                  <a
                    href="https://maps.google.com/?q=Kantit,+Mirzapur,+Uttar+Pradesh,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    data-testid="company-location"
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    Kantit, Mirzapur, Uttar Pradesh, India
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="social-info"
            >
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-secondary mb-6">
                  Connect With Us
                </h3>

                {/* Social Media Links */}
                <div className="bg-card rounded-xl p-6 shadow-lg" data-testid="social-links">
                  <h4 className="font-semibold text-secondary text-lg mb-4">
                    Follow Our Journey
                  </h4>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        data-testid={`social-link-${social.name.toLowerCase()}`}
                      >
                        <div className={`p-2 rounded-full ${social.bgColor}`}>
                          <div className="w-5 h-5 text-white flex items-center justify-center text-xs font-bold">
                            {social.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-secondary">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <motion.div
                className="bg-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                data-testid="business-info"
              >
                <h4 className="font-semibold text-secondary text-lg mb-4">
                  Business Information
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  {businessInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <p key={index} className="flex items-start">
                        <IconComponent className="w-5 h-5 mr-3 mt-0.5" />
                        <span>
                          <strong>{info.title}</strong> {info.content}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
