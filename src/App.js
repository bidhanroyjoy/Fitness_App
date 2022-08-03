import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components'
import { ExerciseDetail,Home } from './Pages'
import { Box } from '@mui/material';
import Footer from './Components/Footer';

import './App.css';

const App = () => {
  return (
    <Box width = '400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = 'exercise/:id' element ={<ExerciseDetail /> }/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App