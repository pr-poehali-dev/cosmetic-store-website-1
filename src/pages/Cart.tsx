
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartItem, { CartItemType } from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { products } from '@/data/productsData';

const Cart: React.FC = () => {
  // В реальном приложении эти данные должны храниться в глобальном состоянии (Redux, Context API)
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Имитация загрузки данных корзины
  useEffect(() => {
    // Имитация получения корзины с сервера
    const timeout = setTimeout(() => {
      // Добавляем несколько товаров в корзину для демонстрации
      setCartItems([
        { ...products[0], quantity: 1 },
        { ...products[3], quantity: 2 },
      ]);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const handleApplyPromoCode = () => {
    // Здесь должна быть проверка промокода на сервере
    if (promoCode.trim() === '') {
      return;
    }
    
    // Имитация применения промокода
    alert(`Промокод ${promoCode} применен!`);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-beauty-accent"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-6">Корзина</h1>
          
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Icon name="ShoppingCart" className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-500 mb-6">Добавьте товары из каталога, чтобы оформить заказ</p>
            <Button asChild>
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-medium mb-6">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Товары в корзине</h2>
                <Button 
                  variant="ghost" 
                  className="text-beauty-accent hover:text-beauty-accent/80"
                  onClick={() => setCartItems([])}
                >
                  Очистить корзину
                </Button>
              </div>
              
              <Separator className="mb-4" />
              
              <div>
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link to="/catalog">
                    <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                    Продолжить покупки
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <CartSummary 
              items={cartItems} 
              promoCode={promoCode}
              onPromoCodeChange={setPromoCode}
              onApplyPromoCode={handleApplyPromoCode}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
