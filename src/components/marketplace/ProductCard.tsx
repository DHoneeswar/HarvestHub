import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types/marketplace';

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
  isOrganic,
  season,
  unit,
  rating,
  onAddToCart,
  ...product
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {isOrganic && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              Organic
            </span>
          )}
          {season !== 'All Season' && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
              {season}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600">₹{price}/{unit}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;