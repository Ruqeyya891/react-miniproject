import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Divider
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

// Mock data - YENI SEKILLERLE
const mockBlogs = [
  {
    id: 1,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_1.jpg"
  },
  {
    id: 2,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_2.jpg"
  },
  {
    id: 3,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_3.jpg"
  },
  {
    id: 4,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_4.jpg"
  },
  {
    id: 5,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_5.jpg"
  },
  {
    id: 6,
    title: "Even the all-powerful Pointing has no control about the blind texts",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    image: "/images/image_6.jpg"
  }
]

const categories = [
  { name: "Vegetables", count: 12 },
  { name: "Fruits", count: 22 },
  { name: "Juice", count: 37 },
  { name: "Dries", count: 42 },
]

const recentBlogs = [
  { id: 1, title: "Even the all-powerful Pointing has no control about the blind texts", date: "April 09, 2019", image: "/images/image_1.jpg" },
  { id: 2, title: "Even the all-powerful Pointing has no control about the blind texts", date: "April 09, 2019", image: "/images/image_2.jpg" },
  { id: 3, title: "Even the all-powerful Pointing has no control about the blind texts", date: "April 09, 2019", image: "/images/image_3.jpg" },
]

// animasiya
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

function Blogs() {
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
          <Typography variant="body2" sx={{ letterSpacing: 3, mb: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
            HOME BLOG
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
            BLOG
          </Typography>
        </Box>
      </MotionBox>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* Left Side - Blog Posts */}
          <Grid size={{ xs: 12, md: 8 }}>
            {mockBlogs.map((blog, index) => (
              <MotionCard 
                key={blog.id}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  mb: 4,
                  overflow: 'hidden',
                  boxShadow: 'none',
                  border: '1px solid #e0e0e0',
                  borderRadius: 0
                }}
              >
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{ 
                    width: { xs: '100%', sm: 250, md: 300 },
                    height: { xs: 200, sm: 250 },
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
                  {/* Meta */}
                  <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 2 }, mb: 2, color: 'text.secondary', fontSize: { xs: 12, md: 14 }, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: { xs: 12, md: 14 } }} />
                      {blog.date}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <PersonIcon sx={{ fontSize: { xs: 12, md: 14 } }} />
                      {blog.author}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <ChatBubbleIcon sx={{ fontSize: { xs: 12, md: 14 } }} />
                      {blog.comments}
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 500,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: 1.4
                    }}
                  >
                    {blog.title}
                  </Typography>

                  {/* Description */}
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 3, lineHeight: 1.8 }}
                  >
                    {blog.description}
                  </Typography>

                  {/* Read More Button */}
                  <Button 
                    variant="contained"
                    component={Link}
                    to={`/blog/${blog.id}`}
                    sx={{ 
                      backgroundColor: '#82ae46',
                      borderRadius: 20,
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { backgroundColor: '#6b8c3a' }
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </MotionCard>
            ))}
          </Grid>

          {/* Right Side - Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Search */}
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{ mb: 4 }}
            >
              <TextField
                fullWidth
                placeholder="Search..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: '#82ae46' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#82ae46',
                    },
                  }
                }}
              />
            </MotionBox>

            {/* Categories */}
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              sx={{ mb: 4 }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 500, fontSize: '1.125rem' }}>
                Categories
              </Typography>
              {categories.map((cat) => (
                <Box key={cat.name}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1.5,
                      cursor: 'pointer',
                      '&:hover': { color: '#82ae46' }
                    }}
                  >
                    <Typography variant="body2">{cat.name}</Typography>
                    <Typography variant="body2" color="text.secondary">({cat.count})</Typography>
                  </Box>
                  <Divider />
                </Box>
              ))}
            </MotionBox>

            {/* Recent Blog - duzeltdim*/}
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{ mb: 4 }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 500, fontSize: '1.125rem' }}>
                Recent Blog
              </Typography>
              {recentBlogs.map((blog) => (
                <Box key={blog.id} sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box
                    component="img"
                    src={blog.image}
                    alt={blog.title}
                    sx={{ width: 60, height: 60, objectFit: 'cover' }}
                  />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500,
                        mb: 1,
                        lineHeight: 1.4,
                        fontSize: '0.875rem'
                      }}
                    >
                      {blog.title}
                    </Typography>
                    {/* Meta info */}
                    <Box sx={{ display: 'flex', gap: 1.5, color: 'text.secondary', fontSize: 12 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                        <CalendarTodayIcon sx={{ fontSize: 12 }} />
                        {blog.date}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                        <PersonIcon sx={{ fontSize: 12 }} />
                        Admin
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                        <ChatBubbleIcon sx={{ fontSize: 12 }} />
                        19
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </MotionBox>

            {/* Paragraph */}
            <MotionBox
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, fontSize: '1.125rem' }}>
                Paragraph
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Blogs