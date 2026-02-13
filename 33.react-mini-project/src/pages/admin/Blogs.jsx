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
  TextField
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

// Mock data
const mockBlogs = [
  { id: 1, title: "Why Organic Food is Better", description: "Organic foods are grown without harmful pesticides...", date: "2024-05-12", position: "Health" },
  { id: 2, title: "Seasonal Vegetables Guide", description: "Learn which vegetables are in season...", date: "2024-05-10", position: "Tips" },
  { id: 3, title: "Healthy Smoothie Recipes", description: "Start your day with these delicious recipes...", date: "2024-05-08", position: "Recipes" },
]

function AdminBlogs() {
  const [blogs, setBlogs] = useState(mockBlogs)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)

  // Delete funksiyası
  const handleDelete = (id) => {
    setBlogs(blogs.filter(b => b.id !== id))
  }

  // Edit funksiyası
  const handleEdit = (blog) => {
    setEditingBlog(blog)
    setOpenDialog(true)
  }

  // Add funksiyası
  const handleAdd = () => {
    setEditingBlog(null)
    setOpenDialog(true)
  }

  // Dialog bağla
  const handleClose = () => {
    setOpenDialog(false)
    setEditingBlog(null)
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
            Manage Blogs
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={handleAdd}
          sx={{ backgroundColor: '#2196f3', '&:hover': { backgroundColor: '#1976d2' } }}
        >
          Add Blog
        </Button>
      </Box>

      {/* Blogs Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>
                  <Chip 
                    label={blog.position} 
                    size="small" 
                    sx={{ backgroundColor: '#2196f3', color: 'white' }} 
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    {blog.date}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(blog)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(blog.id)}>
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
          {editingBlog ? 'Edit Blog' : 'Add New Blog'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12 }}>
              <TextField 
                label="Blog Title" 
                fullWidth 
                defaultValue={editingBlog?.title || ''} 
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                select 
                label="Category" 
                fullWidth 
                defaultValue={editingBlog?.position || 'Health'}
              >
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Tips">Tips</MenuItem>
                <MenuItem value="Recipes">Recipes</MenuItem>
                <MenuItem value="News">News</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                label="Date" 
                type="date" 
                fullWidth 
                defaultValue={editingBlog?.date || ''} 
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField 
                label="Description" 
                multiline 
                rows={4} 
                fullWidth 
                defaultValue={editingBlog?.description || ''} 
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: '#2196f3' }}>
            {editingBlog ? 'Save Changes' : 'Add Blog'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AdminBlogs