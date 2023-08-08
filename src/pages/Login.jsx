// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import background from "../images/login_backgrund.jpeg";

import {
    // Box,
    Button,
    FormControl,
    Grid,
    // FormLabel,
    Input,
    // Stack,
    Text,
  } from "@chakra-ui/react";
  
function Login(){
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

 

  const validateMobileNumber = (mobileNumber) => {
    if (mobileNumber.length !== 10) {
      setMobileError("Mobile number should be 10 digits.");
    } else {
      setMobileError("");
    }
  };

  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    setMobileNumber(newMobileNumber);
    validateMobileNumber(newMobileNumber);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswordStrength(newPassword);
  };

  const validatePasswordStrength = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(password);
  
    if (
      password.length >= 8 &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigits &&
      hasSpecialChars
    ) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password should be at least 8 characters and include uppercase, lowercase, digits, and special characters."
      );
    }
  };
  

  const handleLogin = () => {
    if (mobileError === "" && passwordError === "") {
    
      console.log("Login successful!");
    }
  };


    return (
        <Grid
          
          bgImage={background}
          bgSize={{
            base: "contain",    
            md: "cover",    
          }}
          bgPosition="center"
          bgRepeat="no-repeat"
         
          placeItems="center"
          position={"fixed"}
          minW={{ base: "100%", md: "85vh" }}
          minH={{ base: "100%",sm: "80%", md: "80vh" }}
       
          bottom={{ base: "5vh", md: "10vh" }}
          padding={{ base: "0", md: "10vh" }}
          margin={{ base: "0", md: "10vh" }}
          marginRight={{ base: "0", md: "40vh" }}
          marginLeft={{ base: "2vh", md: "70vh" }}
          
        >
          <Grid 
           gap={5} 
           p={4} 
          
          w={{ base: "80%", md: "300px" }}
           alignSelf="center"
          
          position={{ base: "fixed", md: "relative" }}
           bottom={{base: "20vh", md:"-35vh"}}>
            <FormControl>
              {/* <FormLabel>Username</FormLabel> */}
              <Input
                type="number"
                name="data"
                value={mobileNumber}
                borderColor={"black"}
                maxLength={10}  // Set maximum length to 10 characters
                placeholder="Mobile No"
                fontFamily={"noto-serif"}
                focusBorderColor="#1A237E"
                rounded={"xl"}
                onChange={handleMobileNumberChange}
              />
            </FormControl>
                {mobileError && (
              <Text color="red" fontSize="sm">
                {mobileError}
              </Text>
            )}
            <FormControl>
              {/* <FormLabel>Password</FormLabel> */}
              <Input 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                minLength={8} 
                maxLength={16} 
                borderColor={"black"}
                focusBorderColor={"#1A237E"}
                rounded={"xl"}
                fontFamily={"noto-serif"}
               />
            </FormControl>
            <Button 
            type="submit"
            colorScheme="#1A237E" 
            bg="#1A237E"
            w="50%" 
            h="25px"
            // rounded={10}
            rounded={"3xl"}
            fontFamily={"noto-serif"}
            fontSize={"md"}
            fontWeight={"light"}
            alignSelf="center"
            justifySelf="center"
            onClick={handleLogin}
            

            >
              Login
            </Button>
          </Grid>
        </Grid>
      );
}

export default Login;