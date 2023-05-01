import React from 'react'
import {Box, Stack} from '@mui/material' 

export default function BoxLayout() {
  return (
    <Stack spacing={2} direction={'column'}>
        <Box 
          component={'section'}
          sx={{
            bgcolor:'deeppink',
            '&:hover': {
                backgroundColor: '#0f0',
              }
          }}
          >
            section
         </Box>

         <Box 
           component={'div'}
           sx={{
             bgcolor:'dodgerblue'
           }}
           width={'100%'}
           height={'300px'}
           display={'flex'}
           justifyContent={'center'}
           >
            division
         </Box>
    </Stack>
  )
}
