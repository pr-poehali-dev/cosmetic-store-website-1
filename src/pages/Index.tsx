
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturesList from '@/components/home/FeaturesList';
import PopularProducts from '@/components/home/PopularProducts';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategoriesSection />
        <PopularProducts />
        <FeaturesList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
