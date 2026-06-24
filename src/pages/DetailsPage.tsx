import { Box, Divider, Typography } from '@mui/material'

export default function DetailsPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Details
      </Typography>

      <Typography variant="body1" paragraph>
        Everything you need to know for the weekend — dress code, travel, lodging,
        and other practical info for guests.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Super Basic Overview
      </Typography>
      <Typography variant="body1" paragraph>
        The ceremony will be held on a beach at Newport State Park in Ellison Bay, Wisconsin at 2:00 PM on Saturday, October 3rd, 2026.
        Following the ceremony there will be a catered party in Sister Bay, Wisconsin.</Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Attire
      </Typography>
      <Typography variant="body1" paragraph>
        Wear whatever you want! That said, the ceremony will be held on a sandy beach (so heels might not be great - or at least bring a change of shoes). 
        The party will take place outside (unless we get severe weather). 
        It might be a little chilly as the sun goes down so a sweater or jacket is recommended.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Travel & Lodging
      </Typography>
      <Typography variant="body1" paragraph>
        Door County, Wisconsin (the peninsula in the upper right corner of the state), gets busy during the autumn so please book lodging in advance. 
        Sturgeon Bay is good option for lodging. Green Bay is a little further (90 minute drive to the wedding), but will have even more options.
      </Typography>

      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Gifts & Registry
      </Typography>
      <Typography variant="body1" paragraph>
        We have all the stuff we need so there is no wedding registry and no gifts are required or expected. Just bring yourself! If you feel the need to give us something, then a card with a personal note would be great!
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Food & Dietary Restrictions
      </Typography>
      <Typography variant="body1" paragraph>
        We will be serving meat and vegetarian paella with optional seafood on the side. We will also have vegan appetizers. 
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Weather
      </Typography>
      <Typography variant="body1" paragraph>
        The ceremony and party will both be outside. The ceremony site does include a covered building that we can use in case of rain.
        The dining are at the party is covered, but if the weather is severe we also have an indoor option at the party site.
      </Typography>

    </Box>
  )
}
