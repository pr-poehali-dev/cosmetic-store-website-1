
import React from 'react';
import Icon from '@/components/ui/icon';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Бесплатная доставка',
    description: 'При заказе от 5000₽ доставка бесплатная в любой город России',
    icon: 'Truck',
  },
  {
    id: 2,
    title: 'Только оригиналы',
    description: 'Мы работаем напрямую с брендами и официальными дистрибьюторами',
    icon: 'BadgeCheck',
  },
  {
    id: 3,
    title: 'Бонусная программа',
    description: 'Получайте до 10% кэшбэка на бонусный счет за каждую покупку',
    icon: 'Gift',
  },
  {
    id: 4,
    title: 'Поддержка 24/7',
    description: 'Консультации специалистов и помощь с выбором в любое время',
    icon: 'HeadphonesIcon',
  },
];

const FeaturesList: React.FC = () => {
  return (
    <section className="py-16 bg-beauty-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-beauty-dark mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы стремимся обеспечить лучший сервис и качество продукции для наших клиентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-beauty-accent/10 flex items-center justify-center">
                <Icon name={feature.icon} className="h-6 w-6 text-beauty-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-beauty-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
