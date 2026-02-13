import { Box, Container, Typography, Button, Grid, Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StarIcon from '@mui/icons-material/Star'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

function Home() {
  const features = [
    { icon: LocalShippingIcon, title: 'Free Shipping', desc: 'On order over $100' },
    { icon: RestaurantIcon, title: 'Always Fresh', desc: 'Product well package' },
    { icon: StarIcon, title: 'Superior Quality', desc: 'Quality products' },
    { icon: SupportAgentIcon, title: 'Support', desc: '24/7 Support' },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          height: '80vh',
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
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            100% Fresh & Organic Foods
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            We deliver organic vegetables & fruits
          </Typography>
          <Button 
            variant="contained" 
            component={Link} 
            to="/shop"
            sx={{ 
              backgroundColor: '#82ae46', 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': { backgroundColor: '#6b8c3a' }
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <feature.icon sx={{ fontSize: 50, color: '#82ae46', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
          Categories
        </Typography>
        <Grid container spacing={3}>
          {[
            { name: 'Vegetables', image: '/images/product-1.jpg' },
            { name: 'Fruits', image: '/images/product-2.jpg' },
            { name: 'Juice', image: '/images/product-8.jpg' },
            { name: 'Dried', image: '/images/product-4.jpg' },
          ].map((cat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={cat.image}
                  alt={cat.name}
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home