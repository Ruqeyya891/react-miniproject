import { Box, Container, Typography, Button,Grid, TextField, Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Garreth Smith",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/images/person_1.jpg"
  },
  {
    id: 2,
    name: "John Doe",
    position: "Interface Designer",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/images/person_2.jpg"
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "UI Designer",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/images/person_3.jpg"
  }
]

function About() {
  return (
    <Box>
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
            HOME ABOUT
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
            ABOUT US
          </Typography>
        </Box>
      </MotionBox>

      {/* About Us Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component="img"
                src="/images/about.jpg"
                alt="About us"
                sx={{ 
                  width: '100%', 
                  height: { xs: 300, md: 500 },
                  objectFit: 'cover'
                }}
              />
            </MotionBox>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.75rem', md: '2.5rem' }
                }}
              >
                Welcome to Vegefoods an eCommerce website
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her.
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

      {/* Newsletter Section */}
      <Box sx={{ backgroundColor: '#f7f6f2', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          Our satisfied customer says
        </MotionTypography>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ 
                  textAlign: 'center',
                  p: 3
                }}
              >
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
                    mx: 'auto'
                  }}
                />
                
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.8 }}>
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