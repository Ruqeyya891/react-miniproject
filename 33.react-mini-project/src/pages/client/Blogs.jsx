import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent,
    Button,
    Chip
  } from '@mui/material'
  import { Link } from 'react-router-dom'
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
  
  // Mock data - sonra API-dən gələcək
  const mockBlogs = [
    {
      id: 1,
      title: "Why Organic Food is Better",
      description: "Organic foods are grown without harmful pesticides and are healthier for your body. Discover the benefits of eating organic.",
      date: "2024-05-12",
      position: "Health"
    },
    {
      id: 2,
      title: "Seasonal Vegetables Guide",
      description: "Learn which vegetables are in season and how to pick the freshest produce at your local market.",
      date: "2024-05-10",
      position: "Tips"
    },
    {
      id: 3,
      title: "Healthy Smoothie Recipes",
      description: "Start your day with these delicious and nutritious smoothie recipes packed with vitamins.",
      date: "2024-05-08",
      position: "Recipes"
    }
  ]
  
  function Blogs() {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
          Our Blog
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Read our latest articles about healthy living
        </Typography>
  
        {/* Blog Grid */}
        <Grid container spacing={4}>
          {mockBlogs.map((blog) => (
            <Grid item xs={12} md={4} key={blog.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  '&:hover': { boxShadow: 6 }
                }}
              >
                {/* Placeholder Image */}
                <Box 
                  sx={{ 
                    height: 200, 
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h1" sx={{ color: '#82ae46' }}>
                    📝
                  </Typography>
                </Box>
  
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Category Chip */}
                  <Chip 
                    label={blog.position} 
                    size="small" 
                    sx={{ 
                      backgroundColor: '#82ae46', 
                      color: 'white',
                      mb: 2 
                    }} 
                  />
  
                  {/* Title */}
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
  
                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {blog.description}
                  </Typography>
  
                  {/* Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>
  
                  {/* Read More Button */}
                  <Button 
                    component={Link}
                    to={`/blog/${blog.id}`}
                    sx={{ 
                      color: '#82ae46',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
                    }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
  
  export default Blogs 