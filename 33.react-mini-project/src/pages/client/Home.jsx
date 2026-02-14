import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StarIcon from '@mui/icons-material/Star'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)
const MotionCard = motion.create(Card)

function Home() {
  const features = [
    { icon: LocalShippingIcon, title: 'Free Shipping', desc: 'On order over $100' },
    { icon: RestaurantIcon, title: 'Always Fresh', desc: 'Product well package' },
    { icon: StarIcon, title: 'Superior Quality', desc: 'Quality products' },
    { icon: SupportAgentIcon, title: 'Support', desc: '24/7 Support' },
  ]

  const categories = [
    { name: 'Vegetables', image: '/images/product-1.jpg' },
    { name: 'Fruits', image: '/images/product-2.jpg' },
    { name: 'Juice', image: '/images/product-8.jpg' },
    { name: 'Dried', image: '/images/product-4.jpg' },
  ]

  const products = [
    { id: 1, name: "Bell Pepper", price: 80, oldPrice: 120, image: "/images/product-1.jpg" },
    { id: 2, name: "Strawberry", price: 120, image: "/images/product-2.jpg" },
    { id: 3, name: "Green Beans", price: 120, image: "/images/product-3.jpg" },
    { id: 4, name: "Purple Cabbage", price: 120, image: "/images/product-4.jpg" },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          height: { xs: '70vh', md: '90vh' },
          backgroundImage: 'url(/images/bg_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
          <MotionTypography 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              textTransform: 'uppercase',
              letterSpacing: 2
            }}
          >
            100% Fresh & Organic Foods
          </MotionTypography>
          
          <MotionTypography 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            variant="h5" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.1rem', sm: '1.5rem' }
            }}
          >
            We deliver organic vegetables & fruits
          </MotionTypography>
          
          <MotionBox
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button 
              variant="contained" 
              component={Link} 
              to="/shop"
              sx={{ 
                backgroundColor: '#82ae46', 
                px: 4, 
                py: 1.5,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderRadius: 30,
                textTransform: 'uppercase',
                letterSpacing: 1,
                '&:hover': { backgroundColor: '#6b8c3a' }
              }}
            >
              View Details
            </Button>
          </MotionBox>
        </Box>
      </MotionBox>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MotionBox 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                sx={{ textAlign: 'center', p: 3 }}
              >
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <feature.icon sx={{ fontSize: 40, color: '#82ae46' }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 }, pb: { xs: 4, md: 8 } }}>
        <MotionTypography 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 4, md: 6 }, 
            fontWeight: 'bold',
            fontSize: { xs: '1.75rem', md: '2.125rem' }
          }}
        >
          Categories
        </MotionTypography>
        
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {categories.map((cat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MotionCard 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                component={Link}
                to="/shop"
                sx={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                <CardMedia
                  component="img"
                  image={cat.image}
                  alt={cat.name}
                  sx={{ 
                    height: { xs: 200, sm: 250, md: 300 },
                    objectFit: 'cover'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  backgroundColor: 'rgba(130, 174, 70, 0.9)',
                  p: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="h6" color="white">{cat.name}</Typography>
                </Box>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="xl">
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 2, md: 2 }, 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.125rem' }
            }}
          >
            Featured Products
          </MotionTypography>
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="body1" 
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 4, md: 6 }
            }}
          >
            Our most popular products
          </MotionTypography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {products.map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <MotionCard 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  sx={{ 
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      height: { xs: 250, md: 300 },
                      objectFit: 'cover'
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{product.name}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" color="#82ae46" fontWeight="bold">
                        ${product.price}
                      </Typography>
                      {product.oldPrice && (
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                          ${product.oldPrice}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home