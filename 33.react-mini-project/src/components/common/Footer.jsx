import { Box, Container,Grid, Typography, Link, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', pt: 6, pb: 3, mt: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#82ae46', mb: 2, fontFamily: 'cursive' }}>
              Vegefoods
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton size="small" sx={{ color: '#82ae46' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#82ae46' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#82ae46' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Menu */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Menu</Typography>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Shop</Link>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>About</Link>
            <Link href="/blog" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Blog</Link>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Contact Us</Link>
          </Grid>

          {/* Help */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Help</Typography>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Shipping Information</Link>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Returns & Exchange</Link>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Terms & Conditions</Link>
            <Link href="/" display="block" sx={{ color: 'text.secondary', textDecoration: 'none', mb: 1 }}>Privacy Policy</Link>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Have a Questions?</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              203 Fake St. Mountain View, San Francisco, California, USA
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              +2 392 3929 210
            </Typography>
            <Typography variant="body2" color="text.secondary">
              info@yourdomain.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            Copyright ©2024 All rights reserved | This template is made with by Colorlib
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer