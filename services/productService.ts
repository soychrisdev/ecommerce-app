import axios from 'axios';

// Define the product interface
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export const ProductService = {

  getAllProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      throw error;
    }
  },

  getProductById: async (id: number): Promise<Product> => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      return response.data.products;
    } catch (error) {
      throw error;
    }
  }
};