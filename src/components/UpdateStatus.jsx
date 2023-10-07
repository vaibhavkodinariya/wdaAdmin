import React from "react";

import {
  Box,
  Text,
  Stack,
  Select,
  Button,
  HStack,
  VStack,
  Input,
} from "@chakra-ui/react";

function UpdateStatus() {
  return (
    <Box 
    
    >
      {/* box is use for search content */}

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
              <Box p={["1px", "1px", "1px"]} w={["100%", "50%", "60%"]} >
                <Text fontSize='2xl' position={"relative"} textAlign="left" ml={3} >Web Status</Text>
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

          {/* BOX OF DOMAIN, STATUS, TYPE, UPDATE */}
          {/* <Box w={{ base: '100%', sm: '80%', md: '100%', lg: "100%" }} p={2} mx="auto">
          <Stack direction={['column', 'row']}>
            <HStack direction={['column', 'row']}>
              <Box pl={['0px', '90px', '90px']}>
                <Text>Domain</Text>
              </Box>
            </HStack>
            <HStack direction={['column', 'row']}>
              <Box pl={['0px', '180px', '180px']}>
                <Text>Status</Text>
              </Box>
              <Box pl={['0px', '150px', '140px']}>
                <Text>Type</Text>
              </Box>
            </HStack>
            <HStack direction={['column', 'row']}>
              <Box pl={['0px', '130px', '150px']} float={['none', 'right', 'right']}>
                <Text>Update</Text>
              </Box>
            </HStack>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box> */}

          {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          {/* <Box w={{ base: '100%', sm: '80%', md: '100%' }} overflow={'hidden'} >
          <Stack direction={['column', 'row']}>
            <Box pl={['0px', '70px', '20px']} overflow={'hidden'} w={['100%', '258px']}>
              <HStack direction={['column', 'column']}>
                <Box overflow={'hidden'} w={['100%', 'auto']} m={1}>
                  <Text noOfLines={2} w={['100%', 'auto']}>
                    www.somethinghhastobeenhappend.edu.in
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box m={1}>
              <VStack direction={['column', 'row']}>
                <Box pl={['0px', '70px', '20px']} m={['3px', '3px', '2px']} w={['100%', '50%',"auto"]}>
                  <Select placeholder="Select Status" rounded={'xl'}>
                    <option>pending</option>
                    <option>complete</option>
                  </Select>
                </Box>
              </VStack>
            </Box>
            <Box m={['8px', '8px', '8px']}>
              <VStack>
                <Box pl={['0px', '55px', '55px']} m={['3px', '3px', '3px']}>
                  <Text>Individual</Text>
                </Box>
              </VStack>
            </Box>
            <Box m={['8px', '8px', '8px']}>
              <VStack direction={['column', 'row']}>
                <Box pl={['0px', '120px', '120px']} position={['relative', 'relative', 'relative']}>
                  <Button
                    type="submit"
                    bg="#1A237E"
                    color="white"
                    h={6}
                    w={20}
                    _hover={{ bg: ' #202A9A' }}
                    rounded={'xl'}
                    fontFamily={'sans-serif'}
                    fontWeight={'light'}
                    fontSize={13}
                  >
                    Update
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box> */}
        </Box>
      </Box>

      {/* search box is end */}
      {/* temporary box code */}
      {/* <Box
        bgColor={"white"}
        w={{ base: "100%", md: "130%" }}
        rounded={"xl"}
        mb={2}
        // boxShadow="xl"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      >

        <Box w={{ base: "80%", md: "100%" }}>
          <Stack direction={["row", "row"]}>
            <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
              <Text>Name:Soham Somaiya</Text>
            </Box>
            <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
              <Text>User Id:#1234567890123456789</Text>
            </Box>
            <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
              <Text>Contact:+911234567890</Text>
            </Box>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box>

        
        <Box w={{ base: "80%", md: "100%" }}>
          <Stack direction={["row", "row"]}>
            <HStack direction={["column", "row"]}>
              <Box pl={"130px"}>
                <Text>Domain</Text>
              </Box>
            </HStack>
            <HStack direction={["column", "row"]}>
              <Box pl={"198px"}>
                <Text>Status</Text>
              </Box>
              <Box pl={"140px"}>
                <Text>Type</Text>
              </Box>
            </HStack>
            <HStack direction={["column", "row"]}>
              <Box pl={"170px"} float="right">
                <Text>Update</Text>
              </Box>
            </HStack>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box>

        
        <Box w={{ base: "80%", md: "100%" }} overflow={"hidden"}>
          <Stack direction={["row", "row"]}>
            <Box pl={"70px"} overflow={"hidden"} w={"258px"}>
              <HStack direction={["column", "row"]}>
                <Box overflow={"hidden"} w={"100%"} m={1}>
                 
                  <Text noOfLines={2} w={"200px"}>
                    www.somethinghhastobeenhappend.edu.in
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box m={1}>
              <VStack direction={["column", "row"]}>
                <Box pl={"70px"} m={"3px"}>
                  <Select placeholder="Select Status " rounded={"xl"}>
                    <option>pending</option>
                    <option>complete</option>
                  </Select>
                </Box>
              </VStack>
            </Box>
            <Box m={"8px"}>
              <VStack>
                <Box pl={"55px"} m={"3px"}>
                  <Text>Individual</Text>
                </Box>
              </VStack>
            </Box>
            <Box m={"8px"}>
              <VStack direction={["column", "row"]}>
                <Box
                  pl={"120px"}
                  position={"relative"}
                   >
                  <Button
                    type="submit"
                    bg="#1A237E"
                    color="white"
                    // w={"50%"}
                    h={6}
                    w={20}
                    _hover={{ bg: " #202A9A" }}
                    rounded={"xl"}
                    fontFamily={"sans-serif"}
                    
                    fontWeight={"light"}
                    fontSize={13}
                  >
                    Update
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box>

         <Box w={{ base: "80%", md: "100%" }} overflow={"hidden"}>
          <Stack direction={["row", "row"]}>
            <Box pl={"70px"} overflow={"hidden"} w={"258px"}>
              <HStack direction={["column", "row"]}>
                <Box overflow={"hidden"} w={"100%"} m={1}>
                  <Text noOfLines={2} w={"200px"}>
                    www.somethinghhastobeenhappend.edu.in
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box m={1}>
              <VStack direction={["column", "row"]}>
                <Box pl={"70px"} m={"3px"}>
                  <Select placeholder="Select Status " rounded={"xl"}>
                    <option>pending</option>
                    <option>complete</option>
                  </Select>
                </Box>
              </VStack>
            </Box>
            <Box m={"8px"}>
              <VStack>
                <Box pl={"55px"} m={"3px"}>
                  <Text>Individual</Text>
                </Box>
              </VStack>
            </Box>
            <Box m={"8px"}>
              <VStack direction={["column", "row"]}>
                <Box
                  pl={"120px"}
                  position={"relative"}
                  // left={"140px"} //for experiment purpose used left (please check this while you connect with backend/database)
                >
                  <Button
                    type="submit"
                    bg="#1A237E"
                    color="white"
                    // w={"50%"}
                    h={6}
                    w={20}
                    _hover={{ bg: " #202A9A" }}
                    rounded={"xl"}
                    fontFamily={"sans-serif"}
                    // h={10}
                    // left="10%"
                    fontWeight={"light"}
                    fontSize={13}
                  >
                    Update
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <Box w="95%">
            <hr />
          </Box>
        </Box>
      </Box> */}
       {/* temporary box code close*/}
      {/* <br /> */}

      {/* another box for display static data or checking for home page tab is scrollable or not */}
       {/* main box code */}
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
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Name: Soham Somaiya</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
                <Text>User Id: #1234567890123456789</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Contact: +911234567890</Text>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX OF DOMAIN, STATUS, TYPE, UPDATE */}
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={["column", "row"]}>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "90px", "90px"]}>
                  <Text>Domain</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "180px", "180px"]}>
                  <Text>Status</Text>
                </Box>
                <Box pl={["0px", "150px", "140px"]}>
                  <Text>Type</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box
                  pl={["0px", "130px", "120px"]}
                  float={["none", "right", "right"]}
                >
                  <Text>Update</Text>
                </Box>
              </HStack>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "100%", sm: "80%", md: "100%" }} overflow={"hidden"}>
            <Stack direction={["column", "row"]}>
              <Box
                pl={["0px", "70px", "20px"]}
                overflow={"hidden"}
                w={["100%", "258px"]}
              >
                <HStack direction={["column", "column"]}>
                  <Box overflow={"hidden"} w={["100%", "auto"]} m={1}>
                    <Text noOfLines={2} w={["100%", "auto"]}>
                      www.somethinghhastobeenhappend.edu.in
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box m={1}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "70px", "20px"]}
                    m={["3px", "3px", "2px"]}
                    w={["100%", "50%", "auto"]}
                  >
                    <Select placeholder="Select Status" rounded={"xl"}>
                      <option>pending</option>
                      <option>complete</option>
                    </Select>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack>
                  <Box pl={["0px", "55px", "55px"]} m={["3px", "3px", "3px"]}>
                    <Text>Individual</Text>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "120px", "75px"]}
                    position={["relative", "relative", "relative"]}
                  >
                    <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      h={6}
                      w={20}
                      _hover={{ bg: " #202A9A" }}
                      rounded={"xl"}
                      fontFamily={"sans-serif"}
                      fontWeight={"light"}
                      fontSize={13}
                    >
                      Update
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* main box code close */}
      {/* main box code */}
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
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Name: Soham Somaiya</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
                <Text>User Id: #1234567890123456789</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Contact: +911234567890</Text>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX OF DOMAIN, STATUS, TYPE, UPDATE */}
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={["column", "row"]}>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "90px", "90px"]}>
                  <Text>Domain</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "180px", "180px"]}>
                  <Text>Status</Text>
                </Box>
                <Box pl={["0px", "150px", "140px"]}>
                  <Text>Type</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box
                  pl={["0px", "130px", "120px"]}
                  float={["none", "right", "right"]}
                >
                  <Text>Update</Text>
                </Box>
              </HStack>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "100%", sm: "80%", md: "100%" }} overflow={"hidden"}>
            <Stack direction={["column", "row"]}>
              <Box
                pl={["0px", "70px", "20px"]}
                overflow={"hidden"}
                w={["100%", "258px"]}
              >
                <HStack direction={["column", "column"]}>
                  <Box overflow={"hidden"} w={["100%", "auto"]} m={1}>
                    <Text noOfLines={2} w={["100%", "auto"]}>
                      www.somethinghhastobeenhappend.edu.in
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box m={1}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "70px", "20px"]}
                    m={["3px", "3px", "2px"]}
                    w={["100%", "50%", "auto"]}
                  >
                    <Select placeholder="Select Status" rounded={"xl"}>
                      <option>pending</option>
                      <option>complete</option>
                    </Select>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack>
                  <Box pl={["0px", "55px", "55px"]} m={["3px", "3px", "3px"]}>
                    <Text>Individual</Text>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "120px", "75px"]}
                    position={["relative", "relative", "relative"]}
                  >
                    <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      h={6}
                      w={20}
                      _hover={{ bg: " #202A9A" }}
                      rounded={"xl"}
                      fontFamily={"sans-serif"}
                      fontWeight={"light"}
                      fontSize={13}
                    >
                      Update
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* main box code close */}
      {/* main box code */}
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
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Name: Soham Somaiya</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
                <Text>User Id: #1234567890123456789</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Contact: +911234567890</Text>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX OF DOMAIN, STATUS, TYPE, UPDATE */}
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={["column", "row"]}>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "90px", "90px"]}>
                  <Text>Domain</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "180px", "180px"]}>
                  <Text>Status</Text>
                </Box>
                <Box pl={["0px", "150px", "140px"]}>
                  <Text>Type</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box
                  pl={["0px", "130px", "120px"]}
                  float={["none", "right", "right"]}
                >
                  <Text>Update</Text>
                </Box>
              </HStack>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "100%", sm: "80%", md: "100%" }} overflow={"hidden"}>
            <Stack direction={["column", "row"]}>
              <Box
                pl={["0px", "70px", "20px"]}
                overflow={"hidden"}
                w={["100%", "258px"]}
              >
                <HStack direction={["column", "column"]}>
                  <Box overflow={"hidden"} w={["100%", "auto"]} m={1}>
                    <Text noOfLines={2} w={["100%", "auto"]}>
                      www.somethinghhastobeenhappend.edu.in
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box m={1}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "70px", "20px"]}
                    m={["3px", "3px", "2px"]}
                    w={["100%", "50%", "auto"]}
                  >
                    <Select placeholder="Select Status" rounded={"xl"}>
                      <option>pending</option>
                      <option>complete</option>
                    </Select>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack>
                  <Box pl={["0px", "55px", "55px"]} m={["3px", "3px", "3px"]}>
                    <Text>Individual</Text>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "120px", "75px"]}
                    position={["relative", "relative", "relative"]}
                  >
                    <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      h={6}
                      w={20}
                      _hover={{ bg: " #202A9A" }}
                      rounded={"xl"}
                      fontFamily={"sans-serif"}
                      fontWeight={"light"}
                      fontSize={13}
                    >
                      Update
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* main box code close */}
      {/* main box code */}
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
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Name: Soham Somaiya</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
                <Text>User Id: #1234567890123456789</Text>
              </Box>
              <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                <Text>Contact: +911234567890</Text>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX OF DOMAIN, STATUS, TYPE, UPDATE */}
          <Box
            w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
            p={2}
            mx="auto"
          >
            <Stack direction={["column", "row"]}>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "90px", "90px"]}>
                  <Text>Domain</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box pl={["0px", "180px", "180px"]}>
                  <Text>Status</Text>
                </Box>
                <Box pl={["0px", "150px", "140px"]}>
                  <Text>Type</Text>
                </Box>
              </HStack>
              <HStack direction={["column", "row"]}>
                <Box
                  pl={["0px", "130px", "120px"]}
                  float={["none", "right", "right"]}
                >
                  <Text>Update</Text>
                </Box>
              </HStack>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>

          {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "100%", sm: "80%", md: "100%" }} overflow={"hidden"}>
            <Stack direction={["column", "row"]}>
              <Box
                pl={["0px", "70px", "20px"]}
                overflow={"hidden"}
                w={["100%", "258px"]}
              >
                <HStack direction={["column", "column"]}>
                  <Box overflow={"hidden"} w={["100%", "auto"]} m={1}>
                    <Text noOfLines={2} w={["100%", "auto"]}>
                      www.somethinghhastobeenhappend.edu.in
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box m={1}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "70px", "20px"]}
                    m={["3px", "3px", "2px"]}
                    w={["100%", "50%", "auto"]}
                  >
                    <Select placeholder="Select Status" rounded={"xl"}>
                      <option>pending</option>
                      <option>complete</option>
                    </Select>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack>
                  <Box pl={["0px", "55px", "55px"]} m={["3px", "3px", "3px"]}>
                    <Text>Individual</Text>
                  </Box>
                </VStack>
              </Box>
              <Box m={["8px", "8px", "8px"]}>
                <VStack direction={["column", "row"]}>
                  <Box
                    pl={["0px", "120px", "75px"]}
                    position={["relative", "relative", "relative"]}
                  >
                    <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      h={6}
                      w={20}
                      _hover={{ bg: " #202A9A" }}
                      rounded={"xl"}
                      fontFamily={"sans-serif"}
                      fontWeight={"light"}
                      fontSize={13}
                    >
                      Update
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Stack>
            <Box w="95%">
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* main box code close */}
      
    </Box>
  );
}

