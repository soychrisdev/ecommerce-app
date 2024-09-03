
import { ProductService } from '@/services/productService'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useCartStore } from '@/store/cart/cart.store'
import ProductItem from './ProductItem'


export const revalidate = 3600

export default async function ProductList() {

  const products = await ProductService.getAllProducts()
  if (!products) {
    return <div>Loading...</div>
  }
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  )
}
