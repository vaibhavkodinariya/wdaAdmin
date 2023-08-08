import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ChakraProvider } from '@chakra-ui/react'
// import './App.css'
import Login from '../src/pages/Login'

function App() {
  return (
    <>    
        <ChakraProvider>
        <Login />
      </ChakraProvider>
    </>
  );

}
export default App;
