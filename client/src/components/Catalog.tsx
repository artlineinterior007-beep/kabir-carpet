import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, X } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import { Product, ProductFilters } from "../types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CatalogProps {
  onProductSelect: (product: Product) => void;
}

export default function Catalog({ onProductSelect }: CatalogProps) {
  const { data: products = [], isLoading, error } = useProducts();

  const [filters, setFilters] = useState<ProductFilters>({
    search: "",
    material: [],
    type: [],
    style: [],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Material filter
      if (filters.material.length > 0) {
        const hasMatchingMaterial = filters.material.some((filter) =>
          product.materials.includes(filter)
        );
        if (!hasMatchingMaterial) return false;
      }

      // Type filter
      if (filters.type.length > 0) {
        const hasMatchingType = filters.type.some((filter) =>
          product.types.includes(filter)
        );
        if (!hasMatchingType) return false;
      }

      // Style filter
      if (filters.style.length > 0) {
        const hasMatchingStyle = filters.style.some((filter) =>
          product.styles.includes(filter)
        );
        if (!hasMatchingStyle) return false;
      }

      return true;
    });
  }, [products, filters]);

  const toggleFilter = (
    category: keyof Omit<ProductFilters, "search">,
    value: string
  ) => {
    setFilters((prev) => {
      const currentFilters = prev[category];
      const isActive = currentFilters.includes(value);

      return {
        ...prev,
        [category]: isActive
          ? currentFilters.filter((f) => f !== value)
          : [...currentFilters, value],
      };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      search: "",
      material: [],
      type: [],
      style: [],
    });
  };

  const filterSections = [
    {
      title: "Materials",
      key: "material" as const,
      options: ["wool", "silk", "banana-silk", "cotton"],
    },
    {
      title: "Types",
      key: "type" as const,
      options: [
        "hand-knotted",
        "hand-tufted",
        "flat-weave",
        "hand-woven",
        "jute",
        "gabbeh",
        "durrie",
      ],
    },
    {
      title: "Styles",
      key: "style" as const,
      options: ["traditional", "contemporary", "geometric", "floral"],
    },
  ];

  if (error) {
    return (
      <section
        id="catalog"
        className="py-20 bg-card"
        data-testid="catalog-section"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-secondary mb-4">
              Our Catalog
            </h2>
            <p className="text-destructive" data-testid="catalog-error">
              Failed to load catalog. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="catalog"
      className="py-20 bg-card"
      data-testid="catalog-section"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="catalog-header"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Catalog
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our exquisite collection of handcrafted carpets, each
              piece telling its own story of artistry and tradition.
            </p>

            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              data-testid="download-catalog-btn"
            >
              <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download PDF Catalog
              </a>
            </Button>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="catalog-filters"
          >
            {/* Search */}
            <div className="flex justify-center mb-6">
              <div className="relative max-w-md w-full">
                <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search carpets..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                  className="pl-10"
                  data-testid="search-input"
                />
              </div>
            </div>

            {/* Filter Categories */}
            <div className="space-y-4">
              {filterSections.map((section) => (
                <div key={section.key}>
                  <h4 className="font-semibold text-secondary mb-3">
                    {section.title}:
                  </h4>
                  <div
                    className="flex flex-wrap gap-2"
                    data-testid={`filter-${section.key}`}
                  >
                    {section.options.map((option) => {
                      const isActive = filters[section.key].includes(option);
                      return (
                        <Button
                          key={option}
                          variant={isActive ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFilter(section.key, option)}
                          className={`filter-chip transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground hover:bg-primary/90"
                              : "hover:bg-primary hover:text-primary-foreground"
                          }`}
                          data-testid={`filter-${section.key}-${option}`}
                        >
                          {option
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Clear Filters */}
              <div className="text-center pt-4">
                <Button
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="text-primary hover:text-primary/80"
                  data-testid="clear-filters-btn"
                >
                  Clear All Filters
                </Button>
                <span
                  className="ml-4 text-muted-foreground text-sm"
                  data-testid="result-count"
                >
                  {isLoading
                    ? "Loading..."
                    : `Showing ${filteredProducts.length} carpet${
                        filteredProducts.length === 1 ? "" : "s"
                      }`}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-testid="product-grid"
          >
            <AnimatePresence>
              {isLoading
                ? // Loading skeletons
                  Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                      key={`skeleton-${index}`}
                      className="bg-background rounded-xl shadow-lg overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      data-testid={`product-skeleton-${index}`}
                    >
                      <div className="aspect-square bg-muted animate-pulse" />
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-muted rounded animate-pulse" />
                        <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded animate-pulse" />
                          <div className="h-3 bg-muted rounded animate-pulse" />
                        </div>
                        <div className="h-10 bg-muted rounded animate-pulse" />
                      </div>
                    </motion.div>
                  ))
                : filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="product-card bg-white text-secondary rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      onClick={() => onProductSelect(product)}
                      data-testid={`product-card-${product.id}`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={`/assets/${product.images[0]}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800";
                          }}
                          data-testid={`product-image-${product.id}`}
                        />
                      </div>
                      <div className="p-6">
                        <h3
                          className="font-playfair text-xl font-semibold text-secondary mb-2"
                          data-testid={`product-name-${product.id}`}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-gray-700 mb-4 line-clamp-3"
                          data-testid={`product-description-${product.id}`}
                        >
                          {product.description}
                        </p>

                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium text-secondary w-20">
                              Materials:
                            </span>
                            <span className="text-gray-700">
                              {product.materials.join(", ")}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-secondary w-20">
                              Type:
                            </span>
                            <span className="text-gray-700">
                              {product.types.join(", ")}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-secondary w-20">
                              Style:
                            </span>
                            <span className="text-gray-700">
                              {product.styles.join(", ")}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-secondary w-20">
                              Sizes:
                            </span>
                            <span className="text-gray-700">
                              {product.sizes.join(", ")}
                            </span>
                          </div>
                        </div>

                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          data-testid={`view-details-${product.id}`}
                        >
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>

          {/* No results message */}
          {!isLoading && filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              data-testid="no-results"
            >
              <p className="text-muted-foreground text-lg">
                No carpets match your current filters. Try adjusting your search
                criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
