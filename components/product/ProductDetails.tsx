"use client"
import { ProductService } from '@/services/productService'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetails() {
  const { slug }: { slug: string } = useParams()
  const [productById, setProductById] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const productByIdResponse = await ProductService.getProductById(parseInt(slug))
      setProductById(productByIdResponse)
    }

    fetchProduct()
  }, [slug])

  if (!productById) return <div>Loading...</div>

  return (
    <div>
      {JSON.stringify(slug)}
      <div>{JSON.stringify(productById)}</div>
      ProductDetails
    </div>
  )
}