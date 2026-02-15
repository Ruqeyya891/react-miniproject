import axios from 'axios'
import { API_URL } from '../constants/api'

const PRODUCT_URL = `${API_URL}/products`

// Bütün məhsulları gətirir
export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCT_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Tək məhsul gətirir
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${PRODUCT_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

// Yeni məhsul əlavə edir
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(PRODUCT_URL, productData)
    return response.data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}

// Məhsulu yeniləyir
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${PRODUCT_URL}/${id}`, productData)
    return response.data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

// Məhsulu silir
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${PRODUCT_URL}/${id}`)
    return id
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}