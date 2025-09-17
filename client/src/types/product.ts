export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  materials: string[];
  types: string[];
  styles: string[];
  sizes: string[];
  images: string[];
  featured: boolean;
  created_at: string;
}

export interface ProductFilters {
  search: string;
  material: string[];
  type: string[];
  style: string[];
}
