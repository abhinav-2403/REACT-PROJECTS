import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import  city  from '../assets/images/city.jpg';
import axios from 'axios';
import App from '../App.css'; 

const CodeGen = () => {

    const [advice, setAdvice] = useState('');

    const handleClick = () => {

       axios.get('https://api.adviceslip.com/advice')
       .then((response)=>{
        setAdvice(response.data.slip.advice);
       })

    };

  return (

<Box 
    style={{ backgroundImage: `url(${city})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '760px',
}}
>
  <Box className='big-container'>

    <Box className='container' sx={{background:'#AAF0D1'}}>

        <Typography variant ='h6' mb={6} sx={{color: '#008000'}}>
            {advice}
        </Typography>
      
       <Button className='btn-lg' variant='contained' sx={{ height:'30px', width:'150px', mb: '-100px', position:'fixed'}} onClick = {handleClick} >
             Search...
        </Button>

    </Box>
  </Box>
              
</Box>
 
  )
}

export default CodeGen