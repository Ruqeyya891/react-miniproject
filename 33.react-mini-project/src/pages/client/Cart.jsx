import { 
  Box, 
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
  Divider,
  Grid,
  useMediaQuery,
  useTheme
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <Box>
      {/* Hero Banner */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: { xs: '30vh', sm: '40vh', md: '50vh' },
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
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
          <Typography variant="body2" sx={{ letterSpacing: 3, mb: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            HOME / CART
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
            MY CART
          </Typography>
        </Box>
      </MotionBox>

      {/* Cart Content - TAM EKRAN */}
      <Box sx={{ py: { xs: 3, sm: 4, md: 6, lg: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
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
            sx={{ mb: { xs: 2, sm: 3, md: 4 }, color: '#82ae46', fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Continue Shopping
          </Button>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {/* Cart Table */}
            <Grid size={{ xs: 12, lg: 8, xl: 9 }}>
              <TableContainer 
                component={Paper} 
                sx={{ 
                  width: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflowX: 'auto'
                }}
              >
                <Table sx={{ width: '100%' }}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#82ae46' }}>
                      <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '5%', px: { xs: 1, sm: 2 } }}></TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '50%', px: { xs: 1, sm: 2 } }}>Product name</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '15%', px: { xs: 1, sm: 2 } }}>Price</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '15%', px: { xs: 1, sm: 2 } }}>Quantity</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '15%', px: { xs: 1, sm: 2 } }}>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        {/* Remove Button */}
                        <TableCell sx={{ px: { xs: 1, sm: 2 } }}>
                          <IconButton size="small" sx={{ border: '1px solid #e0e0e0' }}>
                            <CloseIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
                          </IconButton>
                        </TableCell>
                        
                        {/* Product Info */}
                        <TableCell sx={{ px: { xs: 1, sm: 2 } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2, md: 3 } }}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{ 
                                width: { xs: 50, sm: 70, md: 90 }, 
                                height: { xs: 50, sm: 70, md: 90 }, 
                                objectFit: 'cover',
                                borderRadius: 1
                              }}
                            />
                            <Box>
                              <Typography variant="h6" sx={{ fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' }, mb: 0.5, fontWeight: 600 }}>
                                {item.name}
                              </Typography>
                              {!isMobile && (
                                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400, fontSize: { sm: '0.875rem', md: '1rem' }, lineHeight: 1.4 }}>
                                  {item.description}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </TableCell>
                        
                        {/* Price */}
                        <TableCell sx={{ px: { xs: 1, sm: 2 } }}>
                          <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>
                            ${item.price.toFixed(2)}
                          </Typography>
                        </TableCell>
                        
                        {/* Quantity */}
                        <TableCell sx={{ px: { xs: 1, sm: 2 } }}>
                          <TextField
                            type="number"
                            defaultValue={item.quantity}
                            inputProps={{ min: 1 }}
                            size="small"
                            sx={{ width: { xs: 50, sm: 70, md: 80 } }}
                          />
                        </TableCell>
                        
                        {/* Total */}
                        <TableCell sx={{ px: { xs: 1, sm: 2 } }}>
                          <Typography variant="body1" fontWeight="bold" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' }, color: '#82ae46' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* Cart Summary */}
            <Grid size={{ xs: 12, lg: 4, xl: 3 }}>
              <Box sx={{ 
                p: { xs: 2.5, sm: 3, md: 4 },
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                position: { lg: 'sticky' },
                top: { lg: 20 }
              }}>
                <Typography variant="h5" sx={{ mb: { xs: 2, sm: 3 }, fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}>
                  Cart Total
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 1.5, sm: 2 } }}>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Subtotal</Typography>
                  <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>${total.toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 1.5, sm: 2 } }}>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Shipping</Typography>
                  <Typography variant="body1" color="#82ae46" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Free</Typography>
                </Box>
                
                <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2.5, sm: 3 } }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>Total</Typography>
                  <Typography variant="h6" fontWeight="bold" color="#82ae46" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    backgroundColor: '#82ae46',
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'bold',
                    borderRadius: 1,
                    mb: 1.5,
                    '&:hover': { backgroundColor: '#6b8c3a' }
                  }}
                >
                  Proceed to Checkout
                </Button>
                
                <Button
                  component={Link}
                  to="/shop"
                  fullWidth
                  variant="outlined"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    borderColor: '#82ae46',
                    color: '#82ae46',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': { 
                      borderColor: '#6b8c3a',
                      backgroundColor: 'rgba(130, 174, 70, 0.05)'
                    }
                  }}
                >
                  Continue Shopping
                </Button>
              </Box>
            </Grid>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default Cart