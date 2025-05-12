
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from '@/components/ui/icon';

type CheckoutFormProps = {
  onSubmit: (e: React.FormEvent) => void;
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <h2 className="text-xl font-medium mb-4">Контактная информация</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Имя <span className="text-red-500">*</span></Label>
            <Input id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Фамилия <span className="text-red-500">*</span></Label>
            <Input id="lastName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон <span className="text-red-500">*</span></Label>
            <Input id="phone" type="tel" required />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium mb-4">Способ доставки</h2>
        <RadioGroup defaultValue="courier">
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="courier" id="courier" />
            <Label htmlFor="courier" className="font-medium">
              Курьерская доставка
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="pickup" id="pickup" />
            <Label htmlFor="pickup" className="font-medium">
              Самовывоз из магазина
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="post" id="post" />
            <Label htmlFor="post" className="font-medium">
              Почта России
            </Label>
          </div>
        </RadioGroup>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">Город <span className="text-red-500">*</span></Label>
            <Input id="city" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">Индекс <span className="text-red-500">*</span></Label>
            <Input id="zip" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Адрес <span className="text-red-500">*</span></Label>
            <Input id="address" required />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium mb-4">Способ оплаты</h2>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="font-medium flex items-center gap-2">
              Банковская карта
              <div className="flex">
                <Icon name="CreditCard" className="h-5 w-5 text-gray-500" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="font-medium">
              Наличными при получении
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h2 className="text-xl font-medium mb-4">Дополнительно</h2>
        <div className="space-y-2">
          <Label htmlFor="comment">Комментарий к заказу</Label>
          <Textarea 
            id="comment" 
            placeholder="Например, особые пожелания по доставке"
            className="h-24"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full md:w-auto bg-beauty-accent hover:bg-beauty-accent/90 text-white py-6 text-lg"
      >
        Подтвердить заказ
      </Button>
    </form>
  );
};

export default CheckoutForm;
