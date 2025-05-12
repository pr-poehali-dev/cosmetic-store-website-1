
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterProps = {
  onFilterChange: (filters: any) => void;
  className?: string;
}

const CatalogFilters: React.FC<FilterProps> = ({ onFilterChange, className }) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const brands = [
    { id: 'natura', label: 'Natura' },
    { id: 'pureskin', label: 'PureSkin' },
    { id: 'coverglow', label: 'CoverGlow' },
    { id: 'colorpro', label: 'ColorPro' },
    { id: 'beautyyou', label: 'BeautyYou' },
  ];
  
  const categories = [
    { id: 'face', label: 'Уход за лицом' },
    { id: 'body', label: 'Уход за телом' },
    { id: 'makeup', label: 'Макияж' },
    { id: 'perfume', label: 'Ароматы' },
    { id: 'hair', label: 'Уход за волосами' },
  ];
  
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      const newBrands = prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand];
      
      onFilterChange({
        priceRange,
        brands: newBrands,
        categories: selectedCategories
      });
      
      return newBrands;
    });
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category];
      
      onFilterChange({
        priceRange,
        brands: selectedBrands,
        categories: newCategories
      });
      
      return newCategories;
    });
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onFilterChange({
      priceRange: value,
      brands: selectedBrands,
      categories: selectedCategories
    });
  };
  
  const clearAllFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setSelectedCategories([]);
    onFilterChange({
      priceRange: [0, 10000],
      brands: [],
      categories: []
    });
  };
  
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Фильтры</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearAllFilters}
          className="text-beauty-accent hover:text-beauty-accent/80"
        >
          Очистить все
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={["price", "brands", "categories"]}>
        <AccordionItem value="price">
          <AccordionTrigger className="py-3">Цена</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 py-2">
              <Slider 
                defaultValue={[0, 10000]} 
                max={10000} 
                step={100} 
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <div className="w-[45%]">
                  <Label htmlFor="price-min">От</Label>
                  <Input 
                    id="price-min" 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => handlePriceChange([parseInt(e.target.value), priceRange[1]])}
                    className="mt-1"
                  />
                </div>
                <div className="w-[45%]">
                  <Label htmlFor="price-max">До</Label>
                  <Input 
                    id="price-max" 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brands">
          <AccordionTrigger className="py-3">Бренды</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand.id}`} 
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={() => handleBrandChange(brand.id)}
                  />
                  <Label 
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {brand.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="categories">
          <AccordionTrigger className="py-3">Категории</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label 
                    htmlFor={`category-${category.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6">
        <Button className="w-full bg-beauty-accent hover:bg-beauty-accent/90">
          Применить фильтры
        </Button>
      </div>
    </div>
  );
};

export default CatalogFilters;
