import { Avatar, Box, Button, Container, Paper, Skeleton } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export const Home = () => (
  <Container maxWidth={'sm'} sx={{mt: 5, display: 'flex', justifyContent: 'center'}}>
    <Paper sx={{width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button sx={{height: 'fit-content', display: 'block'}}>hello</Button>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>Ash</Avatar>
    </Paper>
  </Container>
)

export default Home
