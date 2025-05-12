
import React from 'react';
import ProductCard, { Product } from './ProductCard';

type ProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  className?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
