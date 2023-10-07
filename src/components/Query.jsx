import { Box, Button, Input,  Stack, Text} from "@chakra-ui/react";
import React from "react";

function Query(){
    return(
        <Box
        >
        {/* search box start */}
        <Box
          bgColor={"white"}
          w={{ base: "100%", sm: "100%", md: "130%", lg: "100%" }}
          rounded={"xl"}
          mb={2}
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        >
        
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={{ base: "column", sm: "row" }}>
              <Box p={["1px", "1px", "1px"]} w={["100%", "50%", "60%"]} >
                <Text fontSize='2xl' position={"relative"} textAlign="left" ml={3} >Query</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "160%"]} textAlign="center"> 
                <Input variant="outline" placeholder="Enter Contact Here" rounded={"30px"}/>
              </Box>
              <Box p={["1px", "1px", "5px"]} w={["100%", "30%", "25%"]} textAlign="right">
                <Button
                  type="submit"
                  bg="#1A237E"
                  color="white"
                  h={8}
                  position={"relative"}
                  b={10}
                  // w={20}
                  _hover={{ bg: " #202A9A" }}
                  rounded={"xl"}
                  alignItems={"center"}
                  fontFamily={"sans-serif"}
                  fontWeight={"light"}
                  fontSize={13}
                >
                  Search
                </Button>
              </Box>
            </Stack>
          </Box>

       
        </Box>
        {/* search bx closed */}

        {/* main box start  */}
        <Box>
        <Box
          bgColor={"white"}
          w={{ base: "100%", sm: "100%", md: "130%", lg: "100%" }}
          rounded={"xl"}
          mb={2}
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        >
          {/* BOX IS USED FOR DISPLAY NAME, USER_ID, CONTACT_NUMBER */}
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={{ base: "column", sm: "row" }}>
              <Box p={["1px", "1px", "1px"]} w={["100%", "50%", "100%"]} float={"left"}>
                <Text fontSize='lg' mr={8} noOfLines={["1","2"]}>Soham Somaiya</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "50%", "100%"]} float={"right"}>
                <Text fontSize='lg' ml={5}> +911234567890</Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
        {/* main box closed */}

        
      </Box>
    );
}

export default Query;