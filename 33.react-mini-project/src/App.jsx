import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

// Pages
import Home from './pages/client/Home'
import Products from './pages/client/Products'
import ProductDetail from './pages/client/ProductDetail'
import Blogs from './pages/client/Blogs'
import Cart from './pages/client/Cart'  
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminBlogs from './pages/admin/Blogs'
import About from './pages/client/About'

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
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/about" element={<About />} /> 
          
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