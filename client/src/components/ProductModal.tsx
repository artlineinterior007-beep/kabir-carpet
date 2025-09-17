import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "../types/product";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const getMailtoLink = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello,

I am interested in the ${product.name} carpet. Please provide more information and pricing.

Product Details:
- Name: ${product.name}
- Materials: ${product.materials.join(', ')}
- Types: ${product.types.join(', ')}
- Styles: ${product.styles.join(', ')}
- Available Sizes: ${product.sizes.join(', ')}

Thank you!`;

    return `mailto:internationalkabircarpet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        data-testid="product-modal"
      >
        {/* Backdrop */}
        <motion.div
          className="modal-backdrop absolute inset-0 bg-black/80"
          onClick={onClose}
          data-testid="modal-backdrop"
        />

        {/* Modal Content */}
        <motion.div
          className="relative z-10 bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          data-testid="modal-content"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="font-playfair text-2xl font-bold text-secondary" data-testid="modal-title">
              {product.name}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-muted rounded-full"
              data-testid="modal-close-btn"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div data-testid="image-gallery">
                <div className="aspect-square mb-4 rounded-xl overflow-hidden relative">
                  <img
                    src={`/catalog/${product.images[currentImageIndex]}`}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800";
                    }}
                    data-testid="modal-main-image"
                  />

                  {/* Navigation arrows */}
                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        onClick={prevImage}
                        data-testid="prev-image-btn"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        onClick={nextImage}
                        data-testid="next-image-btn"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto" data-testid="image-thumbnails">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                        data-testid={`thumbnail-${index}`}
                      >
                        <img
                          src={`/catalog/${image}`}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200";
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-6" data-testid="product-details">
                <div>
                  <p className="text-muted-foreground leading-relaxed" data-testid="modal-description">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4" data-testid="product-specs">
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Materials</h4>
                    <p className="text-muted-foreground" data-testid="modal-materials">
                      {product.materials.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Types</h4>
                    <p className="text-muted-foreground" data-testid="modal-types">
                      {product.types.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Styles</h4>
                    <p className="text-muted-foreground" data-testid="modal-styles">
                      {product.styles.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Sizes Available</h4>
                    <p className="text-muted-foreground" data-testid="modal-sizes">
                      {product.sizes.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getMailtoLink()}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
                    data-testid="contact-quote-btn"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact for Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
