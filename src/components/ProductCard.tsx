import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
      <ul className="mt-2 list-disc list-inside">
        {product.benefits.map((benefit, index) => (
          <li key={index} className="text-gray-700">{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;