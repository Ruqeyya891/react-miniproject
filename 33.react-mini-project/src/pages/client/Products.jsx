import { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  TextField, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select,
  IconButton
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// Mock data - sonra API-dən gələcək
const mockProducts = [
  { id: 1, name: "Bell Pepper", category: "Vegetables", price: 80, oldPrice: 120, discount: 30, image: "/images/product-1.jpg" },
  { id: 2, name: "Strawberry", category: "Fruits", price: 120, oldPrice: 120, discount: 0, image: "/images/product-2.jpg" },
  { id: 3, name: "Green Beans", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-3.jpg" },
  { id: 4, name: "Purple Cabbage", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-4.jpg" },
  { id: 5, name: "Tomato", category: "Vegetables", price: 80, oldPrice: 120, discount: 30, image: "/images/product-5.jpg" },
  { id: 6, name: "Broccoli", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-6.jpg" },
  { id: 7, name: "Carrots", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-7.jpg" },
  { id: 8, name: "Fruit Juice", category: "Juice", price: 120, oldPrice: 120, discount: 0, image: "/images/product-8.jpg" },
]

function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
        Our Products
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
        We offer the best organic products
      </Typography>

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <TextField
          label="Search products..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 200 }}
        />
        
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} label="Category" onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Fruits">Fruits</MenuItem>
            <MenuItem value="Juice">Juice</MenuItem>
            <MenuItem value="Dried">Dried</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sort} label="Sort By" onChange={(e) => setSort(e.target.value)}>
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
            <MenuItem value="name-asc">Name: A-Z</MenuItem>
            <MenuItem value="name-desc">Name: Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {mockProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ position: 'relative', '&:hover': { boxShadow: 6 } }}>
              {/* Discount Badge */}
              {product.discount > 0 && (
                <Box sx={{ 
                  position: 'absolute', 
                  top: 10, 
                  left: 10, 
                  backgroundColor: '#82ae46', 
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  zIndex: 1
                }}>
                  {product.discount}%
                </Box>
              )}

              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />

              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {product.category}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography variant="h6" color="#82ae46" fontWeight="bold">
                    ${product.price}
                  </Typography>
                  {product.oldPrice > product.price && (
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                      ${product.oldPrice}
                    </Typography>
                  )}
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <IconButton sx={{ color: '#82ae46', border: '1px solid #82ae46' }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <Button 
                    variant="contained" 
                    startIcon={<ShoppingCartIcon />}
                    sx={{ backgroundColor: '#82ae46', '&:hover': { backgroundColor: '#6b8c3a' } }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products