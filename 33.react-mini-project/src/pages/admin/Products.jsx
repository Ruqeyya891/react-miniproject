import { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

// Mock data
const mockProducts = [
  { id: 1, name: "Bell Pepper", category: "Vegetables", price: 80, oldPrice: 120, discount: 30 },
  { id: 2, name: "Strawberry", category: "Fruits", price: 120, oldPrice: 120, discount: 0 },
  { id: 3, name: "Green Beans", category: "Vegetables", price: 120, oldPrice: 120, discount: 0 },
  { id: 4, name: "Purple Cabbage", category: "Vegetables", price: 120, oldPrice: 120, discount: 0 },
]

function AdminProducts() {
  const [products, setProducts] = useState(mockProducts)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  // Delete funksiyası
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  // Edit funksiyası
  const handleEdit = (product) => {
    setEditingProduct(product)
    setOpenDialog(true)
  }

  // Add funksiyası
  const handleAdd = () => {
    setEditingProduct(null)
    setOpenDialog(true)
  }

  // Dialog bağla
  const handleClose = () => {
    setOpenDialog(false)
    setEditingProduct(null)
  }

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
          onClick={handleAdd}
          sx={{ backgroundColor: '#82ae46', '&:hover': { backgroundColor: '#6b8c3a' } }}
        >
          Add Product
        </Button>
      </Box>

      {/* Products Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Chip label={product.category} size="small" />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography fontWeight="bold" color="#82ae46">
                      ${product.price}
                    </Typography>
                    {product.oldPrice > product.price && (
                      <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                        ${product.oldPrice}
                      </Typography>
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  {product.discount > 0 ? (
                    <Chip label={`${product.discount}%`} color="success" size="small" />
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12 }}>
              <TextField 
                label="Product Name" 
                fullWidth 
                defaultValue={editingProduct?.name || ''} 
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                label="Price" 
                type="number" 
                fullWidth 
                defaultValue={editingProduct?.price || ''} 
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                label="Old Price" 
                type="number" 
                fullWidth 
                defaultValue={editingProduct?.oldPrice || ''} 
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                select 
                label="Category" 
                fullWidth 
                defaultValue={editingProduct?.category || 'Vegetables'}
              >
                <MenuItem value="Vegetables">Vegetables</MenuItem>
                <MenuItem value="Fruits">Fruits</MenuItem>
                <MenuItem value="Juice">Juice</MenuItem>
                <MenuItem value="Dried">Dried</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                label="Discount %" 
                type="number" 
                fullWidth 
                defaultValue={editingProduct?.discount || 0} 
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: '#82ae46' }}>
            {editingProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AdminProducts