
import { Product } from '@/components/catalog/ProductCard';

// Расширенный тип продукта для детальной страницы
export type DetailedProduct = Product & {
  description: string;
  ingredients: string;
  usage: string;
  volume: string;
  galleryImages: string[];
};

// Данные о продуктах
export const products: DetailedProduct[] = [
  {
    id: 1,
    name: 'Увлажняющий крем для лица',
    brand: 'Natura',
    price: 2490,
    oldPrice: 2990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
    description: 'Интенсивно увлажняющий крем для лица с гиалуроновой кислотой, подходит для всех типов кожи. Легкая нежирная текстура мгновенно впитывается и обеспечивает до 24 часов увлажнения.',
    ingredients: 'Вода, глицерин, масло ши, сквалан, гиалуроновая кислота, пантенол, аллантоин, токоферол (витамин Е), ниацинамид, экстракт алоэ вера, масло жожоба.',
    usage: 'Нанесите небольшое количество крема на очищенную кожу лица, шеи и декольте утром и/или вечером. Избегайте области вокруг глаз.',
    volume: '50 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1614859324996-f471243148e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1586467191399-d70e6c13b13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 2,
    name: 'Сыворотка с гиалуроновой кислотой',
    brand: 'PureSkin',
    price: 3490,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611930022073-84a3bef4ecb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    description: 'Интенсивно увлажняющая сыворотка с низкомолекулярной гиалуроновой кислотой проникает в глубокие слои кожи, восстанавливает гидробаланс и предотвращает потерю влаги.',
    ingredients: 'Вода, бутиленгликоль, глицерин, гиалуроновая кислота (разной молекулярной массы), пантенол, ниацинамид, экстракт центеллы азиатской, экстракт зеленого чая.',
    usage: 'Нанесите 2-3 капли на очищенную кожу лица и шеи, слегка похлопывающими движениями. Используйте утром и вечером перед нанесением крема.',
    volume: '30 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bfc8cb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1616395370233-fe558e74c738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 3,
    name: 'Тональный крем с SPF защитой',
    brand: 'CoverGlow',
    price: 1990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'Легкий тональный крем с SPF 30 обеспечивает естественное покрытие, выравнивает тон кожи и защищает от UVA/UVB лучей. Некомедогенная формула подходит для всех типов кожи.',
    ingredients: 'Вода, циклопентасилоксан, диоксид титана, оксид цинка, глицерин, диметикон, ниацинамид, токоферол (витамин Е), экстракт ромашки, экстракт календулы.',
    usage: 'Нанесите небольшое количество средства на кожу лица и распределите кончиками пальцев, спонжем или кистью. Для более плотного покрытия нанесите второй слой.',
    volume: '30 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1564415043656-11a42a7c2c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 4,
    name: 'Палетка теней для век',
    brand: 'ColorPro',
    price: 3290,
    oldPrice: 3990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1583241119307-8ac6ed1d11df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
    description: 'Палетка из 12 оттенков теней для век с матовым, сатиновым и шиммерным финишем. Высокопигментированная формула обеспечивает насыщенный цвет и стойкость до 12 часов.',
    ingredients: 'Тальк, слюда, диоксид кремния, диметикон, оксиды железа, красители, CI 77891, CI 77492, CI 77491, CI 77499.',
    usage: 'Нанесите тени на веко с помощью кисти или аппликатора. Для более насыщенного цвета нанесите базу под тени или используйте влажный аппликатор.',
    volume: '12 оттенков x 1,5 г',
    galleryImages: [
      'https://images.unsplash.com/photo-1596704017254-9759879ec631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1599733594230-6b823276abcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 5,
    name: 'Маска для волос восстанавливающая',
    brand: 'Natura',
    price: 1790,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'Интенсивно восстанавливающая маска для поврежденных волос с маслами арганы и кокоса, протеинами кератина и витаминным комплексом. Возвращает волосам силу, блеск и эластичность.',
    ingredients: 'Вода, цетеариловый спирт, бегентримониум хлорид, глицерин, масло арганы, масло кокоса, гидролизированный кератин, пантенол, экстракт алоэ вера, витаминный комплекс.',
    usage: 'Нанесите маску на влажные вымытые волосы, распределите по всей длине, избегая корней. Оставьте на 5-10 минут, затем тщательно смойте. Используйте 1-2 раза в неделю.',
    volume: '250 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1615396899484-c4c290bf6186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1608248544395-2767a968a63a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 6,
    name: 'Гель для умывания с салициловой кислотой',
    brand: 'PureSkin',
    price: 1290,
    oldPrice: 1590,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
    description: 'Нежный гель для умывания с салициловой кислотой эффективно очищает кожу, удаляет загрязнения и излишки себума, не пересушивая кожу. Идеально подходит для комбинированной и жирной кожи.',
    ingredients: 'Вода, лаурил сульфат натрия, кокамидопропил бетаин, глицерин, салициловая кислота (2%), ниацинамид, пантенол, аллантоин, экстракт гамамелиса, экстракт чайного дерева.',
    usage: 'Нанесите небольшое количество геля на влажную кожу, помассируйте круговыми движениями, затем тщательно смойте теплой водой. Используйте утром и вечером.',
    volume: '150 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1612412840510-ece7586aebc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1616395371671-9c73887ca6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 7,
    name: 'Матовая помада для губ',
    brand: 'CoverGlow',
    price: 990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586439702132-81dce63d272e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    description: 'Стойкая матовая помада с интенсивным пигментом и ухаживающими компонентами. Не сушит губы, обеспечивает комфортное нанесение и стойкость до 8 часов.',
    ingredients: 'Изододекан, диметикон, силика, масло ши, воск пчелиный, витамин Е, пигменты.',
    usage: 'Нанесите помаду на сухие чистые губы, при желании предварительно используйте контурный карандаш.',
    volume: '3,5 г',
    galleryImages: [
      'https://images.unsplash.com/photo-1586439702132-81dce63d272e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1590156562583-e932e93d0cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
  {
    id: 8,
    name: 'Парфюмерная вода "Цветочный шлейф"',
    brand: 'BeautyYou',
    price: 4990,
    oldPrice: 5990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1610113284525-564d0856efcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isOnSale: true,
    description: 'Изысканный цветочный аромат с нотами жасмина, розы и пиона, дополненный теплыми аккордами амбры, мускуса и ванили. Стойкость до 8 часов.',
    ingredients: 'Этиловый спирт, парфюмерная композиция, вода.',
    usage: 'Распылите на пульсовые точки: запястья, шею, область за ушами. Избегайте попадания в глаза.',
    volume: '50 мл',
    galleryImages: [
      'https://images.unsplash.com/photo-1610113284525-564d0856efcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1616486370656-8eff78505cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    ],
  },
];

// Функция получения товара по ID
export const getProductById = (id: number): DetailedProduct | undefined => {
  return products.find(product => product.id === id);
};

// Функция получения похожих товаров
export const getRelatedProducts = (id: number, limit: number = 4): Product[] => {
  return products
    .filter(product => product.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};
