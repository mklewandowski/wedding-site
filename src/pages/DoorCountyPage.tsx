import { Box, Divider, Typography } from '@mui/material'

export default function DoorCountyPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
       Visiting Door County
      </Typography>

      <Typography variant="body1">
        The wedding will take place in Door County, Wisconsin, a scenic peninsula at the top of the state nestled between Green Bay and Lake Michigan.
        There are plenty of fun things to do while in town. Below are some of our local recommendations.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="body1">
        <ul>
        <li>Explore <a href = "https://ridgessanctuary.org/" target="_blank">The Ridges</a>, one of the Midwest's most diverse ecosystems.</li>
        <li>Take a ferry to <a href = "https://www.doorcounty.com/discover/washington-island/" target="_blank">Washington Island.</a></li>
        <li>Go hiking in <a href = "https://dnr.wisconsin.gov/topic/parks/peninsula" target="_blank">Peninsula State Park.</a></li>
        <li>Grab dinner at <a href = "https://aljohnsons.com/" target="_blank">Al Johnson's restaurant</a>, famous for its rooftop goats.</li>
        <li>Have coffee and treats at the <a href="https://brownbutterbakeshop.com/" target="_blank">Brown Butter Bakery</a>, makers of our delicious wedding cake.</li>
        <li>And have another coffee at <a href="https://www.roostandbanter.com/" target="_blank">Roost and Banter</a>, a local favorite.</li>
        <li>Embrace your inner Wisconsinite and go to a <a href="https://www.doorcounty.com/experience/fish-boils/" target="_blank">fish boil.</a></li>
        <li>Drive down to Green Bay and visit Titletown and historic <a href = "https://www.packers.com/lambeau-field/" target="_blank">Lambeau Field.</a></li>
        </ul>
      </Typography>

      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}images/beach.jpg`}
        alt="Ceremony Site"
        sx={{
          width: '100%',
          borderRadius: 2,
          display: 'block',
          my: 4,
        }}
        />

    </Box>
  )
}