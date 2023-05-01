import React from 'react'
import {Box, Button, Menu, MenuItem} from '@mui/material'
import {KeyboardArrowDown} from '@mui/icons-material'
import { useState } from 'react'

export default function MenuComponent() {

 const [open, setOpen] = useState<null | HTMLElement>(null)
 const display = Boolean(open)

 const handleMenu = (e:React.MouseEvent<HTMLButtonElement>)=>{
      setOpen(e.currentTarget)
 }
 const handleMenuClose = ()=>{
    setOpen(null)
 }

  return (
    <Box>
        <Button 
          variant='contained' 
          color={'secondary'}
          id={'res-button'}
          onClick={handleMenu}
          aria-controls={display ? 'res-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={display ? 'true' : undefined}
          endIcon={<KeyboardArrowDown />}
          >
            MyMenu
        </Button>

        <Menu   
          id={'res-menu'} 
          anchorEl={open} 
          open={display}
          MenuListProps={{
            'aria-labelledby': 'res-button'
          }}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
    
          >

            <Box width={'50rem'} my={'1rem'}>
            <MenuItem onClick={handleMenuClose} >
                Blog
            </MenuItem>
            
            <MenuItem onClick={handleMenuClose}>
                Podcast
            </MenuItem>

            </Box>

        </Menu>
        
    </Box>
  )
}
