import React from 'react'
import { Button, IconButton, Stack, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material'
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import FormatBoldSharpIcon from '@mui/icons-material/FormatBoldSharp';
import FormatItalicSharpIcon from '@mui/icons-material/FormatItalicSharp';
import FormatUnderlinedSharpIcon from '@mui/icons-material/FormatUnderlinedSharp';

export default function Buttons() {
  return (
      <Stack spacing={4}>
          <Stack spacing={2} direction={'row'}>
            <Button variant="text" href='https://www.facebook.com'>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>

          <Stack spacing={2} direction={'row'}>
            <Button variant="contained" color='primary'>Primary</Button>
            <Button variant="contained" color='secondary'>Secondary</Button>
            <Button variant="contained" color='warning'>Warning</Button>
            <Button variant="contained" color='error'>Error</Button>
            <Button variant="contained" color='info'>Info</Button>
            <Button variant="contained" color='success'>Success</Button>
          </Stack>

          <Stack spacing={2} direction={'row'} display={'block'}>
            <Button variant="contained" size='small'>Small</Button>
            <Button variant="contained" size='medium'>Medium</Button>
            <Button variant="contained" size='large'>Large</Button>
          </Stack>

          <Stack spacing={2} direction={'row'}>
            <Button variant='contained' startIcon={<KeyboardArrowLeftSharpIcon />} 
            endIcon={<ChevronRightSharpIcon />}>Backward</Button> 

            <IconButton aria-label='send'> <ChevronRightSharpIcon /> </IconButton>

            <Button 
              variant='contained'
              color='secondary' 
              disableElevation
              disableRipple
              sx={{
                backgroundColor: '#f00',
                '&:hover': {
                  backgroundColor: '#0f0',
                },
              }}
            >
              disableElevation
            </Button>

          </Stack>

          <Stack  direction={'row'}>

            <ButtonGroup variant='contained' orientation='horizontal'>
              <Button>left</Button>
              <Button>middle</Button>
              <Button>right</Button>
            </ButtonGroup>

          </Stack>

          <Stack  direction={'row'}>

            <ButtonGroup variant='contained' orientation='vertical' aria-aria-label='aligned button group'>
              <Button>left</Button>
              <Button>middle</Button>
              <Button>right</Button>
            </ButtonGroup>

          </Stack>

          <Stack direction={'row'}>

             <ToggleButtonGroup aria-label='text formatting' exclusive color='success'>
                <ToggleButton value='bold'><FormatBoldSharpIcon /></ToggleButton>
                <ToggleButton value='italic'><FormatItalicSharpIcon /></ToggleButton>
                <ToggleButton value='underlined'><FormatUnderlinedSharpIcon /></ToggleButton>
             </ToggleButtonGroup>

          </Stack>
      </Stack>
  )
}
