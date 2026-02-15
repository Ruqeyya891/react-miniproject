import { useState, useEffect, useRef } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid2 as Grid, 
  TextField,
  Dialog,
  IconButton
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CloseIcon from '@mui/icons-material/Close'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StarIcon from '@mui/icons-material/Star'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

// Altdan yuxarı animasiya
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

// Features data
const features = [
  { icon: LocalShippingIcon, title: 'FREE SHIPPING', desc: 'ON ORDER OVER $100', color: '#e8b4d9' },
  { icon: RestaurantIcon, title: 'ALWAYS FRESH', desc: 'PRODUCT WELL PACKAGE', color: '#e6d5a8' },
  { icon: StarIcon, title: 'SUPERIOR QUALITY', desc: 'QUALITY PRODUCTS', color: '#a8d4e6' },
  { icon: SupportAgentIcon, title: 'SUPPORT', desc: '24/7 SUPPORT', color: '#d4e6a8' }
]

// Stats data
const stats = [
  { number: 10000, label: 'HAPPY CUSTOMERS' },
  { number: 100, label: 'BRANCHES' },
  { number: 1000, label: 'PARTNER' },
  { number: 100, label: 'AWARDS' }
]

// Testimonial data
const testimonials = [
  { id: 1, name: "Garreth Smith", position: "SYSTEM ANALYST", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", image: "/images/person_1.jpg" },
  { id: 2, name: "Garreth Smith", position: "MARKETING MANAGER", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", image: "/images/person_2.jpg" },
  { id: 3, name: "Garreth Smith", position: "INTERFACE DESIGNER", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", image: "/images/person_3.jpg" }
]

// Counter komponenti
function Counter({ target, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)
      if (progress < 1) {
        setCount(Math.floor(target * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Banner */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: { xs: '40vh', md: '50vh' },
          backgroundImage: 'url(/images/bg_2.jpg)',
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
          <Typography variant="body2" sx={{ letterSpacing: 3, mb: 1 }}>
            HOME ABOUT US
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
            ABOUT US
          </Typography>
        </Box>
      </MotionBox>

      {/* Features Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <MotionBox 
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ textAlign: 'center', p: 3 }}
                >
                  <Box sx={{ 
                    width: 100, height: 100, borderRadius: '50%', 
                    backgroundColor: feature.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mx: 'auto', mb: 3
                  }}>
                    <feature.icon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', letterSpacing: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Video Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{ position: 'relative' }}
            >
              <Box
                component="img"
                src="/images/about_video.jpg"
                alt="About video"
                sx={{ width: '100%', height: { xs: 300, md: 450 }, objectFit: 'cover' }}
              />
              <IconButton
                onClick={() => setVideoOpen(true)}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 80,
                  height: 80,
                  backgroundColor: '#82ae46',
                  '&:hover': { backgroundColor: '#6b8c3a' }
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 40, color: 'white' }} />
              </IconButton>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                Welcome to Vegefoods an eCommerce website
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
              </Typography>
              <Button 
                variant="contained"
                               component={Link}
                to="/shop"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  backgroundColor: '#82ae46',
                  borderRadius: 20,
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#6b8c3a' }
                }}
              >
                Shop now
              </Button>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Video Dialog */}
      <Dialog
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <Box sx={{ position: 'relative', backgroundColor: 'black' }}>
          <IconButton
            onClick={() => setVideoOpen(false)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'white',
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="iframe"
            src="https://player.vimeo.com/video/45830194"
            sx={{
              width: '100%',
              height: { xs: 250, md: 450 },
              border: 'none'
            }}
            allow="autoplay; fullscreen"
          />
        </Box>
      </Dialog>

      {/* Stats Counter Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/product-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,0.7)',
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <MotionBox
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 'bold', 
                      fontSize: { xs: '2rem', md: '3rem' },
                      mb: 1
                    }}
                  >
                    <Counter target={stat.number} />
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      letterSpacing: 2,
                      color: 'text.secondary'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ backgroundColor: '#f7f6f2', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <MotionBox
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
              Subcribe to our Newsletter
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Get e-mail updates about our latest shops and special offers
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, maxWidth: 500, mx: 'auto', flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                fullWidth
                placeholder="Enter email address"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                  }
                }}
              />
              <Button 
                variant="contained"
                sx={{ 
                  backgroundColor: '#82ae46',
                  borderRadius: 0,
                  px: 4,
                  whiteSpace: 'nowrap',
                  '&:hover': { backgroundColor: '#6b8c3a' }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <MotionTypography
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            mb: 2, 
            fontWeight: 'bold' 
          }}
        >
          Testimony
        </MotionTypography>
        
        <MotionTypography
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variant="body1" 
          color="text.secondary"
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 4, md: 6 } 
          }}
        >
          Our satisfied customer says
        </MotionTypography>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <MotionBox
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ 
                  textAlign: 'center',
                  p: 3,
                  position: 'relative'
                }}
              >
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: 40, 
                    color: '#82ae46', 
                    opacity: 0.3,
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }} 
                />
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                    mx: 'auto',
                    mt: 3
                  }}
                />
                
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
                  "{testimonial.text}"
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {testimonial.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  {testimonial.position}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default About