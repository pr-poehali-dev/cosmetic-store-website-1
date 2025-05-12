
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

type Product = {
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

const products: Product[] = [
  {
    id: 1,
    name: 'Увлажняющий крем для лица',
    brand: 'Natura',
    price: 2490,
    oldPrice: 2990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
  },
  {
    id: 2,
    name: 'Сыворотка с гиалуроновой кислотой',
    brand: 'PureSkin',
    price: 3490,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611930022073-84a3bef4ecb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isNew: true,
  },
  {
    id: 3,
    name: 'Тональный крем с SPF защитой',
    brand: 'CoverGlow',
    price: 1990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Палетка теней для век',
    brand: 'ColorPro',
    price: 3290,
    oldPrice: 3990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1583241119307-8ac6ed1d11df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
  },
];

const PopularProducts: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-beauty-dark mb-2">Популярные товары</h2>
            <p className="text-lg text-gray-600">Самые востребованные товары среди наших клиентов</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-beauty-accent hover:bg-opacity-90 text-white">
            Смотреть все товары
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
              
              <CardHeader className="pb-2">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <CardTitle className="text-lg font-medium line-clamp-2">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex items-center gap-1 mb-2">
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
              
              <CardFooter>
                <Button className="w-full bg-beauty-dark hover:bg-beauty-dark/90 text-white">
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
