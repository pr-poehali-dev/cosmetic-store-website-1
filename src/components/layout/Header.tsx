import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-beauty-accent font-playfair">
                BeautyShop
              </span>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-beauty-accent transition-colors"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog"
                    className="text-gray-700 hover:text-beauty-accent transition-colors"
                  >
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link
                    to="/promotions"
                    className="text-gray-700 hover:text-beauty-accent transition-colors"
                  >
                    Акции
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-beauty-accent transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    className="text-gray-700 hover:text-beauty-accent transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <Input placeholder="Поиск товаров..." className="pr-8" />
              <Icon
                name="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Heart" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Link to="/cart">
                  <Icon name="ShoppingCart" className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-beauty-accent text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
