import React from 'react'
import {Stack, Box, Divider} from '@mui/material'


export default function StackLayout() {
  return (
    <Stack 
      width={'100%'} 
      spacing={1}
      direction={'column'}
      divider={<Divider 
                 orientation='horizontal'
                 flexItem 
                 sx={{border:'2px solid orange'}}
             />}
      >

        <Box 
            component={'section'}
            sx={{
                width:'100%',
                height:'200px',
                background:'dodgerblue',
            }}
         >

        </Box>

        <Box 
            component={'section'}
            sx={{
                width:'100%',
                height:'200px',
                background:'deeppink'
            }}
         >

        </Box>
   
    </Stack>
  )
}
