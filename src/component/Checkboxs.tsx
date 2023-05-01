import React from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import {BookmarkBorder, Bookmark} from '@mui/icons-material'
import {useState} from 'react'

export default function Checkboxs() {
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handlechange = ()=>{
    setAcceptTerms(!acceptTerms)
  }

  const [skills, setSkills] = useState<string[]>([])

  const handleskills = (e:React.ChangeEvent<HTMLInputElement>)=>{
       const index = skills.indexOf(e.target.value)

       if(index === -1){setSkills([...skills, e.target.value])}

       else{setSkills(skills.filter((skill)=>skill !== e.target.value))}
  }

  return (
    <Box>
        <Box>
            <FormControlLabel 
              label='i accept terms and conditions'
              control={<Checkbox 
                         checked={acceptTerms} 
                         onChange={handlechange}
                         color={'secondary'}
                         />}
             />
        </Box>

        <hr />

          {acceptTerms.toString()}

        <hr />
       
       <Box>
          <Checkbox 
            icon={<Bookmark  sx={{color:'deeppink'}}/>} 
            checkedIcon={<Bookmark />}
            checked={acceptTerms}
            onChange={handlechange}
          />
       </Box>

       <hr />

         {acceptTerms.toString()}

       <hr />

       <Box>
          <FormControl error required>
             <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                      label='Html' 
                      control={<Checkbox value={'html'} 
                      checked={skills.includes('html')} 
                      onChange={handleskills}/>}/>

                    <FormControlLabel 
                      label='Css' 
                      control={<Checkbox value={'css'} 
                      checked={skills.includes('css')} 
                      onChange={handleskills}/>}/>

                    <FormControlLabel 
                      label='javaScript' 
                      control={<Checkbox 
                      value={'javaScript'} 
                      checked={skills.includes('javaScript')} 
                      onChange={handleskills}/>}/>
                </FormGroup>
          </FormControl>
       </Box> 

       <hr />

        {skills.join(", ")}

      <hr />

    </Box>

  )
}
