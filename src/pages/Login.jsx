// import React, { useEffect, useState } from "react";
import { useState } from "react";
import background from "../images/login_background.jpeg";
import { useLoginMutation } from "../services/wdaSlice";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import loader from "../images/animation.gif";
function Login() {
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
    const hasSpecialChars =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        password
      );

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
  const [login, { isLoading }] = useLoginMutation();
  const toast = useToast();
  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileError === "" && passwordError === "") {
      if (!mobileNumber) {
        toast({
          title: "Please Fill Credentials Properly",
          status: "warning",
          duration: 9000,
          isClosable: true,
          colorScheme: "blue",
        });
      } else {
        const user = {
          contactNumber: mobileNumber,
          password: password,
          type: "Admin",
        };
        const result = login(user);
        result.unwrap().then((response) => {
          if (response.success == true) {
            // sessionStorage.setItem("user", JSON.stringify(response.credentials));
            // setIsLoggedIn(true);
            console.log("LoggedIn");
          } else {
            toast({
              title: response.message,
              status: "warning",
              duration: 9000,
              isClosable: true,
              colorScheme: "blue",
            });
          }
        });
      }
    }
  };
  if (isLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={loader} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box
      width={{ base: "100%", md: "100%", lg: "80%" }}
      height={{ base: "90vh", md: "90vh", lg: "99vh" }}
      placeItems="center"
      color={"white"}
    >
      <Grid
        bgImage={background}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        placeItems="center"
        width={{ base: "50vh", md: "70vh", lg: "100vh" }}
        height={{ base: "50vh", md: "70vh", lg: "98%" }}
        marginTop={{ base: "18%", sm: "10vh", md: "10%", lg: "1%" }}
        marginLeft={{ base: "3vh", sm: "1vh", md: "30vh", lg: "55vh" }}
      >
        <Grid
          gap={5}
          p={4}
          w={{ base: "65%", md: "30%", lg: "300px" }}
          alignSelf="center"
          alignItems="center"
          justifyContent="center"
          position={{ base: "relative", md: "fixed" }}
          paddingTop={{ base: "40vh", md: "60vh", lg: "60vh" }}
          // bottom={{ base: "15vh", md: "-30vh", lg: "-35vh" }}
        >
          <FormControl>
            {/* <FormLabel>Username</FormLabel> */}
            <Input
              type="number"
              name="data"
              value={mobileNumber}
              borderColor={"black"}
              maxLength={10} // Set maximum length to 10 characters
              placeholder="Mobile No"
              fontFamily={"noto-serif"}
              focusBorderColor="#1A237E"
              rounded={"xl"}
              onChange={handleMobileNumberChange}
            />
          </FormControl>

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
          {passwordError && (
            <Text color="red" fontSize="sm">
              {passwordError}
            </Text>
          )}
          <Button
            type="submit"
            colorScheme="#1A237E"
            bg="#1A237E"
            w="50%"
            h="35px"
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
    </Box>
  );
}

export default Login;
