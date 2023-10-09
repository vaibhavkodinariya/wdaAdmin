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

  const [reload, setReload] = useState(false);
  const handleReloadClick = () => {
    setReload(!reload);
  };
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
                onChange={onChange}
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
                _hover={{ bg: " #202A9A" }}
                rounded={"xl"}
                alignItems={"center"}
                fontFamily={"sans-serif"}
                fontWeight={"light"}
                fontSize={13}
                onClick={searchQuery}
              >
                Search
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
                      <Text>Web Id:{item.webSiteId} </Text>
                    </Box>
                    <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
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
                  <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "95%"]}>
                    <Text>{item.description}</Text>
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
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Back
                    </Button>
                  </Box>
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
              w={{ base: "100%", sm: "100%", md: "130%", lg: "100%" }}
              rounded={"xl"}
              mb={2}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              onClick={() => {
                setForQueries(getAllQueriesByContact.contactNo);
                setIsQueryDetailsActivate(true);
                setContactNo(getAllQueriesByContact.contactNo);
              }}
            >
              <Box
                w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                p={2}
                mx="auto"
              >
                <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "95%"]}>
                  {getAllQueriesByContact.Name}
                  {getAllQueriesByContact.contactNo}
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
                      w={{ base: "100%", sm: "100%", md: "130%", lg: "100%" }}
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
                        w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                        p={2}
                        mx="auto"
                      >
                        <Box
                          p={["1px", "1px", "1px"]}
                          w={["100%", "30%", "95%"]}
                        >
                          {item.name} {item.contactNo}
                        </Box>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default Query;
