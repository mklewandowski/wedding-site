import { Box, Divider, Typography } from '@mui/material'

export default function CeremonyPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Ceremony
      </Typography>

      <Typography variant="body1">
        Details about the ceremony — venue, time, directions, and anything guests
        should know before the big moment.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        When & Where
      </Typography>
      <Typography variant="body1">
        <strong>Date:</strong> Saturday, October 3rd, 2026
      </Typography>
      <Typography variant="body1">
        <strong>Time:</strong> Ceremony STARTS @ 2:00 PM, lease arrive 15-20 minutes early.
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> Newport State Park Beach, <a href="https://www.google.com/maps/search/?api=1&query=Newport+State+Park+Beach+Ellison+Bay+WI+54210" target="_blank">407-381 Newport Park Rd, Ellison Bay, WI 54210</a>
        <br/>The ceremony will be held on a beach in front of parking lot 3. We will meet at the shelter building next to parking lot 3.<br/>
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        More...
      </Typography>
      <Typography variant="body1">
        The ceremony will take place at Newport State Park Beach. <b><i>NOTE: there is a $13 admission fee for the park.</i></b> 
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        When you arrive, park in parking lot 3 (parking lot 2 is just a short walk if lot 3 is full). 
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        Take the path to the right and we will gather in the shelter building before heading over to the beach for the ceremony.  
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        There will be a limited number of chairs as well as blankets for sitting on the beach.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="body1">
        <strong>Enter Newport State Park Beach (there is a $13 admission fee for the park)</strong>
      </Typography>
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/1.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
        }}
      />

      <Typography variant="body1" sx={{ mt: 4 }}>
        <strong>Park in Parking Lot 3</strong>
      </Typography>
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/2.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
        }}
        />

      <Typography variant="body1" sx={{ mt: 4 }}>
        <strong>Enter park and take the path to the right towards the shelter building</strong>
      </Typography>
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/3.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
        }}
        />
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/4.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
          mt: 2,
        }}
        />

      <Typography variant="body1" sx={{ mt: 4 }}>
        <strong>Follow the path (it's a very short walk) to the shelter building where we will meet</strong>
      </Typography>
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/6.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
        }}
        />

      <Typography variant="body1" sx={{ mt: 4 }}>
        <strong>When ready, we will walk over to the beach for the ceremony</strong>
      </Typography>
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/ceremony/7.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
        }}
        />

    </Box>
  )
}
