import React from 'react'
import { Stack, Box, TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export default function Select() {
    const [country, setCountry] = useState<string[]>([])

    const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value

        setCountry(typeof value === 'string' ? value.split(', ') : value)
    }

  return (

        <Box width='250px'>
            {country}

            <hr />

           <TextField 
             label='Select Country' 
             select 
             fullWidth 
             value={country} 
             onChange={handlechange}
             SelectProps={{multiple:true}}
             > 

              <MenuItem value='Ghana'>Ghana</MenuItem>
              <MenuItem value='Liberia'>Liberia</MenuItem>
              <MenuItem value='Senegal'>Senegal</MenuItem>
              <MenuItem value='Benin'>Benin</MenuItem>
           </TextField>
        </Box>
    
  )
}
