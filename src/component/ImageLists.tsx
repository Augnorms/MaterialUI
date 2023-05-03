import React from 'react'
import {Stack, ImageList, ImageListItem, Box, ImageListItemBar} from '@mui/material'

let images = [
    {
        img:'/images/01.jpg',
        title:'car1'
    },
    {
        img:'./images/6.JPG',
        title:'car2'
    },
    {
        img:'./images/12.jpg',
        title:'car3'
    },
    {
        img:'./images/13.jpg',
        title:'car4'
    },
    {
        img:'./images/20.jpg',
        title:'car5'
    },
    {
        img:'./images/21.jpg',
        title:'car6'
    },
]


export default function ImageLists() {
  return (
    <Stack spacing={4}>
       <ImageList 
         sx={{width:'500px', height:'450px'}}
         cols={3}
         rowHeight={164}
         >
            {
                images.map((img)=>(
                    <ImageListItem key={img.title}>
                        <img src={`${img.img}`} alt={img.title} loading='lazy'/>
                        <ImageListItemBar title={img.title}/>
                    </ImageListItem>
                ))
            }

       </ImageList>

       <hr />

       <ImageList 
         sx={{width:'500px', height:'450px'}}
         cols={3}
         variant={'woven'}
         gap={4}
         >
            {
                images.map((img)=>(
                    <ImageListItem key={img.title}>
                        <img src={`${img.img}`} alt={img.title} loading='lazy'/>
                    </ImageListItem>
                ))
            }

       </ImageList>

       <hr />

     <Box sx={{width:'500px', height:'450px', overflow:'scroll'}}>
        <ImageList 
            variant={'masonry'}
            cols={3}
            gap={4}
            >
                {
                    images.map((img)=>(
                        <ImageListItem key={img.title}>
                            <img src={`${img.img}`} alt={img.title} loading='lazy'/>
                        </ImageListItem>
                    ))
                }

        </ImageList> 
    </Box>      

    </Stack>
  )
}

