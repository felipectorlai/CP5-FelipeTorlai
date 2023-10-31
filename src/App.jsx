import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import React, { useState } from 'react';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/Cep';

import Techemergentes from './pages/techemergentes';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <>
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/techemergentes' element={<Techemergentes />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
                  <Button onClick={mudarTheme}>BOTÃO</Button>
    </Container>
    </ThemeProvider>
    </>
  );
}
export default App;