import { 
    Box, 
    Container, 
    Typography, 
    Button
  } from '@mui/material'
  import { Link } from 'react-router-dom'
  import AddIcon from '@mui/icons-material/Add'
  import ArrowBackIcon from '@mui/icons-material/ArrowBack'
  
  function AdminProducts() {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Button 
              component={Link} 
              to="/admin" 
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 2, color: '#82ae46' }}
            >
              Back to Dashboard
            </Button>
            <Typography variant="h4" fontWeight="bold">
              Manage Products
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            sx={{ backgroundColor: '#82ae46', '&:hover': { backgroundColor: '#6b8c3a' } }}
          >
            Add Product
          </Button>
        </Box>
  
        {/* Burada cədvəl olacaq - növbəti commitdə */}
        <Typography variant="body1" color="text.secondary">
          Products table will be added here...
        </Typography>
      </Container>
    )
  }
  
  export default AdminProducts