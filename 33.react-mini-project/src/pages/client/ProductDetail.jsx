import { useParams, Link } from 'react-router-dom'
import { 
  Box, 
  Container, 
  Grid2 as Grid, 
  Typography, 
  Button, 
  Card, 
  CardMedia,
  IconButton,
  TextField
} from '@mui/material'
import { motion } from 'framer-motion'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const MotionBox = motion.create(Box)
const MotionGrid = motion.create(Grid)
const MotionCard = motion.create(Card)

// Mock data
const mockProducts = [
  { id: 1, name: "Bell Pepper", category: "Vegetables", price: 80, oldPrice: 120, discount: 30, image: "/images/product-1.jpg", description: "Fresh organic bell peppers, rich in vitamins and perfect for salads." },
  { id: 2, name: "Strawberry", category: "Fruits", price: 120, oldPrice: 120, discount: 0, image: "/images/product-2.jpg", description: "Sweet and juicy organic strawberries, hand-picked for best quality." },
  { id: 3, name: "Green Beans", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-3.jpg", description: "Crisp and fresh green beans, perfect for healthy meals." },
  { id: 4, name: "Purple Cabbage", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-4.jpg", description: "Nutritious purple cabbage, great for salads and cooking." },
  { id: 5, name: "Tomato", category: "Vegetables", price: 80, oldPrice: 120, discount: 30, image: "/images/product-5.jpg", description: "Ripe organic tomatoes, full of flavor and antioxidants." },
  { id: 6, name: "Broccoli", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-6.jpg", description: "Fresh broccoli florets, packed with nutrients." },
  { id: 7, name: "Carrots", category: "Vegetables", price: 120, oldPrice: 120, discount: 0, image: "/images/product-7.jpg", description: "Crunchy organic carrots, sweet and full of vitamins." },
  { id: 8, name: "Fruit Juice", category: "Juice", price: 120, oldPrice: 120, discount: 0, image: "/images/product-8.jpg", description: "100% natural fruit juice, no preservatives added." },
]

// animasiya
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

function ProductDetail() {
  const { id } = useParams()
  const product = mockProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <MotionBox
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4">Product not found</Typography>
          <Button component={Link} to="/shop" startIcon={<ArrowBackIcon />} sx={{ mt: 2, color: '#82ae46' }}>
            Back to Shop
          </Button>
        </MotionBox>
      </Container>
    )
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Back Button */}
      <MotionBox
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Button 
          component={Link} 
          to="/shop" 
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3, color: '#82ae46' }}
        >
          Back to Shop
        </Button>
      </MotionBox>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionCard 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ overflow: 'hidden' }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ 
                height: { xs: 300, sm: 400, md: 500 },
                objectFit: 'cover'
              }}
            />
          </MotionCard>
        </Grid>

        {/* Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionBox 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ p: { xs: 0, md: 2 } }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              {product.category}
            </Typography>
            
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2, 
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }
              }}
            >
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <Typography variant="h4" color="#82ae46" fontWeight="bold">
                ${product.price}
              </Typography>
              {product.oldPrice > product.price && (
                <Typography variant="h6" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                  ${product.oldPrice}
                </Typography>
              )}
              {product.discount > 0 && (
                <Typography 
                  variant="body1" 
                  sx={{ 
                    backgroundColor: '#82ae46', 
                    color: 'white', 
                    px: 1.5, 
                    py: 0.5, 
                    borderRadius: 1 
                  }}
                >
                  -{product.discount}%
                </Typography>
              )}
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              {product.description}
            </Typography>

            {/* Quantity */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="body1" fontWeight="medium">Quantity:</Typography>
              <TextField
                type="number"
                defaultValue={1}
                inputProps={{ min: 1, max: 10 }}
                size="small"
                sx={{ width: 80 }}
              />
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{ 
                  backgroundColor: '#82ae46', 
                  px: { xs: 3, md: 4 }, 
                  py: 1.5,
                  '&:hover': { backgroundColor: '#6b8c3a' }
                }}
              >
                Add to Cart
              </Button>
              
              <IconButton 
                sx={{ 
                  border: '1px solid #82ae46', 
                  color: '#82ae46',
                  p: 1.5
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetail