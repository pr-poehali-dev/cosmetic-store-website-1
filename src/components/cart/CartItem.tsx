
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Product } from '@/components/catalog/ProductCard';

export type CartItemType = Product & {
  quantity: number;
};

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      onUpdateQuantity(item.id, value);
    }
  };
  
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4 border-b">
      <div className="sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="text-sm text-gray-500 mb-1">{item.brand}</div>
        <h3 className="text-base font-medium mb-2">{item.name}</h3>
        
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="flex items-center border rounded-md">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-r-none text-gray-500"
              onClick={decreaseQuantity}
            >
              <Icon name="Minus" className="h-3 w-3" />
            </Button>
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-12 h-8 text-center border-0 p-0"
            />
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-l-none text-gray-500"
              onClick={increaseQuantity}
            >
              <Icon name="Plus" className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-medium">{item.price * item.quantity} ₽</span>
            {item.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{item.oldPrice * item.quantity} ₽</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex sm:flex-col items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-gray-400 hover:text-beauty-accent"
        >
          <Icon name="Heart" className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-gray-400 hover:text-red-500"
          onClick={() => onRemove(item.id)}
        >
          <Icon name="Trash2" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
