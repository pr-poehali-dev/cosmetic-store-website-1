
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Step, StepCircle, StepDescription, StepLabel, Stepper } from '@/components/ui/stepper';
import { products } from '@/data/productsData';
import Icon from '@/components/ui/icon';

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();
  
  // Имитация данных заказа
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[3], quantity: 2 },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки заказа
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true);
    }, 1500);
  };
  
  if (orderSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-medium mb-4">Заказ успешно оформлен!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Спасибо за ваш заказ! Номер вашего заказа: <strong>ORD-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              <br />Мы отправили детали заказа на вашу почту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-3 bg-beauty-accent text-white rounded-md hover:bg-beauty-accent/90"
                onClick={() => navigate('/')}
              >
                Вернуться на главную
              </button>
              <button 
                className="px-6 py-3 border border-beauty-accent text-beauty-accent rounded-md hover:bg-beauty-accent/10"
                onClick={() => navigate('/catalog')}
              >
                Продолжить покупки
              </button>
            </div>
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
        <h1 className="text-2xl md:text-3xl font-medium mb-6">Оформление заказа</h1>
        
        <Alert className="mb-6">
          <AlertDescription>
            Это демонстрационная страница. В реальном приложении здесь будет полноценное оформление заказа с системой оплаты.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckoutForm onSubmit={handleSubmit} />
            </div>
          </div>
          
          <div className="order-first lg:order-last">
            <OrderSummary items={cartItems} promoCode="BEAUTY10" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
