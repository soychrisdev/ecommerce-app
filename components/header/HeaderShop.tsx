
"use client"
import { ShoppingCartIcon } from '@/icons/ShoppingCartIcon'
import { useCartStore } from '@/store/cart/cart.store';
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'

export default function HeaderShop() {
  const { count } = useCartStore();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <Link href="/cart" className="relative" prefetch={false}>
      <ShoppingCartIcon className="h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-xs font-medium">
        {count()}
      </span>
    </Link>

  )
}
