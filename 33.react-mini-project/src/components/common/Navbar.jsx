import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  const [shopAnchorEl, setShopAnchorEl] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleShopClick = (event) => {
    setShopAnchorEl(event.currentTarget)
  }

  const handleShopClose = () => {
    setShopAnchorEl(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const menuItems = [
    { text: 'HOME', link: '/' },
    { text: 'SHOP', link: '/shop' },
    { text: 'ABOUT', link: '/' },
    { text: 'BLOG', link: '/blog' },
    { text: 'CONTACT', link: '/' },
  ]

  return (
    <Box>
      {/* Top Bar - Yaşıl zolaq (yalnız desktop) */}
      <Box sx={{
        backgroundColor: '#82ae46',
        color: 'white',
        py: 0.8,
        px: 2,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 14 }} />
            <Typography variant="body2">+ 1235 2355 98</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ fontSize: 14 }} />
            <Typography variant="body2">YOUREMAIL@EMAIL.COM</Typography>
          </Box>
        </Box>
        <Typography variant="body2">
          3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
        </Typography>
      </Box>



      {/* Main Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: 'none',
          py: 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#82ae46',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: 2,
              fontSize: { xs: '1.5rem', md: '1.8rem' }
            }}
          >
            VEGEFOODS
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
            alignItems: 'center'
          }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#000',
                fontWeight: 500,
                '&:hover': { color: '#82ae46' }
              }}
            >
              HOME
            </Button>

            {/* SHOP with Dropdown */}
            <Box>
              <Button
                onClick={handleShopClick}
                onMouseEnter={handleShopClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 500,
                  '&:hover': { color: '#82ae46' }
                }}
              >
                SHOP
              </Button>
              <Menu
                anchorEl={shopAnchorEl}
                open={Boolean(shopAnchorEl)}
                onClose={handleShopClose}
                onMouseLeave={handleShopClose}
                MenuListProps={{ onMouseLeave: handleShopClose }}
                sx={{
                  '& .MuiPaper-root': {
                    mt: 1,
                    minWidth: 180,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <MenuItem component={Link} to="/shop" onClick={handleShopClose} sx={{ '&:hover': { color: '#82ae46' } }}>Shop</MenuItem>
                <MenuItem component={Link} to="/" onClick={handleShopClose} sx={{ '&:hover': { color: '#82ae46' } }}>Wishlist</MenuItem>
                <MenuItem component={Link} to="/shop/1" onClick={handleShopClose} sx={{ '&:hover': { color: '#82ae46' } }}>Single Product</MenuItem>
                <MenuItem component={Link} to="/" onClick={handleShopClose} sx={{ '&:hover': { color: '#82ae46' } }}>Cart</MenuItem>
                <MenuItem component={Link} to="/" onClick={handleShopClose} sx={{ '&:hover': { color: '#82ae46' } }}>Checkout</MenuItem>
              </Menu>
            </Box>

            <Button component={Link} to="/" sx={{ color: '#000', fontWeight: 500, '&:hover': { color: '#82ae46' } }}>ABOUT</Button>
            <Button component={Link} to="/blog" sx={{ color: '#000', fontWeight: 500, '&:hover': { color: '#82ae46' } }}>BLOG</Button>
            <Button component={Link} to="/" sx={{ color: '#000', fontWeight: 500, '&:hover': { color: '#82ae46' } }}>CONTACT</Button>
          </Box>

          {/* Icons + Mobile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton component={Link} to="/" sx={{ color: '#000', display: { xs: 'none', sm: 'flex' } }}>
              <Badge badgeContent={0} color="primary">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            
            <IconButton component={Link} to="/cart" sx={{ color: '#000' }}>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>


            <Typography variant="body2" sx={{ ml: -0.5, fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
              [0]
            </Typography>

            {/* Mobile menu button */}
            <IconButton
              onClick={toggleMobileMenu}
              sx={{ color: '#000', display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ display: { md: 'none' } }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.link}
                onClick={toggleMobileMenu}
                sx={{
                  color: '#000',
                  '&:hover': { color: '#82ae46', backgroundColor: 'transparent' }
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Navbar