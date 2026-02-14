import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

// Pages
import Home from './pages/client/Home'
import Products from './pages/client/Products'
import ProductDetail from './pages/client/ProductDetail'
import Blogs from './pages/client/Blogs'
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminBlogs from './pages/admin/Blogs'

// Components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      
      <Box sx={{ minHeight: '80vh' }}>
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blogs />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
        </Routes>
      </Box>
      <Footer />  
    </Box>
  )
}

export default App
