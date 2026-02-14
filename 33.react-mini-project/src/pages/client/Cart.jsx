import { 
  Box, 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  TextField,
  Button,
  Divider
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const MotionBox = motion.create(Box)

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Bell Pepper",
    description: "Far far away, behind the word mountains, far from the countries",
    price: 4.90,
    quantity: 1,
    image: "/images/product-1.jpg"
  }
]

function Cart() {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <Box>
      {/* Hero Banner */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: { xs: '40vh', md: '50vh' },
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
          <Typography variant="body2" sx={{ letterSpacing: 3, mb: 1 }}>
            HOME CART
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
            MY CART
          </Typography>
        </Box>
      </MotionBox>

      {/* Cart Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Back to Shop */}
          <Button 
            component={Link} 
            to="/shop" 
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4, color: '#82ae46' }}
          >
            Continue Shopping
          </Button>

          {/* Cart Table */}
          <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#82ae46' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}></TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Quantity</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    {/* Remove Button */}
                    <TableCell>
                      <IconButton size="small" sx={{ border: '1px solid #e0e0e0' }}>
                        <CloseIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </TableCell>
                    
                    {/* Product Info */}
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.name}
                          sx={{ width: 80, height: 80, objectFit: 'cover' }}
                        />
                        <Box>
                          <Typography variant="h6" sx={{ fontSize: '1rem', mb: 0.5 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    
                    {/* Price */}
                    <TableCell>
                      <Typography variant="body1" fontWeight="medium">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </TableCell>
                    
                    {/* Quantity */}
                    <TableCell>
                      <TextField
                        type="number"
                        defaultValue={item.quantity}
                        inputProps={{ min: 1 }}
                        size="small"
                        sx={{ width: 80 }}
                      />
                    </TableCell>
                    
                    {/* Total */}
                    <TableCell>
                      <Typography variant="body1" fontWeight="bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Cart Summary */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            mt: 4,
            p: 3,
            backgroundColor: '#f5f5f5'
          }}>
            <Box sx={{ width: { xs: '100%', md: 300 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Subtotal</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">Total</Typography>
                <Typography variant="h5" fontWeight="bold" color="#82ae46">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#82ae46',
                  py: 1.5,
                  '&:hover': { backgroundColor: '#6b8c3a' }
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Cart