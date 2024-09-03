"use client"
import { Product } from '@/services/productService'
import { useCartStore } from '@/store/cart/cart.store';
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button';

export default function ProductItem({ product: { id, images, title, price, description } }: { product: Product }) {
  const { add: handleAddToCart } = useCartStore();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleAddToCart({ id, title, description, price, images });
  };

  return (
    <>
      <div key={id} className="bg-background rounded-lg overflow-hidden shadow-lg">
        <Link href={`/product/${id}`} prefetch={false} className="block">
          <img
            src={images[0]}
            alt="Product Image"
            width={400}
            height={400}
            className="w-full h-64 object-cover"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />

          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-medium">${price}</span>
              <Button size="sm" variant="outline" onClick={handleButtonClick}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Link>
      </div >
    </>
  )
}
