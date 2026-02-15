import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import RoomIcon from '@mui/icons-material/Room'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)
const MotionGrid = motion.create(Grid)

function Footer() {
  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', pt: 6, pb: 3, mt: 4 }}>
      <Container maxWidth="xl">
        <MotionGrid 
          container 
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About */}
          <MotionGrid size={{ xs: 12, sm: 6, md: 3 }} variants={itemVariants}>
            <Typography variant="h6" sx={{ color: '#82ae46', mb: 2, fontFamily: 'cursive', fontWeight: 'bold' }}>
              Vegefoods
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton 
                    size="small" 
                    href={social.href}
                    sx={{ 
                      color: 'white',
                      backgroundColor: '#82ae46',
                      width: 40,
                      height: 40,
                      transition: 'all 0.3s',
                      '&:hover': { 
                        backgroundColor: '#6b8c3a',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 12px rgba(130,174,70,0.4)'
                      }
                    }}
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </MotionGrid>

          {/* Menu */}
          <MotionGrid size={{ xs: 12, sm: 6, md: 3 }} variants={itemVariants}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Menu</Typography>
            {['Shop', 'About', 'Journal', 'Contact Us'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  href={item === 'Shop' ? '/shop' : item === 'About' ? '/about' : item === 'Journal' ? '/blog' : '/contact'} 
                  display="block" 
                  sx={{ 
                    color: 'text.secondary', 
                    textDecoration: 'none', 
                    mb: 1.5,
                    transition: 'color 0.3s',
                    '&:hover': { color: '#82ae46' }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </MotionGrid>

          {/* Help */}
          <MotionGrid size={{ xs: 12, sm: 6, md: 3 }} variants={itemVariants}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Help</Typography>
            {[
              'Shipping Information', 
              'Returns & Exchange', 
              'Terms & Conditions', 
              'Privacy Policy'
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  href="#" 
                  display="block" 
                  sx={{ 
                    color: 'text.secondary', 
                    textDecoration: 'none', 
                    mb: 1.5,
                    transition: 'color 0.3s',
                    '&:hover': { color: '#82ae46' }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </MotionGrid>

          {/* Contact */}
          <MotionGrid size={{ xs: 12, sm: 6, md: 3 }} variants={itemVariants}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Have a Questions?</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <RoomIcon sx={{ color: '#82ae46', mr: 1.5, mt: 0.3, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                203 Fake St. Mountain View, San Francisco, California, USA
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ color: '#82ae46', mr: 1.5, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                +2 392 3929 210
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ color: '#82ae46', mr: 1.5, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                info@yourdomain.com
              </Typography>
            </Box>
          </MotionGrid>
        </MotionGrid>

        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}
        >
          <Typography variant="body2" color="text.secondary">
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with by{' '}
            <Link href="#" sx={{ color: '#82ae46', textDecoration: 'none' }}>Colorlib</Link>
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Footer