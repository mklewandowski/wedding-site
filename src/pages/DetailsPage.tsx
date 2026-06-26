import { Box, Divider, Typography } from '@mui/material'

export default function DetailsPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        Details
      </Typography>

      <Typography variant="body1">
        Everything you need to know for the weekend — attire, travel, lodging, food,
        and other practical info for guests.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Super Basic Overview
      </Typography>
      <Typography variant="body1">
        The ceremony will be held on a <a href="https://www.google.com/maps/search/?api=1&query=Newport+State+Park+Beach+Ellison+Bay+WI+54210" target="_blank">beach at Newport State Park</a> in Ellison Bay, Wisconsin at 2:00 PM on Saturday, October 3rd, 2026.
        Following the ceremony, there will be a catered <a href="https://www.google.com/maps/search/?api=1&query=2729+Pioneer+Road+Sister+Bay+WI+54234" target="_blank">party</a> in Sister Bay, Wisconsin.</Typography>
      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Attire
      </Typography>
      <Typography variant="body1">
        Wear whatever you want! That said, the ceremony will be held on a sandy beach so be ready to slip out of heels and
        go barefoot or maybe even bring a change of shoes.
        The party will take place outside (unless we get severe weather).
        It might be chilly as the sun goes down so warm layers are recommended.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Travel & Lodging
      </Typography>
      <Typography variant="body1">
        Door County, Wisconsin (the peninsula in the upper right corner of the state) gets busy in the fall so please book lodging in advance.
        Anything on the peninsula north of and including Sturgeon Bay is a great option (Bailey's Harbor, Ellison Bay, Fish Creek, Ephraim, Egg Harbor, Jacksonville, etc.).
        Green Bay and the surrounding area is a little further south but will have even more options if you don't mind the drive (~90 minute drive to the wedding).
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Gifts & Registry
      </Typography>
      <Typography variant="body1">
        We have all the stuff we need so there is no wedding registry and no gifts are required or expected.
        Just bring yourself! If you feel the need to give us something, then a card with a personal note would be great!
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Food & Dietary Restrictions
      </Typography>
      <Typography variant="body1">
        We will be serving meat and vegetarian paella with optional seafood as the main dish.
        We will also have gazpacho and salad side dishes.
        There will be assorted appetizers including vegetarian and vegan options.
        Beverages will include kombucha and lemonade. Alcohol will not be served.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem' }}>
        Weather
      </Typography>
      <Typography variant="body1">
        The ceremony and party will both be outside. The ceremony site includes a covered building for gathering, but the ceremony will be on the beach (rain or shine!).
        The dining area at the party is exposed but covered. If the weather is severe, we also have an indoor dining option at the party site.
      </Typography>

    </Box>
  )
}
