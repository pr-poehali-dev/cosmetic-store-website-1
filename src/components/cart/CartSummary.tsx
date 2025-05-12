
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartItemType } from './CartItem';

type CartSummaryProps = {
  items: CartItemType[];
  promoCode: string;
  onPromoCodeChange: (code: string) => void;
  onApplyPromoCode: () => void;
};

const CartSummary: React.FC<CartSummaryProps> = ({ 
  items, 
  promoCode, 
  onPromoCodeChange, 
  onApplyPromoCode 
}) => {
  // Расчеты для суммы корзины
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const oldSubtotal = items.reduce((sum, item) => sum + (item.oldPrice || item.price) * item.quantity, 0);
  const discount = oldSubtotal - subtotal;
  const shipping = subtotal >= 5000 ? 0 : 350;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Ваш заказ</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
          <span>{subtotal} ₽</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-beauty-accent">
            <span>Скидка</span>
            <span>-{discount} ₽</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Доставка</span>
          <span>{shipping === 0 ? 'Бесплатно' : `${shipping} ₽`}</span>
        </div>
        
        <div className="pt-3 border-t">
          <div className="flex justify-between font-medium text-lg">
            <span>Итого</span>
            <span>{total} ₽</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Промокод</h4>
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Введите промокод" 
            value={promoCode}
            onChange={(e) => onPromoCodeChange(e.target.value)}
          />
          <Button 
            variant="outline" 
            onClick={onApplyPromoCode}
            className="whitespace-nowrap"
          >
            Применить
          </Button>
        </div>
      </div>
      
      <Button 
        className="w-full bg-beauty-accent hover:bg-beauty-accent/90 text-white mb-3"
        asChild
      >
        <Link to="/checkout">Оформить заказ</Link>
      </Button>
      
      <p className="text-xs text-center text-gray-500">
        Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями публичной оферты
      </p>
    </div>
  );
};

export default CartSummary;
