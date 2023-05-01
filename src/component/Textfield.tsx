import React from 'react'
import {Stack, TextField, InputAdornment, FormControl, FormLabel} from '@mui/material'

export default function Textfield() {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
           <TextField label='Name' variant='outlined'/>
           <TextField label='Name' variant='filled'/>
           <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack direction='row' spacing={2}>
           <TextField label='small secondary' size='small' color='secondary' variant='outlined'/>
        </Stack>

        <Stack direction='row' spacing={2}>
           <TextField label='Form Input' size='medium' required/>
           <TextField label='Form Input' size='medium' helperText="do not share password"/>
           <TextField label='Password' type='password' size='medium' disabled/>
           <TextField label='ReadOnly' type='text' InputProps={{readOnly:true}}/>
        </Stack>

        <Stack direction='row' spacing={2}>
           <TextField label='Amount' size='medium' InputProps={{
             startAdornment: <InputAdornment position='start'>$</InputAdornment>
           }} />
           <TextField label='Weight' size='medium' InputProps={{
             endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
           }} />
        </Stack>

        <Stack direction='row' spacing={2}>
           <TextField label='Error' size='medium' required error/>
           <TextField label='Error' size='medium' required InputProps={{error:true}} color='secondary'/>
        </Stack>

        <Stack direction={'row'}>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Hello
                </FormLabel>
                <TextField label='hello'/>
            </FormControl>
        </Stack>
    </Stack>
  )
}
