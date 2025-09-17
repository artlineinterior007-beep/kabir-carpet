import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Catalog from "./components/Catalog";
import History from "./components/History";
import UVP from "./components/UVP";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import { useState } from "react";
import { Product } from "./types/product";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter antialiased">
      <Header />
      <Hero />
      <About />
      <Process />
      <Catalog onProductSelect={setSelectedProduct} />
      <History />
      <UVP />
      <Contact />
      <Footer />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;
