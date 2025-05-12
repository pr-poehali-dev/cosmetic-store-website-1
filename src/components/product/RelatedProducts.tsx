
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from '@/components/catalog/ProductCard';

type RelatedProductsProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, onAddToCart }) => {
  return (
    <section className="mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl font-medium text-beauty-dark">Похожие товары</h2>
        <Button variant="outline" className="mt-2 md:mt-0 border-beauty-accent text-beauty-accent hover:bg-beauty-accent hover:text-white">
          Смотреть все
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
