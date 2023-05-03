import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

export default function NavBar() {
  return (
    <AppBar position='static'>
        <Toolbar sx={{backgroundColor:'#fff'}}>
            <IconButton size='medium' edge='start' aria-label='logo'>
               <CatchingPokemon /> 
            </IconButton>
            <Typography variant='h6' component={'div'} sx={{color:'orange', flexGrow:'1',}}>
                POKEMONAPP
            </Typography>

            <Stack direction={'row'} spacing={2}>
                <Button>Features</Button>
                <Button>Pricing</Button>
                <Button>About</Button>
                <Button>Register</Button>
                <Button>Login</Button>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}
