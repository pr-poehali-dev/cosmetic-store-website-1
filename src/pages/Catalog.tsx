
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import ProductGrid from '@/components/catalog/ProductGrid';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';
import { products } from '@/data/productsData';

const Catalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>({
    priceRange: [0, 10000],
    brands: [],
    categories: []
  });
  const { toast } = useToast();
  
  // Имитация фильтрации (в реальном приложении это будет фильтрация из API)
  const filteredProducts = products.filter(product => {
    // Поиск по названию и бренду
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Фильтр по цене
    if (product.price < activeFilters.priceRange[0] || product.price > activeFilters.priceRange[1]) {
      return false;
    }
    
    // Фильтр по брендам (если выбраны)
    if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(product.brand.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const handleAddToCart = (product: any) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${product.brand})`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-medium">Каталог товаров</h1>
          <Button 
            variant="outline" 
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Icon name="Sliders" className="h-4 w-4" />
            Фильтры
          </Button>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" 
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery('')}
              >
                <Icon name="X" className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <CatalogFilters onFilterChange={setActiveFilters} />
          </div>
          
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Найдено товаров: {filteredProducts.length}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 hidden md:inline">Сортировать:</span>
                <select className="py-1 px-2 border rounded-md text-sm">
                  <option value="popular">По популярности</option>
                  <option value="price_asc">По возрастанию цены</option>
                  <option value="price_desc">По убыванию цены</option>
                  <option value="rating">По рейтингу</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Icon name="Search" className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
                <p className="text-gray-500 mb-4">Попробуйте изменить параметры поиска или фильтры</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilters({
                      priceRange: [0, 10000],
                      brands: [],
                      categories: []
                    });
                  }}
                >
                  Сбросить все фильтры
                </Button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Загрузить еще</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
