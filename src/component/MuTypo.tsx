import {Typography, Stack, Box} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

export default function MuTypo() {
  return (
    
    <Box
      width={'100%'}
    >

     <Stack spacing={2}>
       <Link to='/button'>Buttons</Link>
       <Link to='/textfield'>Textfield</Link>
       <Link to='/select'>Select</Link>
       <Link to='/radio'>Radio</Link>
       <Link to='/checkbox'>Checkbox</Link>
       <Link to='/switch'>Switch</Link>
       <Link to='/ratings'>Ratings</Link>
       <Link to='/box'>BoxLayout</Link>
       <Link to='/stack'>StackLayout</Link>
       <Link to='/grid'>GridLayout</Link>
       <Link to='/menu'>MenuList</Link>
     </Stack>
    
      <hr />

    <Typography variant='h1'> MuTypo</Typography>

    <Typography variant='h2'>  MuTypo </Typography>
 
    <Typography variant='h3'> MuTypo </Typography>

    <Typography variant='h4' component={'h1'} gutterBottom> MuTypo </Typography>

    <Typography variant='h5'> MuTypo </Typography>

    <Typography variant='h6' color={'red'} border={'1px solid black'} textAlign={'center'}> MuTypo </Typography>



    <Typography variant='subtitle1'> SubTitle1 </Typography>

    <Typography variant='subtitle2'> SubTitle2 </Typography>


    <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Natus voluptatibus aliquid eos facere est consectetur unde, eum aliquam, adipisci, nisi 
    neque possimus perferendis eius ipsam. Similique veniam adipisci doloremque quos?</Typography>

    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Natus voluptatibus aliquid eos facere est consectetur unde, eum aliquam, adipisci, nisi 
    neque possimus perferendis eius ipsam. Similique veniam adipisci doloremque quos</Typography>


    </Box>

  )
}
