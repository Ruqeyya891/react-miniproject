import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  IconButton,
  TextField,
  Rating
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StarIcon from '@mui/icons-material/Star'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)
const MotionCard = motion.create(Card)

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 10,
    minutes: 45,
    seconds: 30
  })

  const slides = [
    {
      subtitle: "100% Fresh & Organic Foods",
      title: "We deliver organic vegetables & fruits",
      image: "/images/bg_1.jpg",
      buttonText: "View Details"
    },
    {
      subtitle: "We serve Fresh Vegetables & Fruits",
      title: "We deliver organic vegetables & fruits",
      image: "/images/bg_2.jpg",
      buttonText: "View Details"
    },
    {
      subtitle: "100% Fresh & Organic Foods",
      title: "We deliver organic vegetables & fruits",
      image: "/images/bg_3.jpg",
      buttonText: "View Details"
    }
  ]

  const features = [
    { icon: LocalShippingIcon, title: 'Free Shipping', desc: 'On order over $100' },
    { icon: RestaurantIcon, title: 'Always Fresh', desc: 'Product well package' },
    { icon: StarIcon, title: 'Superior Quality', desc: 'Quality products' },
    { icon: SupportAgentIcon, title: 'Support', desc: '24/7 Support' },
  ]

  const categories = [
    { name: 'Vegetables', count: 10, image: '/images/category-1.jpg' },
    { name: 'Fruits', count: 8, image: '/images/category-2.jpg' },
    { name: 'Juice', count: 5, image: '/images/category-3.jpg' },
    { name: 'Dried', count: 6, image: '/images/category-4.jpg' },
  ]

  const products = [
    { id: 1, name: "Bell Pepper", price: 80, oldPrice: 120, image: "/images/product-1.jpg", discount: 30, category: "Vegetables" },
    { id: 2, name: "Strawberry", price: 120, oldPrice: null, image: "/images/product-2.jpg", discount: null, category: "Fruits" },
    { id: 3, name: "Green Beans", price: 120, oldPrice: null, image: "/images/product-3.jpg", discount: null, category: "Vegetables" },
    { id: 4, name: "Purple Cabbage", price: 120, oldPrice: null, image: "/images/product-4.jpg", discount: null, category: "Vegetables" },
    { id: 5, name: "Tomatoe", price: 80, oldPrice: 120, image: "/images/product-5.jpg", discount: 30, category: "Vegetables" },
    { id: 6, name: "Brocolli", price: 120, oldPrice: null, image: "/images/product-6.jpg", discount: null, category: "Vegetables" },
    { id: 7, name: "Carrots", price: 120, oldPrice: null, image: "/images/product-7.jpg", discount: null, category: "Vegetables" },
    { id: 8, name: "Fruit Juice", price: 120, oldPrice: null, image: "/images/product-8.jpg", discount: null, category: "Juice" },
  ]

  const testimonials = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Garreth Smith",
      role: "Marketing Manager",
      image: "/images/person-1.jpg"
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Garreth Smith",
      role: "Interface Designer",
      image: "/images/person-2.jpg"
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Garreth Smith",
      role: "UI Designer",
      image: "/images/person-3.jpg"
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Garreth Smith",
      role: "Web Developer",
      image: "/images/person-4.jpg"
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Garreth Smith",
      role: "System Analyst",
      image: "/images/person-1.jpg"
    }
  ]

  const blogPosts = [
    {
      date: "30",
      month: "Comment 2018",
      title: "Even the all-powerful Pointing has no control about the blind texts",
      author: "Admin",
      comments: 3,
      image: "/images/image-1.jpg"
    },
    {
      date: "25",
      month: "Comment 2018",
      title: "Even the all-powerful Pointing has no control about the blind texts",
      author: "Admin",
      comments: 5,
      image: "/images/image-2.jpg"
    },
    {
      date: "20",
      month: "Comment 2018",
      title: "Even the all-powerful Pointing has no control about the blind texts",
      author: "Admin",
      comments: 2,
      image: "/images/image-3.jpg"
    }
  ]

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Auto slide
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(slideTimer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <Box>
      {/* Hero Slider */}
      <Box sx={{ position: 'relative', height: { xs: '70vh', md: '90vh' }, overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <MotionBox
            key={index}
            initial={false}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
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
                animate={currentSlide === index ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                variant="h2" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' },
                  textTransform: 'uppercase',
                  letterSpacing: 2
                }}
              >
                {slide.subtitle}
              </MotionTypography>
              
              <MotionTypography 
                initial={{ y: 50, opacity: 0 }}
                animate={currentSlide === index ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                  fontWeight: 300
                }}
              >
                {slide.title}
              </MotionTypography>
              
              <MotionBox
                initial={{ scale: 0.8, opacity: 0 }}
                animate={currentSlide === index ? { scale: 1, opacity: 1 } : {}}
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
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                    borderRadius: 30,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    '&:hover': { backgroundColor: '#6b8c3a' }
                  }}
                >
                  {slide.buttonText}
                </Button>
              </MotionBox>
            </Box>
          </MotionBox>
        ))}

        {/* Slider Controls */}
        <IconButton 
          onClick={prevSlide}
          sx={{ 
            position: 'absolute', 
            left: 20, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.4)' }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton 
          onClick={nextSlide}
          sx={{ 
            position: 'absolute', 
            right: 20, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.4)' }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Dots */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 30, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1
        }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#82ae46' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </Box>
      </Box>

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
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{feature.title}</Typography>
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
      fontSize: { xs: '1.75rem', md: '2.5rem' },
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 80,
        height: 3,
        backgroundColor: '#82ae46'
      }
    }}
  >
    Categories
  </MotionTypography>
  
  <Grid container spacing={{ xs: 2, md: 3 }}>
    {categories.map((cat, index) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Card 
            component={Link}
            to="/shop"
            sx={{ 
              position: 'relative', 
              overflow: 'hidden',
              cursor: 'pointer',
              textDecoration: 'none',
              borderRadius: 2,
              display: 'block',
              bgcolor: '#e0e0e0' // Placeholder rəng
            }}
          >
            <Box sx={{ 
              position: 'relative', 
              overflow: 'hidden',
              height: { xs: 250, sm: 300, md: 350 }
            }}>
              {/* Loading placeholder */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}>
                <Typography variant="body2" color="text.secondary">
                  Loading...
                </Typography>
              </Box>
              
              <Box
                component="img"
                src={cat.image}
                alt={cat.name}
                loading="eager" // Dərhal yüklən
                sx={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease, opacity 0.3s',
                  position: 'relative',
                  zIndex: 2,
                  '&:hover': { transform: 'scale(1.1)' }
                }}
                onLoad={(e) => {
                  // Şəkil yükləndikdə placeholder-i gizlət
                  e.target.style.opacity = 1;
                  const placeholder = e.target.previousSibling;
                  if (placeholder) placeholder.style.display = 'none';
                }}
                style={{ opacity: 0 }} // Başlanğıcda görünməz
              />
            </Box>
            
            <Box sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              p: 3,
              textAlign: 'center',
              zIndex: 3
            }}>
              <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>{cat.name}</Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.8)">{cat.count} Products</Typography>
            </Box>
          </Card>
        </motion.div>
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
              mb: 1, 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 3,
                backgroundColor: '#82ae46'
              }
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
              mb: { xs: 4, md: 6 },
              mt: 3
            }}
          >
            Our most popular products based on sales
          </MotionTypography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {products.map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <MotionCard 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                    '&:hover .product-actions': { opacity: 1, bottom: 20 }
                  }}
                >
                  {/* Discount Badge */}
                  {product.discount && (
                    <Box sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      backgroundColor: '#82ae46',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 2
                    }}>
                      {product.discount}%
                    </Box>
                  )}

                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{ 
                        height: { xs: 250, md: 300 },
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': { transform: 'scale(1.1)' }
                      }}
                    />
                    
                    {/* Hover Actions */}
                    <Box className="product-actions" sx={{
                      position: 'absolute',
                      bottom: -50,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                      opacity: 0,
                      transition: 'all 0.3s',
                      zIndex: 3
                    }}>
                      <IconButton sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#82ae46', color: 'white' } }}>
                        <ShoppingCartIcon />
                      </IconButton>
                      <IconButton sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#82ae46', color: 'white' } }}>
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#82ae46', color: 'white' } }}>
                        <SearchIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <CardContent sx={{ textAlign: 'center', pt: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
                      {product.category}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{product.name}</Typography>
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

      {/* Deal of the Day */}
      <Box sx={{
        backgroundImage: 'url(/images/bg_3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        py: { xs: 6, md: 10 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                variant="h6" 
                color="#82ae46"
                sx={{ mb: 2, fontWeight: 'bold', letterSpacing: 2 }}
              >
                Best Price For You
              </MotionTypography>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                variant="h2" 
                color="white"
                sx={{ 
                  mb: 3, 
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                Deal of the day
              </MotionTypography>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                variant="body1" 
                color="rgba(255,255,255,0.8)"
                sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
              </MotionTypography>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                variant="h4" 
                color="#82ae46"
                sx={{ mb: 1, fontWeight: 'bold' }}
              >
                Spinach
              </MotionTypography>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                variant="h5" 
                color="white"
                sx={{ mb: 4 }}
              >
                <Box component="span" sx={{ color: '#82ae46', fontWeight: 'bold' }}>$10</Box>{' '}
                <Box component="span" sx={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.6)', ml: 1 }}>$20</Box>
              </MotionTypography>
              <MotionTypography 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                variant="body2" 
                color="rgba(255,255,255,0.6)"
              >
                $20/kg
              </MotionTypography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}
              >
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((item, index) => (
                  <Box key={index} sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    p: 3,
                    minWidth: 100,
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <Typography variant="h3" color="white" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                      {String(item.value).padStart(2, '0')}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 4, md: 6 }, 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 3,
                backgroundColor: '#82ae46'
              }
            }}
          >
            Testimony
          </MotionTypography>
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="body1" 
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 4, md: 6 },
              mt: 3
            }}
          >
            Our satisfied customer says
          </MotionTypography>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
                <MotionCard 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                    borderRadius: 2
                  }}
                >
                  <Box
                    component="img"
                    src={testimonial.image}
                    alt={testimonial.author}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      mb: 2,
                      mx: 'auto'
                    }}
                  />
                  <Rating value={5} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.text}"
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="#82ae46">
                    {testimonial.role}
                  </Typography>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl">
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 1, 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 3,
                backgroundColor: '#82ae46'
              }
            }}
          >
            Recent Blog
          </MotionTypography>
          <MotionTypography 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="body1" 
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 4, md: 6 },
              mt: 3
            }}
          >
            Blog posts about organic food and healthy lifestyle
          </MotionTypography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {blogPosts.map((post, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <MotionCard 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ 
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{ 
                        height: 250,
                        objectFit: 'cover'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      bottom: -20,
                      left: 20,
                      backgroundColor: '#f5f5f5',
                      p: 1.5,
                      textAlign: 'center',
                      minWidth: 60,
                      borderRadius: 1
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#82ae46', lineHeight: 1 }}>
                        {post.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.month}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ pt: 4, px: 3, pb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.4 }}>
                      {post.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary', fontSize: '0.875rem' }}>
                      <span>👤 {post.author}</span>
                      <span>💬 {post.comments}</span>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter */}
      <Box sx={{ backgroundColor: '#82ae46', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center" justifyContent="space-between">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" color="white" sx={{ fontWeight: 'bold', mb: 1 }}>
                Subcribe to our Newsletter
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.8)">
                Get e-mail updates about our latest shops and special offers
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', gap: 0 }}>
                <TextField
                  placeholder="Enter email address"
                  fullWidth
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '4px 0 0 4px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px 0 0 4px'
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#6b8c3a',
                    borderRadius: '0 4px 4px 0',
                    px: 4,
                    '&:hover': { backgroundColor: '#5a7530' }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home