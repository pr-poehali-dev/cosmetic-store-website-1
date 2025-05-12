
import React from 'react';
import { CartItemType } from '@/components/cart/CartItem';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

type OrderSummaryProps = {
  items: CartItemType[];
  promoCode?: string;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, promoCode }) => {
  // Расчеты для суммы заказа
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const oldSubtotal = items.reduce((sum, item) => sum + (item.oldPrice || item.price) * item.quantity, 0);
  const discount = oldSubtotal - subtotal;
  const promoDiscount = promoCode ? Math.round(subtotal * 0.1) : 0; // Например, 10% скидка по промокоду
  const shipping = subtotal >= 5000 ? 0 : 350;
  const total = subtotal - promoDiscount + shipping;
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Ваш заказ</h3>
      
      <div className="space-y-4 mb-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{item.name}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{item.quantity} шт.</span>
                <span>{item.price * item.quantity} ₽</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
          <span>{subtotal} ₽</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-beauty-accent">
            <span>Скидка на товары</span>
            <span>-{discount} ₽</span>
          </div>
        )}
        
        {promoCode && (
          <div className="flex justify-between text-beauty-accent">
            <span>Промокод {promoCode}</span>
            <span>-{promoDiscount} ₽</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Доставка</span>
          <span>{shipping === 0 ? 'Бесплатно' : `${shipping} ₽`}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-medium text-lg">
        <span>Итого к оплате</span>
        <span>{total} ₽</span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-dashed flex items-center gap-2 text-sm text-gray-600">
        <Icon name="Info" className="h-4 w-4" />
        <p>Оплачивая заказ, вы соглашаетесь с условиями публичной оферты</p>
      </div>
    </div>
  );
};

export default OrderSummary;
