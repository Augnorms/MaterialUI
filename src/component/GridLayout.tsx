import React from 'react'
import {Box, Stack, Grid, Typography} from '@mui/material'

export default function GridLayout() {
  
    /* 
       Breakpoints:
       
       xs: mobile
       sm: Tablet
       md: desktop
       lg: larger monitors
       xl: larger monitors 


       spacing:
       rowSpacing:
       columnSpacing:
     
    */



  return (
    <Grid
      container
      width={'100%'}
    >

        <Grid item xs={12} lg={6}>
            <Box 
              bgcolor={'red'}
              height={'200px'}
              ><Typography 
                  sx={{
                      fontSize:{xs:'18px', lg:'30px'},
                      color:{xs:'grey', lg:'white'}
                 }}>
                    Item 1
                </Typography></Box>
        </Grid>

        <Grid item xs={12} lg={6}>
           <Box 
            bgcolor={'blue'}
            height={'200px'}
           >Item 2</Box>
        </Grid>

        <Grid item xs={12} lg={6}>
           <Box 
            bgcolor={'orange'}
            height={'200px'}
            >Item 3</Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box 
            bgcolor={'pink'}
            height={'200px'}
            >Item 4</Box>
        </Grid>

    </Grid>
  )
}
