import * as yup from 'yup'

export const blogSchema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters'),
  
  description: yup
    .string()
    .required('Description is required')
    .min(20, 'Description must be at least 20 characters')
    .max(500, 'Description must be less than 500 characters'),
  
  date: yup
    .date()
    .required('Date is required')
    .max(new Date(), 'Date cannot be in the future'),
  
  position: yup
    .string()
    .required('Category is required')
    .oneOf(['Health', 'Tips', 'Recipes', 'News'], 'Invalid category'),
  
  image: yup
    .string()
    .url('Must be a valid URL')
    .nullable()
})

export default blogSchema