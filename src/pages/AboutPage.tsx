import { Box, Grid, Typography } from '@mui/material'

const aboutPhotos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg']

export default function AboutPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        About Us
      </Typography>

      <Typography variant="body1">
        If you're invited to our wedding, then you already know us.
        Bethany likes to make compost, hold her chickens, and sit in a cozy corner reading a book.
        Matt likes to forage fruit, do handstands, and study videogame history.
        We met over 30 years ago at a Cross Country meet, and after navigating the adventures of a 2,000 mile long distance relationship,
        a pandemic, and being relatively tired middle-aged adults, we made it to the finish line! We look forward to many years together
        sipping coffee, tending to our garden and animals, spending time in nature, and rewatching every episode of Columbo.
        </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {aboutPhotos.map((filename) => (
          <Grid key={filename} size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}images/about/${filename}`}
              alt="Matt and Bethany"
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
