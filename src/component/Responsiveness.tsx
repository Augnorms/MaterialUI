import React from 'react'
import { Box } from '@mui/material'

export default function Responsiveness() {
    /*
      xs: 0 >> 599
      sm: 600 >> 899
      md: 900 >> 999
      lg: 1200 >> 1535
      xl: 1536 >

    */
  return (
    <Box
      sx={{
        height:'300px',
        width:{xs:'100px', sm:'200px', md:'300px', lg:'400px', xl:'500px'},
        background:'dodgerblue'
      }}
    >
        Responsiveness
    </Box>
  )
}
