import React from "react";

import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";

function QueryView() {
  return (
    <Box>
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
            <Box p={["1px", "1px", "1px"]} w={["100%", "50%", "60%"]}>
              <Text
                fontSize="2xl"
                position={"relative"}
                textAlign="left"
                ml={3}
              >
                Query
              </Text>
            </Box>
            <Box
              p={["1px", "1px", "1px"]}
              w={["100%", "30%", "160%"]}
              textAlign="center"
            >
              <Input
                variant="outline"
                placeholder="Enter Contact Here"
                rounded={"30px"}
              />
            </Box>
            <Box
              p={["1px", "1px", "5px"]}
              w={["100%", "30%", "25%"]}
              textAlign="right"
            >
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
           
            <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
              <Text>Web Id: #1234567890123456789</Text>
            </Box>
            <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
              <Text>Date: xx/xx/xxxx    </Text>
            </Box>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box>
        <Box
          w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
          p={2}
          mx="auto"
        >
          {/* <Stack direction={{ base: "column", sm: "row" }}> */}
           
            <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "95%"]}>
              <Text>demo query text will be here as on realtime the user will submit there Quries to be there for the resolvement from that</Text>
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
                Back
              </Button>
            </Box>
          {/* </Stack> */}
         
        </Box>
      </Box>
    </Box>
  );
}

export default QueryView;
