import { Box, Divider, Typography } from '@mui/material'

export default function CeremonyPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Ceremony
      </Typography>

      <Typography variant="body1" paragraph>
        Details about the ceremony — venue, time, dress code, and anything guests
        should know before the big moment.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        When & Where
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Date:</strong> Saturday, October 3rd, 2026
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Time:</strong> 2:00 PM
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Location:</strong> <br/>
        Newport State Park Beach<br/>
        407-381 Newport Park Rd<br/>
        Ellison Bay, WI 54210<br/>
        The ceremony will take on a beach in front of parking lot 3<br/>
      </Typography>
    </Box>
  )
}
