import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, CardMedia, Button} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

export default function Cardui() {
  return (
    <Box
      width={'17%'}
    >
       <Card>
          <CardMedia 
            component={'img'}
            height={'140px'}
            image='./images/20.jpg'
          />
          
          <CardContent>

            <Typography 
              gutterBottom 
              variant='h5' 
              component={'div'}
              textAlign={'center'}
              >My Card</Typography>

              <Typography
                variant='body2'
                color='primary'
              >
                jfhkdbfkhhsvsfbkjssjbf
                jbkjfbsvdjfbkfjbfjwbfkjwb
              </Typography>

          </CardContent>
          <CardActions>
             <Button variant="contained" color='primary'>cancel</Button>
             <Button variant="contained" color='secondary'>Ok</Button>
          </CardActions>
      </Card> 
        
    </Box>
  )
}
