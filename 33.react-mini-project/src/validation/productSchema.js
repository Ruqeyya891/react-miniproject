import * as yup from 'yup'

export const productSchema = yup.object({
  name: yup
    .string()
    .required('Product name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  category: yup
    .string()
    .required('Category is required')
    .oneOf(['Vegetables', 'Fruits', 'Juice', 'Dried'], 'Invalid category'),
  
  price: yup
    .number()
    .required('Price is required')
    .min(0, 'Price must be positive')
    .max(10000, 'Price is too high'),
  
  oldPrice: yup
    .number()
    .min(0, 'Old price must be positive')
    .max(10000, 'Old price is too high')
    .nullable(),
  
  discount: yup
    .number()
    .min(0, 'Discount cannot be negative')
    .max(100, 'Discount cannot exceed 100%')
    .nullable(),
  
  image: yup
    .string()
    .url('Must be a valid URL')
    .required('Image URL is required')
})

export default productSchema