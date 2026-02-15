import { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button,
  Card,
  CardContent
} from '@mui/material'
import { motion } from 'framer-motion'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import SendIcon from '@mui/icons-material/Send'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)
const MotionCard = motion.create(Card)

// Altdan yuxarı animasiya
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

// Contact info data
const contactInfo = [
  {
    icon: LocationOnIcon,
    title: 'Address',
    content: '198 West 21th Street, Suite 721 New York NY 10016',
    color: '#82ae46'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+ 1235 2355 98',
    color: '#2196f3'
  },
  {
    icon: EmailIcon,
    title: 'Email',
    content: 'info@yoursite.com',
    color: '#ff9800'
  }
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* 1. Hero Banner - Tam ekran */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: { xs: '50vh', md: '60vh' },
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
            backgroundColor: 'rgba(0,0,0,0.4)',
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              letterSpacing: 3, 
              mb: 1, 
              fontSize: { xs: '0.75rem', md: '0.875rem' } 
            }}
          >
            HOME CONTACT
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } 
            }}
          >
            CONTACT US
          </Typography>
        </Box>
      </MotionBox>

      {/* 2. Contact Info Cards - Tam en */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {contactInfo.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <MotionCard
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 0,
                  border: '1px solid #e0e0e0'
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Box sx={{ 
                    width: { xs: 70, md: 90 }, 
                    height: { xs: 70, md: 90 }, 
                    borderRadius: '50%', 
                    backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}>
                    <item.icon sx={{ fontSize: { xs: 30, md: 40 }, color: 'white' }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.1rem', md: '1.3rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.8,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. Form & Map - Tam en, yan-yana */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Form - Sol tərəf */}
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                  backgroundColor: 'white', 
                  p: { xs: 3, md: 5 },
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 4, 
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  Get in touch
                </Typography>

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          '&:hover fieldset': { borderColor: '#82ae46' },
                          '&.Mui-focused fieldset': { borderColor: '#82ae46' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          '&:hover fieldset': { borderColor: '#82ae46' },
                          '&.Mui-focused fieldset': { borderColor: '#82ae46' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          '&:hover fieldset': { borderColor: '#82ae46' },
                          '&.Mui-focused fieldset': { borderColor: '#82ae46' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          '&:hover fieldset': { borderColor: '#82ae46' },
                          '&.Mui-focused fieldset': { borderColor: '#82ae46' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: '#82ae46',
                        borderRadius: 30,
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': { backgroundColor: '#6b8c3a' }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </MotionBox>
            </Grid>

            {/* Map - Sağ tərəf */}
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{ 
                  height: { xs: 350, md: '100%' }, 
                  minHeight: { md: 500 },
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.217676750664!2d-73.98784408459418!3d40.75797467932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    filter: 'grayscale(20%)'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact