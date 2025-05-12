
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {(product.isNew || product.isOnSale) && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-beauty-accent">Новинка</Badge>}
            {product.isOnSale && <Badge className="bg-beauty-pink text-beauty-dark">Скидка</Badge>}
          </div>
        )}
        <Button 
          variant="secondary" 
          size="icon" 
          className="absolute top-2 right-2 bg-white hover:bg-white/90 text-beauty-dark shadow-sm"
        >
          <Icon name="Heart" className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="pt-4 pb-2 flex-grow">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-medium line-clamp-2 hover:text-beauty-accent transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i} 
              name="Star" 
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-beauty-dark">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">{product.oldPrice} ₽</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 mt-auto">
        <Button 
          className="w-full bg-beauty-dark hover:bg-beauty-dark/90 text-white"
          onClick={() => onAddToCart(product)}
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
