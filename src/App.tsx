import React from "react"
import './App.css'
import { Box } from "@mui/material"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MuTypo from "./component/MuTypo"
import Buttons from "./component/Buttons"
import Textfield from "./component/Textfield"
import Select from "./component/Select"
import RadioButton from "./component/RadioButton"
import Checkboxs from "./component/Checkboxs"
import Switchs from "./component/Switchs"
import Ratings from "./component/Ratings"
import BoxLayout from "./component/BoxLayout"
import StackLayout from "./component/StackLayout"
import GridLayout from "./component/GridLayout"
import MenuComponent from "./component/MenuComponent"
import ImageLists from "./component/ImageLists"
import NavBar from "./component/NavBar"
import Responsiveness from "./component/Responsiveness"
import Cardui from "./component/Cardui"

function App() {
 

  return (
  <Box className='App'> 

    <BrowserRouter>
      <Routes>
           <Route path={'/'} element={<MuTypo />}/>
           <Route path={'/button'} element={<Buttons />}/>
           <Route path={'/textfield'} element={<Textfield />}/>
           <Route path={'/select'} element={<Select />}/>
           <Route path={'/radio'} element={<RadioButton />}/>
           <Route path={'/checkbox'} element={<Checkboxs />}/>
           <Route path={'/switch'} element={<Switchs />}/>
           <Route path={'/ratings'} element={<Ratings />}/>
           <Route path={'/box'} element={<BoxLayout />}/>
           <Route path={'/stack'} element={<StackLayout />}/>
           <Route path={'/grid'} element={<GridLayout />}/>
           <Route path={'/menu'} element={<MenuComponent />}/>
           <Route path={'/image'} element={<ImageLists />}/>
           <Route path={'/nav'} element={<NavBar />}/>
           <Route path={'/responsive'} element={<Responsiveness />}/>
           <Route path={'/card'} element={<Cardui />}/>
      </Routes>
    </BrowserRouter>
  </Box>  
  )
}

export default App
