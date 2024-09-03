"use client"
import { useCartStore } from '@/store/cart/cart.store'
import React, { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

export default function CartList() {
  const cart = useCartStore(state => state.cart)
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div className="bg-background p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid gap-6 max-h-96 overflow-y-auto">
        {cart.map(({ count, description, id, images, price, title }) => (
          <div key={id} className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
            <img
              src={images[0]}
              alt={title}
              width={80}
              height={80}
              className="rounded-md object-cover"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
            />
            <div className="grid gap-1">
              <h3 className="font-medium">{title}</h3>
              <div className="text-muted-foreground text-sm">Quantity: {count}</div>
            </div>
            <div className="text-right font-medium">${(price * count).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <Separator className="my-6" />
      <div className="flex justify-between items-center font-medium text-lg">
        <span>Total:</span>
        <span>${0}</span>
      </div>
      <Separator className="my-6" />
      <div className="flex justify-end">
        <Button>Checkout</Button>
      </div>
    </div>

  )
}
