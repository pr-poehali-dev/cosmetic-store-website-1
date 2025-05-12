
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
import Icon from '@/components/ui/icon';

type CategoryCard = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
};

const categories: CategoryCard[] = [
  {
    id: 1,
    title: 'Уход за лицом',
    description: 'Кремы, сыворотки, маски',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'bg-beauty-pink',
  },
  {
    id: 2,
    title: 'Уход за телом',
    description: 'Лосьоны, скрабы, масла',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'bg-beauty-peach',
  },
  {
    id: 3,
    title: 'Макияж',
    description: 'Тушь, помады, тени',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'bg-beauty-purple',
  },
  {
    id: 4,
    title: 'Ароматы',
    description: 'Духи, парфюмерия',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'bg-beauty-accent/20',
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-beauty-dark mb-4">Категории продуктов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий выбор косметики для ежедневного ухода и особых случаев
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  <Icon name={category.icon} className="h-5 w-5 text-beauty-accent" />
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between text-beauty-accent hover:bg-beauty-accent/10">
                  Смотреть все товары
                  <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
