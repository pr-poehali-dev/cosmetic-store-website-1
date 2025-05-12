
import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

type ProductGalleryProps = {
  mainImage: string;
  galleryImages: string[];
  productName: string;
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, galleryImages, productName }) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const allImages = [mainImage, ...galleryImages];
  
  return (
    <div className="product-gallery">
      <div className="mb-4 relative overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={selectedImage} 
          alt={productName} 
          className="w-full aspect-square object-cover"
        />
        
        <button 
          className="absolute top-1/2 left-2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm text-beauty-dark"
          onClick={() => {
            const currentIndex = allImages.indexOf(selectedImage);
            const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
            setSelectedImage(allImages[prevIndex]);
          }}
        >
          <Icon name="ChevronLeft" className="h-5 w-5" />
        </button>
        
        <button 
          className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm text-beauty-dark"
          onClick={() => {
            const currentIndex = allImages.indexOf(selectedImage);
            const nextIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
            setSelectedImage(allImages[nextIndex]);
          }}
        >
          <Icon name="ChevronRight" className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {allImages.map((image, index) => (
          <button 
            key={index} 
            className={`rounded-md overflow-hidden border-2 transition-all ${selectedImage === image ? 'border-beauty-accent' : 'border-transparent hover:border-gray-300'}`}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Изображение ${index + 1} - ${productName}`} 
              className="w-full aspect-square object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
