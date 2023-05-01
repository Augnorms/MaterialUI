import React from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material'
import { useState } from 'react'

export default function RadioButton() {
 const [value, setValue] = useState<string>('')

 const handlechange = (e:React.ChangeEvent< HTMLInputElement>)=>{
    setValue(e.target.value as string)
 }

  return (
    <Box>
         <FormControl required error>
            <FormLabel id='job-experience-group-label'>
                Years Of Experience
            </FormLabel>
            <RadioGroup 
              name='job-experience-group' 
              aria-labelledby='job-experience-group-label'
              value={value}
              onChange={handlechange}
              row
              >
                <FormControlLabel control={<Radio size='small'/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio size='medium'/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio size='medium'/>} label='6-10' value='6-10'/>
            </RadioGroup>
         </FormControl>

         <hr />

         {value}


    </Box>
  )
}
