
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { Product } from '@/components/catalog/ProductCard';

type ProductInfoProps = {
  product: Product & {
    description: string;
    ingredients: string;
    usage: string;
    volume: string;
  };
  onAddToCart: (product: Product, quantity: number) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <div className="product-info">
      <div className="mb-2">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {product.isNew && <Badge className="bg-beauty-accent">Новинка</Badge>}
          {product.isOnSale && <Badge className="bg-beauty-pink text-beauty-dark">Скидка</Badge>}
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-medium text-beauty-dark mb-3">{product.name}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-3">
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
          <span className="text-sm text-gray-500">Артикул: {product.id.toString().padStart(6, '0')}</span>
        </div>
      </div>
      
      <div className="flex items-end gap-2 mb-6">
        <span className="text-3xl font-semibold text-beauty-dark">{product.price} ₽</span>
        {product.oldPrice && (
          <span className="text-lg text-gray-500 line-through">{product.oldPrice} ₽</span>
        )}
        {product.oldPrice && (
          <Badge className="bg-beauty-pink text-beauty-dark ml-2">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </Badge>
        )}
      </div>
      
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex items-center border rounded-md">
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="h-10 rounded-r-none text-gray-500"
            onClick={decreaseQuantity}
          >
            <Icon name="Minus" className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-16 h-10 text-center border-0"
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="h-10 rounded-l-none text-gray-500"
            onClick={increaseQuantity}
          >
            <Icon name="Plus" className="h-4 w-4" />
          </Button>
        </div>
        
        <Button 
          className="flex-1 md:flex-none md:min-w-[180px] bg-beauty-accent hover:bg-beauty-accent/90 text-white"
          onClick={() => onAddToCart(product, quantity)}
        >
          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
          В корзину
        </Button>
        
        <Button variant="outline" size="icon" className="border-gray-300">
          <Icon name="Heart" className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-beauty-accent">
            <Icon name="Truck" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium">Бесплатная доставка</p>
            <p className="text-sm text-gray-500">При заказе от 5000 ₽</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-beauty-accent">
            <Icon name="ShieldCheck" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium">Гарантия качества</p>
            <p className="text-sm text-gray-500">Все товары сертифицированы</p>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mt-8">
        <TabsList className="w-full grid grid-cols-3 mb-4">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="ingredients">Состав</TabsTrigger>
          <TabsTrigger value="usage">Применение</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="text-gray-600">
          <p>{product.description}</p>
          <p className="mt-2">Объем: {product.volume}</p>
        </TabsContent>
        <TabsContent value="ingredients" className="text-gray-600">
          <p>{product.ingredients}</p>
        </TabsContent>
        <TabsContent value="usage" className="text-gray-600">
          <p>{product.usage}</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInfo;
