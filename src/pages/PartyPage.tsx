import { Box, Divider, Grid, Typography } from '@mui/material'


const aboutPhotos = ['1p.jpg', '2p.jpg', '3p.jpg', '4p.jpg']


export default function PartyPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Party
      </Typography>

      <Typography variant="body1" paragraph>
        Everything about the celebration after the ceremony.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        When & Where
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Date:</strong> Saturday, October 3rd, 2026
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Time:</strong> after ceremony (about 3:30 PM)
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Location:</strong> 2729 Pioneer Road, Sister Bay, WI 54234
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        More...
      </Typography>
      <Typography variant="body1" paragraph>
        When the ceremony ends, we will all meet back at the party site (it's about a 15 minute drive). 
      </Typography>
      <Typography variant="body1" paragraph sx={{ my: 4 }}>
        Food will be served at the party. We will have appetizers, a main course (meat and vegetarian paella) with sides, and cake for dessert.
      </Typography>
      <Typography variant="body1" paragraph sx={{ my: 4 }}>
        We'll gather, eat, and then dance and hang out for as long as we want!
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {aboutPhotos.map((filename) => (
          <Grid key={filename} size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={`/images/party/${filename}`}
              alt="Party Site"
              sx={{
                width: '100%',
                borderRadius: 2,
                display: 'block',
              }}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
