import React, { useState } from "react";

import {
  Box,
  Text,
  Stack,
  Select,
  Button,
  HStack,
  VStack,
  Input,
  Image,
  Spinner,
} from "@chakra-ui/react";
import {
  useGetAllStatusDetailsQuery,
  useLazyGetStatusByContactQuery,
  useUpdateStatusMutation,
} from "../services/wdaSlice";
import loader from "../images/animation.gif";
import { useToast } from "@chakra-ui/react";

function UpdateStatus() {
  const toast = useToast();
  const [
    setDataForQueries,
    { data: getAllStatusQueries, isLoading: isDataLoading },
  ] = useLazyGetStatusByContactQuery();

  const [updateState, { isLoading: isStatusUpdateLoading }] =
    useUpdateStatusMutation();

  const [searchActive, setSearchActive] = useState(false);
  const { data: status, isLoading } = useGetAllStatusDetailsQuery();
  const [state, setStatus] = useState("");
  const [contactNo, setContactNo] = useState("");

  const onUpdateStatus = (e, webSiteId) => {
    e.preventDefault();
    const details = {
      webSiteId: webSiteId,
      status: state,
    };
    updateState(details)
      .unwrap()
      .then((response) => {
        if (response.success == true) {
          toast({
            title: response.message,
            status: "success",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        } else {
          toast({
            title: response.message,
            status: "warning",
            duration: 9000,
            isClosable: true,
            colorScheme: "red",
          });
        }
      });

    if (isStatusUpdateLoading) {
      return (
        <Box bg="white" h="100vh" w="223vh" overflow="hidden">
          {/* <Image src={loader} alt="loader" h="100vh" ml="27%" mt="5dp" /> */}
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      );
    }
  };
  const onViewQueries = () => {
    setSearchActive(true);
    setDataForQueries(contactNo);
  };
  const onChangeSearch = (e) => {
    setContactNo(e.target.value);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  // var data = true;
  // if (data == true) {
  //   return (
  //     <Box
  //       // bg="white"
  //       h="50vh"
  //       w="50vw"
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       overflow="hidden"
  //     >
  //       <Box>
  //         <Spinner
  //           thickness="4px"
  //           speed="0.65s"
  //           emptyColor="gray.200"
  //           color="blue.500"
  //           size="xl"
  //           // position={"relative"}
  //           // top={"-150px"}
  //           // right={"370px"}
  //         />
  //       </Box>
  //     </Box>
  //   );
  // }
  if (isLoading || isDataLoading) {
    return (
      <Box
        // bg="white"
        h="100vh"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          position={"relative"}
          top={"-150px"}
          right={"370px"}
        />
      </Box>
    );
  }

  return (
    <Box>
      {/* box is use for search content */}
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
              <Box p={["1px", "1px", "1px"]} w={["100%", "40%", "60%"]}>
                <Text
                  fontSize={{ lg: "2xl", md: "xl" }}
                  position={"relative"}
                  textAlign="left"
                  ml={3}
                >
                  Web Status
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
                  name="contactNo"
                  rounded={"30px"}
                  onChange={onChangeSearch}
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
                  onClick={(e) => {
                    onViewQueries(e);
                  }}
                >
                  Search
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* search box is end */}

      {/* main1 box code */}
      <Box>
        {searchActive == true ? (
          <>
            <Box
              bgColor={"white"}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  // w={{ base: "100%", sm: "80%", md: "70%", lg: "100%" }}
                >
                  <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                    <Text>Name: {getAllStatusQueries.Name}</Text>
                  </Box>
                  <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "100%"]}>
                    <Text>User Id: {getAllStatusQueries.id}</Text>
                  </Box>
                  <Box p={["1px", "1px", "1px"]} w={["100%", "30%", "60%"]}>
                    <Text>Contact: {getAllStatusQueries.ContactNo} </Text>
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
                <Stack
                  direction={["column", "row"]}
                  w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                >
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
              <Box
                w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                overflow={"hidden"}
              >
                {getAllStatusQueries.statusData.map((web) => {
                  return (
                    <>
                      <Stack direction={["column", "row"]}>
                        <Box
                          pl={["0px", "70px", "20px"]}
                          overflow={"hidden"}
                          w={["100%", "258px"]}
                          key={web.userId}
                        >
                          <HStack direction={["column", "column"]}>
                            <Box
                              overflow={"hidden"}
                              w={["100%", "auto"]}
                              m={1}
                              key={web.domainName}
                            >
                              <Text noOfLines={2} key={web.domainName}>
                                {web.domainName}
                              </Text>
                            </Box>
                          </HStack>
                        </Box>
                        <Box m={1}>
                          <VStack direction={["column", "row"]}>
                            <Box
                              pl={["0px", "70px", "20px"]}
                              m={["3px", "3px", "2px"]}
                              w={["100%", "80%", "auto"]}
                            >
                              <Select
                                placeholder="Select Status"
                                rounded={"xl"}
                                defaultValue={web.statusName}
                                onChange={onChangeStatus}
                              >
                                <option>Pending</option>
                                <option>Hosted</option>
                              </Select>
                            </Box>
                          </VStack>
                        </Box>
                        <Box m={["8px", "8px", "8px"]}>
                          <VStack>
                            <Box
                              pl={["0px", "55px", "55px"]}
                              m={["3px", "3px", "3px"]}
                            >
                              <Text key={web.websiteType}>{web.type}</Text>
                            </Box>
                          </VStack>
                        </Box>
                        <Box m={["8px", "8px", "8px"]}>
                          <VStack direction={["column", "row"]}>
                            <Box
                              pl={["0px", "120px", "75px"]}
                              position={["relative", "relative", "relative"]}
                              key={web.webSiteId}
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
                                onClick={(e) => {
                                  onUpdateStatus(e, web.webSiteId);
                                }}
                              >
                                Update
                              </Button>
                            </Box>
                          </VStack>
                        </Box>
                      </Stack>
                    </>
                  );
                })}
                <Box w="95%">
                  <hr />
                </Box>
              </Box>
              {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
            </Box>
          </>
        ) : (
          <>
            {status.allStatusDetails.map((item) => {
              return (
                <>
                  <Box
                    bgColor={"white"}
                    w={{ base: "100%", sm: "100%", md: "130%", lg: "100%" }}
                    rounded={"xl"}
                    mb={2}
                    boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
                    key={item._id}
                  >
                    {/* BOX IS USED FOR DISPLAY NAME, USER_ID, CONTACT_NUMBER */}
                    <Box
                      w={{ base: "100%", sm: "80%", md: "100%", lg: "100%" }}
                      p={2}
                      mx="auto"
                      key={item.Name}
                    >
                      <Stack direction={{ base: "column", sm: "row" }}>
                        <Box
                          p={["1px", "1px", "1px"]}
                          w={["100%", "30%", "60%"]}
                          key={item.Name}
                        >
                          <Text>{item.Name}</Text>
                        </Box>
                        <Box
                          p={["1px", "1px", "1px"]}
                          w={["100%", "30%", "100%"]}
                          key={item._id}
                        >
                          <Text>User Id: {item._id}</Text>
                        </Box>
                        <Box
                          p={["1px", "1px", "1px"]}
                          w={["100%", "30%", "60%"]}
                          key={item.ContactNo}
                        >
                          <Text>Contact: {item.ContactNo}</Text>
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
                    <Box
                      w={{ base: "100%", sm: "80%", md: "100%" }}
                      overflow={"hidden"}
                    >
                      {item.website.map((web) => {
                        return (
                          <>
                            <Stack direction={["column", "row"]}>
                              <Box
                                pl={["0px", "70px", "20px"]}
                                overflow={"hidden"}
                                w={["100%", "258px"]}
                                key={web.userId}
                              >
                                <HStack direction={["column", "column"]}>
                                  <Box
                                    overflow={"hidden"}
                                    w={["100%", "auto"]}
                                    m={1}
                                    key={web.domainName}
                                  >
                                    <Text noOfLines={2} key={web.domainName}>
                                      {web.domainName}
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
                                    <Select
                                      rounded={"xl"}
                                      defaultValue={web.statusName}
                                      onChange={(e) => {
                                        onChangeStatus(e);
                                      }}
                                    >
                                      <option>Pending</option>
                                      <option>Hosted</option>
                                    </Select>
                                  </Box>
                                </VStack>
                              </Box>
                              <Box m={["8px", "8px", "8px"]}>
                                <VStack>
                                  <Box
                                    pl={["0px", "55px", "55px"]}
                                    m={["3px", "3px", "3px"]}
                                  >
                                    <Text key={web.websiteType}>
                                      {web.websiteType}
                                    </Text>
                                  </Box>
                                </VStack>
                              </Box>
                              <Box m={["8px", "8px", "10px"]}>
                                <VStack direction={["column", "row"]}>
                                  <Box
                                    pl={["0px", "120px", "65px"]}
                                    position={[
                                      "relative",
                                      "relative",
                                      "relative",
                                    ]}
                                    key={web.webSiteId}
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
                                      onClick={(e) => {
                                        onUpdateStatus(e, web.webSiteId);
                                      }}
                                    >
                                      Update
                                    </Button>
                                  </Box>
                                </VStack>
                              </Box>
                            </Stack>
                          </>
                        );
                      })}
                      <Box w="95%">
                        <hr />
                      </Box>
                    </Box>
                    {/* BOX IS USED FOR DISPLAY DETAILS OF DOMAIN NAME, STATUS SELECTION, TYPE_NAME, UPDATE_BUTTON */}
                  </Box>
                </>
              );
            })}
          </>
        )}
      </Box>
      {/* main1 box code close*/}
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