export default UpdateStatus;

{
  /* <Box bgColor={"#F5F5F5"} w={{ base: "100%", md: "130%" }} rounded={"xl"}>
<Box w={{ base: "80%", md: "100%" }}>
  <Stack direction={["row", "row"]}>
    <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
      <Text>Name:Soham Somaiya</Text>
    </Box>
    <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
      <Text>User Id:#1234567890123456789</Text>
    </Box>
    <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
      <Text>Contact:+911234567890</Text>
    </Box>
  </Stack>
</Box>

<hr />

<Box w={{ base: "80%", md: "100%" }}>
  <Stack direction={["row", "row"]}>
    <HStack direction={["column", "row"]}>
      <Box pl={"120px"}>
        <Text>Domain</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"190px"}>
        <Text>Status</Text>
      </Box>
      <Box pl={"120px"}>
        <Text>Type</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"200px"} float="right">
        <Text>Update</Text>
      </Box>
    </HStack>
  </Stack>
</Box>

<hr />

<Box w={{ base: "80%", md: "100%" }}>
  <Stack direction={["row", "row"]}>
    <HStack direction={["column", "row"]}>
      <Box pl={"70px"}>
       
        <Text>www.sohamsomaiya.com</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"70px"} m={"3px"}>
        <Select placeholder="Select country">
          <option>pending</option>
          <option>complete</option>
        </Select>
      </Box>
      <Box pl={"40px"}>
        <Text>Individual</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"165px"} float="right">
        <Button
          type="submit"
          bg="#1A237E"
          color="white"
          // w={"50%"}
          h={6}
          w={20}
          _hover={{ bg: " #202A9A" }}
          rounded={"xl"}
          fontFamily={"sans-serif"}
          // h={10}
          // left="10%"
          // size='lg'
          fontSize={13}
        >
          Update
        </Button>
      </Box>
    </HStack>
  </Stack>
</Box>
</Box>
<Box bgColor={"#F5F5F5"} w={{ base: "100%", md: "130%" }} rounded={"xl"} m={2}>
    <Box w={{ base: "80%", md: "100%" }}>
    <Stack direction={["row", "row"]}>
        <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
        <Text>Name:Soham Somaiya</Text>
        </Box>
        <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
        <Text>User Id:#1234567890123456789</Text>
        </Box>
        <Box p={"5px"} w={{ base: "30%", md: "100%" }}>
        <Text>Contact:+911234567890</Text>
        </Box>
    </Stack>
</Box>

<hr />

<Box w={{ base: "80%", md: "100%" }}>
  <Stack direction={["row", "row"]}>
    <HStack direction={["column", "row"]}>
      <Box pl={"120px"}>
        <Text>Domain</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"190px"}>
        <Text>Status</Text>
      </Box>
      <Box pl={"120px"}>
        <Text>Type</Text>
      </Box>
    </HStack>
    <HStack direction={["column", "row"]}>
      <Box pl={"200px"} float="right">
        <Text>Update</Text>
      </Box>
    </HStack>
  </Stack>
</Box>

<hr />

<Box w={{ base: "80%", md: "100%" }} overflow={'hidden'}>
  <Stack direction={["row", "row"]}>
    <Box pl={"70px"}  overflow={'hidden'}  w={"250px"}>
        <HStack direction={["column", "row"]} >
        <Box overflow={'hidden'}  w={"100%"} m={1}>
             <Text >www.sohamsomaiya.com</Text> 
             <Text>www.fcaitglsunivercity.edu.in</Text> 
            <Text noOfLines={2} w={"200px"}>www.somethinghhastobeenhappend.edu.in</Text>
        </Box>
        </HStack>
    </Box>
    <Box m={1}>
        <VStack direction={["column", "row"]}>
        <Box pl={"70px"} m={"3px"}>
            <Select placeholder="Select Status">
            <option>pending</option>
            <option>complete</option>
            </Select>
        </Box>
        
        
        </VStack>
    </Box>
    <Box m={1}>
        <VStack>
            <Box pl={"35px"} m={"3px"}>
                <Text>Individual</Text>
            </Box>
        </VStack>
    </Box>
    <Box m={1}>
        <VStack direction={["column", "row"]}>
            <Box pl={"150px"}>
                <Button
                type="submit"
                bg="#1A237E"
                color="white"
                // w={"50%"}
                h={6}
                w={20}
                _hover={{ bg: " #202A9A" }}
                rounded={"xl"}
                fontFamily={"sans-serif"}
                // h={10}
                // left="10%"
                // size='lg'
                fontSize={13}
                >
                Update
                </Button>
                
            </Box>
        </VStack>
    </Box>
  </Stack>
</Box>

<hr />
<Box w={{ base: "80%", md: "100%" }} overflow={'hidden'}>
  <Stack direction={["row", "row"]}>
    <Box pl={"70px"}  overflow={'hidden'}  w={"250px"}>
        <HStack direction={["column", "row"]} >
        <Box overflow={'hidden'}  w={"100%"} m={1}>
            <Text noOfLines={2} >www.sohamsomaiya.com</Text>
             <Text isTruncated >www.fcaitglsunivercity.edu.in</Text>
            
        </Box>
        </HStack>
    </Box>
    <Box m={1}>
        <VStack direction={["column", "row"]}>
        <Box pl={"70px"} m={"3px"}>
            <Select placeholder="Select Status">
            <option>pending</option>
            <option>complete</option>
            </Select>
        </Box>
        
        
        </VStack>
    </Box>
    <Box m={1}>
        <VStack>
            <Box pl={"35px"} m={"3px"}>
                <Text>Individual</Text>
            </Box>
        </VStack>
    </Box>
    <Box m={1}>
        <VStack direction={["column", "row"]}>
            <Box pl={"150px"}>
                <Button
                type="submit"
                bg="#1A237E"
                color="white"
                // w={"50%"}
                h={6}
                w={20}
                _hover={{ bg: " #202A9A" }}
                rounded={"xl"}
                fontFamily={"sans-serif"}
                // h={10}
                // left="10%"
                // size='lg'
                fontSize={13}
                >
                Update
                </Button>
                
            </Box>
        </VStack>
    </Box>
  </Stack>
</Box>
</Box> */
}
