import React from "react";
import background from "../images/home_background.jpeg";
import logo from "../images/icon1.jpeg";
import UpdateStatus from "../components/UpdateStatus";
import Query from "../components/Query";
// import QueryView from "../components/QueryView";
import {
  Box,
  Image,
  Text,
  Tabs,
  // TabList,
  // Tab,
  TabPanels,
  TabPanel,
  // TabIndicator,
  Grid,
} from "@chakra-ui/react";

function Home() {
  return (
    <Box
      bgImage={background}
      bgSize={{ md: "contain", lg: "cover" }}
      placeItems="center"
      // position={"fixed"}
      width={{ base: "100%", sm: "100%", md: "100vw", lg: "100%" }}
      // height={{ base: "100%", sm: "100%", md: "100%" ,lg:"100vh"}}
      minW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      minH={{ base: "100%", sm: "100%", md: "100%", lg: "100vh" }}
      bgPosition="center"
      bgRepeat={"no-repeat"}
      overflowY={"hidden"}
    >
      <Box
        justifyContent="right"
        right="45%"
        minW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        minH={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        // h={{ md: "100%" }}
      >
        <Text
          mt={{ base: "5%", md: "3%" }}
          fontSize="45px"
          fontFamily={"noto-serif"}
          fontWeight={"light"}
          color="black"
          w="100%"
          h="50px"
          alignItems={"center"}
          textAlign="center"
        >
          Administrator
        </Text>
        <Image
          src={logo}
          boxSize={{
            base: "100px",
            md: "80px",
            lg: "100px",
          }}
          float="right"
          mr="2%"
          mt={"-3.5%"}
        ></Image>

        <Tabs
          align="center"
          size="lg"
          mt="5%"
          position={{ md: "relative" }}
          variant="unstyled"
        >
          {/* <TabList position={"relative"} top={{ md: "0", lg: "-36px" }}>
            <Tab>Status & Query</Tab>
            <Tab>Templates</Tab>
          </TabList> */}
          {/* <TabIndicator
            position={"relative"}
            height="3px"
            bg="#1A237E"
            borderRadius="1px"
            top={{ md: "55px", lg: "20px" }}
          /> */}

          <TabPanels
            // bgColor={"white"}
            mt={{ md: "20", lg: "18" }}
            right={{ md: "5%" }}
            alignItems="center"
            overflowY={{ md: "hidden", lg: "scroll" }}
            h={{ base: "auto", md: "80%", lg: "20%" }}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            maxH={{ md: "80vh", lg: "60vh" }}
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
              },
            }}
            overflowX={"hidden"}
          >
            <TabPanel
              //  px={2}
              justifyContent="center"
              alignItems="center"
              // top={{lg:"-25px"}}
              // position="relative"
            >
              <Grid
                gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }}
                gap={{ base: "1rem", md: "2rem", lg: "2.5rem" }}
                width="100%"
                minW={{ base: "100%", md: "50%", lg: "100%" }}
                // left="15vh"
                left={{ md: "0", lg: "15vh" }}
                position="relative"
                mx="auto"
                ml={{ md: "1px", lg: "0" }}
                p={{ md: "10px", lg: "0" }}
              >
                <Box
                  overflow="auto"
                  border="1px solid #ccc"
                  borderRadius="md"
                  position={"relative"}
                  // right={"6%"}
                  right={{ md: "0", lg: "6%" }}
                  p={1}
                  // minH={{ base: "100%", md: "80%", lg:"100%" }}
                  minW={{ base: "100%", md: "70%", lg: "116%" }}
                >
                  <Box
                    // minW={{ base: "100%", md: "100%", lg:"100%"}}
                    w={{ base: "100%", md: "100%", lg: "98%" }}
                  >
                    <UpdateStatus />
                  </Box>
                </Box>
                <Box
                  overflow="auto"
                  border="1px solid #ccc"
                  borderRadius="md"
                  p={3}
                  maxW={{ base: "100%", md: "100%", lg: "70%" }}
                  // left={"10%"}
                  left={{ md: "0", lg: "10%" }}
                  position={"relative"}
                >
                  <Query />
                </Box>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Home;
