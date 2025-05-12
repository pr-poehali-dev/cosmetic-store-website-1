
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-beauty-light py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beauty-dark mb-4">
              Красота начинается с ухода
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Откройте для себя профессиональную косметику, которая подчеркнет вашу естественную красоту и позаботится о здоровье вашей кожи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-beauty-accent hover:bg-opacity-90 text-white font-medium px-8 py-2.5">
                Перейти в каталог
              </Button>
              <Button variant="outline" className="border-beauty-accent text-beauty-accent hover:bg-beauty-accent hover:text-white">
                Акции месяца
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-beauty-peach rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-beauty-purple rounded-full opacity-60 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Косметические продукты" 
                className="relative z-10 w-full max-w-lg rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-beauty-pink rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-beauty-purple rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroBanner;
