import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography 
          variant="h5" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            color: '#82ae46', 
            fontWeight: 'bold',
            fontFamily: 'cursive'
          }}
        >
          Vegefoods
        </Typography>

        {/* Menu Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button component={Link} to="/" sx={{ color: '#000' }}>Home</Button>
          <Button component={Link} to="/shop" sx={{ color: '#000' }}>Shop</Button>
          <Button component={Link} to="/blog" sx={{ color: '#000' }}>Blog</Button>
          <Button component={Link} to="/admin" sx={{ color: '#000' }}>Admin</Button>
        </Box>

        {/* Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="primary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar