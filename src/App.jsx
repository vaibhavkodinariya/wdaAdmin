import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'


import Pages from './components/Pages';

function App() {
  return (
    <>    
        <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </>
  );

}
export default App;
