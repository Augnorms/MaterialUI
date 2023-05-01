import React from 'react'
import {Stack, Rating} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'
import { useState } from 'react'


export default function Ratings() {
  
  const[rating, setRating] = useState<number | null>(null)

  const handleRating:any = (e:React.ChangeEvent<{}>, newRate: number | null)=>{
        setRating(newRate)
  } 

  return (
    <Stack spacing={2} direction={'row'}>
       <Rating 
        value={rating} 
        onChange={handleRating}
        precision={0.5}
        sx={{color:'dodgerblue'}}
       />

       <hr />
       {rating}

       <Rating 
        value={rating} 
        onChange={handleRating}
        icon={<Favorite 
               fontSize='inherit'
             />}
        emptyIcon={
              <FavoriteBorder 
                fontSize='inherit'
              />}     
       />
    </Stack>
  )
}
