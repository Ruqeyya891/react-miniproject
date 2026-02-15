// API Base URL
export const API_URL = 'http://localhost:3001';

// Endpoints
export const ENDPOINTS = {
  PRODUCTS: '/products',
  BLOGS: '/blogs',
};

// Full URLs
export const getProductUrl = () => `${API_URL}${ENDPOINTS.PRODUCTS}`;
export const getProductByIdUrl = (id) => `${API_URL}${ENDPOINTS.PRODUCTS}/${id}`;
export const getBlogUrl = () => `${API_URL}${ENDPOINTS.BLOGS}`;
export const getBlogByIdUrl = (id) => `${API_URL}${ENDPOINTS.BLOGS}/${id}`;