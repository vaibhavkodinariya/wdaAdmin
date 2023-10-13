import { React, useState, useLayoutEffect } from "react";

import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import loader from "./images/animation.gif";
// import Pages from "./components/Pages";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={loader} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <>
      {!isLoggedIn ? (
        <>
          <ChakraProvider>
            <Login />
          </ChakraProvider>
        </>
      ) : (
        <>
          <ChakraProvider>
            <Home />
          </ChakraProvider>
        </>
      )}
    </>
  );
}
export default App;
