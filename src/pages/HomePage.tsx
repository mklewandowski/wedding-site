import { Box, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}
      >
        We're Getting Married!
      </Typography>

      <Typography
        variant="h3"
        color="secondary.main"
        sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' }, mb: 3 }}
      >
        Matt and Bethany
      </Typography>

      <Box
        component="img"
        src="/images/us.jpg"
        alt="Matt and Bethany walking on the beach"
        sx={{
          width: '100%',
          maxWidth: 480,
          borderRadius: 2,
          mb: 4,
          display: 'block',
          mx: 'auto',
        }}
      />

      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        Saturday, October 3rd, 2026 @ 2:00 PM
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        Service: Newport State Park in Ellison Bay, Wisconsin
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Party: Sister Bay, Wisconsin
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button component={RouterLink} to="/details" variant="contained" size="large">
          Details
        </Button>
        <Button component={RouterLink} to="/ceremony" variant="contained" size="large">
          Ceremony
        </Button>
        <Button component={RouterLink} to="/party" variant="contained" size="large">
          Party
        </Button>
      </Box>
    </Box>
  )
}
