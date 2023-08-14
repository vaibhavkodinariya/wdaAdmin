import React from "react";

import {
  Box,
  Text,
  Stack,
  Select,
  Button,
  HStack,
  VStack,
  
 
} from "@chakra-ui/react";

function UpdateStatus() {
  return (
    <Box>
       
        <Box  
          bgColor={"white"} 
          w={{ base: "100%", md: "130%" }} 
          rounded={"xl"} 
          mb={2}
          // boxShadow="xl"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        >
             {/* BOX IS USED  FOR DISPLAY NAME , USER_ID, CONTACT_NUMBER  */}
            <Box w={{ base: "80%", md: "100%" }}  >
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
              <Box w="95%"><hr /></Box> 
            </Box>

       
        {/* BOX  OF DOMAIN, STATUS , TYPE , UPDATE */}
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
            <Box w="95%"><hr /></Box>
          </Box>

        
        {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "80%", md: "100%" }} overflow={'hidden'}>
            <Stack direction={["row", "row"]}>
              <Box pl={"70px"}  overflow={'hidden'}  w={"258px"}>
                  <HStack direction={["column", "row"]} >
                  <Box overflow={'hidden'}  w={"100%"} m={1}>
                      {/* <Text >www.sohamsomaiya.com</Text> */}
                      {/* <Text>www.fcaitglsunivercity.edu.in</Text> */}
                      <Text noOfLines={2} w={"200px"}>www.somethinghhastobeenhappend.edu.in</Text>
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
            <Box w="95%"><hr /></Box>
          </Box>

       
        {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
          <Box w={{ base: "80%", md: "100%" }} overflow={'hidden'}>
            <Stack direction={["row", "row"]}>
              <Box pl={"70px"}  overflow={'hidden'}  w={"258px"}>
                  <HStack direction={["column", "row"]} >
                  <Box overflow={'hidden'}  w={"100%"} m={1}>
                      {/* <Text >www.sohamsomaiya.com</Text> */}
                      {/* <Text>www.fcaitglsunivercity.edu.in</Text> */}
                      <Text noOfLines={2} w={"200px"}>www.somethinghhastobeenhappend.edu.in</Text>
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
            <Box w="95%"><hr /></Box>
          </Box>
        </Box>
        {/* <br /> */}

        {/* another box for display static data or checking for home page tab is scrollable or not */}
        <Box bgColor={"white "} w={{ base: "100%", md: "130%" }} rounded={"xl"} mb={2}  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)">
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
                    {/* <Text >www.sohamsomaiya.com</Text> */}
                    {/* <Text>www.fcaitglsunivercity.edu.in</Text> */}
                    <Text noOfLines={2} w={"200px"}>www.somethinghhastobeenhappendever.edu.in</Text>
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
                    <Box pl={"35px"} mt={"8px"} textAlign={"center"} >
                        <Text >Individual</Text>
                    </Box>
                </VStack>
            </Box>
            <Box m={1}>
                <VStack direction={["column", "row"]}>
                    <Box pl={"160px"} mt={"8px"}>
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
        </Box>

        <hr />
        <Box w={{ base: "80%", md: "100%" }} overflow={'hidden'}>
          <Stack direction={["row", "row"]}>
            <Box pl={"70px"}  overflow={'hidden'}  w={"250px"}>
                <HStack direction={["column", "row"]} >
                <Box overflow={'hidden'}  w={"100%"} m={1}>
                    <Text noOfLines={2} >www.sohamsomaiya.com</Text>
                    {/* <Text isTruncated >www.fcaitglsunivercity.edu.in</Text> */}
                    
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
                         fontWeight={"light"}
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
                    {/* <Text >www.sohamsomaiya.com</Text> */}
                    {/* <Text>www.fcaitglsunivercity.edu.in</Text> */}
                    <Text 
                      noOfLines={2} 
                      w={"100%"}
                    >www.fcaitmcaglsuniversitylawgarden.edu.in</Text>
                </Box>
                </HStack>
            </Box>
            <Box m={1}>
                <VStack direction={["column", "row"]}>
                <Box pl={"70px"} mt={"3px"}>
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
                        fontWeight={"light"}
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
        </Box>


    </Box>
  );
}

export default UpdateStatus;

{/* <Box bgColor={"#F5F5F5"} w={{ base: "100%", md: "130%" }} rounded={"xl"}>
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
</Box> */}
