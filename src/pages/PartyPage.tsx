import { Box, Divider, Typography } from '@mui/material'

export default function PartyPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Party
      </Typography>

      <Typography variant="body1" paragraph>
        Everything about the celebration after the ceremony — dinner, dancing,
        and how the evening will unfold.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        When & Where
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Date:</strong> Saturday, October 3rd, 2026
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Time:</strong> after ceremony (about 3:00 PM)
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Location:</strong> 2729 Pioneer Road, Sister Bay, WI 54234
      </Typography>
    </Box>
  )
}
