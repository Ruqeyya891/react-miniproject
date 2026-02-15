import axios from 'axios'
import { API_URL } from '../constants/api'

const BLOG_URL = `${API_URL}/blogs`

// Bütün blogları gətirir
export const getBlogs = async () => {
  try {
    const response = await axios.get(BLOG_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

// Tək blog gətirit
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${BLOG_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching blog:', error)
    throw error
  }
}

// Yeni blog əlavə edir
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(BLOG_URL, blogData)
    return response.data
  } catch (error) {
    console.error('Error creating blog:', error)
    throw error
  }
}

// Blogu yeniləyir
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(`${BLOG_URL}/${id}`, blogData)
    return response.data
  } catch (error) {
    console.error('Error updating blog:', error)
    throw error
  }
}

// Blogu silir
export const deleteBlog = async (id) => {
  try {
    await axios.delete(`${BLOG_URL}/${id}`)
    return id
  } catch (error) {
    console.error('Error deleting blog:', error)
    throw error
  }
}