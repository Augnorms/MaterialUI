import React from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'
import { useState } from 'react'

export default function Switchs() {
  const [mode, setMode] = useState<boolean>(false)
  const handleChangeMode = ()=>{
      setMode(!mode)
  }

  return (
    <Box>
         <FormControlLabel 
           label='Dark mode' 
           control={<Switch
                      checked={mode} 
                      onChange={handleChangeMode}
                    />}/>
          <hr />
           {mode.toString()}
          <hr />          
    </Box>
  )
}
