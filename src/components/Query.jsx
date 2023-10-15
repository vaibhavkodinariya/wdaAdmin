import { Box, Button, Input, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import {
  useGetAllQueriesQuery,
  useLazyGetQueriesBySearchQuery,
} from "../services/wdaSlice";

import loader from "../images/animation.gif";

function Query() {
  const [
    setForQueries,
    { data: getAllQueriesByContact, isLoading: isQueryLoading },
  ] = useLazyGetQueriesBySearchQuery();

  const [isQueryActive, setActive] = useState(false);
  const [isQueryDetailsActivate, setIsQueryDetailsActivate] = useState(false);
  const [contactNo, setContactNo] = useState(false);
  const { data: queries, isLoading } = useGetAllQueriesQuery();
  console.log(getAllQueriesByContact);

  const searchQuery = (e) => {
    e.preventDefault();
    setForQueries(contactNo);
    setActive(true);
  };

  const onChange = (e) => {
    setContactNo(e.target.value);
  };

  if (isLoading || isQueryLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={loader} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box>
      <Box
        bgColor={"white"}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
                placeholder="Enter Contact To Fetch Data"
                rounded={"30px"}
                onChange={onChange}
              />
            </Box>
            <Box
              p={{ md: "5px", lg: "4px" }}
              // w={["100%", "30%", "15%"]}
              w={{ md: "14%", lg: "15%" }}
              textAlign="right"
            >
              <Button
                type="submit"
                bg="#1A237E"
                color="white"
                h={8}
                position={"relative"}
                w={{ md: "88px", lg: "70px" }}
                _hover={{ bg: " #202A9A" }}
                rounded={"xl"}
                alignItems={"center"}
                fontFamily={"sans-serif"}
                fontWeight={"light"}
                fontSize={13}
                onClick={(e) => {
                  searchQuery(e);
                }}
              >
                Search
              </Button>
            </Box>
            <Box
              p={{ md: "5px", lg: "4px" }}
              // w={["100%", "30%", "16%"]}
              w={{ md: "14%", lg: "16%" }}
              textAlign="right"
            >
              <Button
                type="submit"
                bg="#1A237E"
                color="white"
                h={8}
                position={"relative"}
                w={{ md: "80px", lg: "70px" }}
                _hover={{ bg: " #202A9A" }}
                rounded={"xl"}
                alignItems={"center"}
                fontFamily={"sans-serif"}
                fontWeight={"light"}
                fontSize={13}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Clear
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      {isQueryDetailsActivate == true ? (
        getAllQueriesByContact.queries.map((item) => {
          return (
            <>
              <Box
                bgColor={"white"}
                w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
                    <Box p={["1px", "1px", "1px"]} 
                    // w={["100%", "30%", "100%"]}
                   w={{ base: "100%", sm: "80%", md: "80%", lg: "100%" }}
                    
                    >
                      <Text>Web Id:{item.webId} </Text>
                    </Box>
                    <Box p={["1px", "1px", "1px"]}
                    //  w={["100%", "30%", "60%"]}
                   w={{ base: "100%", sm: "80%", md: "50%", lg: "60%" }}

                     >
                      <Text>Date: {item.date} </Text>
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
                  <Box
                   p={["1px", "1px", "1px"]}
                   w={["100%", "30%", "95%"]}
                   
                   >
                    <Text 
                    fontSize="15"
                    >{item.description}</Text>
                    
                  </Box>
                  {/* <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      h={8}
                      position={"relative"}
                      m={3}
                      // w={20}
                      _hover={{ bg: " #202A9A" }}
                      rounded={"xl"}
                      alignItems={"center"}
                      fontFamily={"sans-serif"}
                      fontWeight={"light"}
                      fontSize={13}
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Back
                    </Button> */}
                </Box>
              </Box>
            </>
          );
        })
      ) : (
        <>
          {isQueryActive == true ? (
            <Box
              bgColor={"white"}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              rounded={"xl"}
              mb={2}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              onClick={() => {
                setForQueries(getAllQueriesByContact.ContactNo);
                setIsQueryDetailsActivate(true);
                setContactNo(getAllQueriesByContact.ContactNo);
              }}
            >
              <Box
                w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                p={2}
                mx="auto"
              >
                <Box p={["1px", "1px" , "1px"]} w={["100%", "30%", "95%"]}>
                  {getAllQueriesByContact.Name}
                  {getAllQueriesByContact.ContactNo}
                </Box>
              </Box>
            </Box>
          ) : (
            <>
              {queries.info.map((item) => {
                return (
                  <>
                    <Box
                      bgColor={"white"}
                      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                      rounded={"xl"}
                      mb={2}
                      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
                      onClick={() => {
                        setForQueries(item.contactNo);
                        setIsQueryDetailsActivate(true);
                        setContactNo(item.contactNo);
                      }}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        // alignItems="center"
                        w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                        p={2}
                        mx="auto"
                      >
                        <Text
                          m={["1px", "1px", "1px"]}
                          w={["100%", "30%", "80%"]}
                          fontSize="19"
                          textAlign="left"
                        >
                          {item.name}
                        </Text>
                        <Text
                          m={["1px", "1px", "1px"]}
                          w={["100%", "30%", "80%"]}
                          fontSize="19"
                          textAlign="right"
                        >
                          {item.contactNo}
                        </Text>
                      </Box>
                    </Box>
                    
                  </>
                );
                
              })}
            </>
          )}
        </>
      )}
       <Box
                    p={["1px", "1px", "1px"]}
                    // w={["100%", "50%", "100%"]}
                    w={{ md: "100%", lg: "100%" }}
                    h={{ md: "100%", lg: "30%" }}
                    bottom={{ md: "0", lg: "1%" }}
                    bgColor={"white"}
                    position={"sticky"}
                    mr={{ base: "0", sm: "0", md: "1", lg: "1" }}
                  >
                    <Text
                      fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
                      position={"relative"}
                      textAlign="center"
                      color={"gray.500"}
                      w={{ md: "100%", lg: "100%" }}
                      m={{ base: "0", sm: "0", md: "1", lg: "3" }}
                    >
                      Tap on user to see details search with contact number
                    </Text>
                  </Box>
    </Box>
  );
}

export default Query;
