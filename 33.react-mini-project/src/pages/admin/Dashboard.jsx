import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent,
    Button,
    Divider
  } from '@mui/material'
  import { Link } from 'react-router-dom'
  import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
  import ArticleIcon from '@mui/icons-material/Article'
  import TrendingUpIcon from '@mui/icons-material/TrendingUp'
  import PeopleIcon from '@mui/icons-material/People'
  
  function Dashboard() {
    const stats = [
      { title: 'Total Products', value: '8', icon: ShoppingBagIcon, color: '#82ae46' },
      { title: 'Total Blogs', value: '1', icon: ArticleIcon, color: '#2196f3' },
      { title: 'Total Sales', value: '$0', icon: TrendingUpIcon, color: '#ff9800' },
      { title: 'Total Users', value: '0', icon: PeopleIcon, color: '#9c27b0' },
    ]
  
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Manage your products and blog posts
        </Typography>
  
        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box 
                    sx={{ 
                      backgroundColor: `${stat.color}20`,
                      p: 1.5,
                      borderRadius: 2
                    }}
                  >
                    <stat.icon sx={{ fontSize: 32, color: stat.color }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  
        {/* Quick Actions */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          Quick Actions
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <ShoppingBagIcon sx={{ fontSize: 40, color: '#82ae46' }} />
                  <Box>
                    <Typography variant="h6">Products</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Add, edit or delete products
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Button 
                  component={Link}
                  to="/admin/products"
                  variant="contained"
                  fullWidth
                  sx={{ 
                    backgroundColor: '#82ae46',
                    '&:hover': { backgroundColor: '#6b8c3a' }
                  }}
                >
                  Manage Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
  
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <ArticleIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  <Box>
                    <Typography variant="h6">Blog Posts</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Add, edit or delete blog posts
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Button 
                  component={Link}
                  to="/admin/blogs"
                  variant="contained"
                  fullWidth
                  sx={{ 
                    backgroundColor: '#2196f3',
                    '&:hover': { backgroundColor: '#1976d2' }
                  }}
                >
                  Manage Blogs
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
  
  export default Dashboardgit