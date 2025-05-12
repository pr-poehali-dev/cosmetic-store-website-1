
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beauty-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">BeautyShop</h3>
            <p className="text-gray-300 mb-6">
              Ваш магазин качественной косметики и средств по уходу за кожей.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-beauty-accent hover:bg-white/10">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-beauty-accent hover:bg-white/10">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-beauty-accent hover:bg-white/10">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-beauty-accent hover:bg-white/10">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Категории</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/face" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Уход за лицом
                </Link>
              </li>
              <li>
                <Link to="/category/body" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Уход за телом
                </Link>
              </li>
              <li>
                <Link to="/category/makeup" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Макияж
                </Link>
              </li>
              <li>
                <Link to="/category/perfumes" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Ароматы
                </Link>
              </li>
              <li>
                <Link to="/category/hair" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Уход за волосами
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/loyalty" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Бонусная программа
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-beauty-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписка на новости</h4>
            <p className="text-gray-300 mb-4">
              Получайте первыми информацию о новинках и акциях
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-beauty-accent hover:bg-beauty-accent/90">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Контакты</h4>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Phone" className="h-4 w-4 text-beauty-accent" />
                <span className="text-gray-300">8 800 555 35 35</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-beauty-accent" />
                <span className="text-gray-300">info@beautyshop.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 BeautyShop. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
