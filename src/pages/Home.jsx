import React from 'react';
import background from "../images/home_background.jpeg";
import logo from "../images/icon1.jpeg";
import UpdateStatus from '../components/UpdateStatus';
import Query from '../components/Query';
import{
    // Grid,
    Box,
    Image,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabIndicator,
} from '@chakra-ui/react'


function Home(){
    return(
        
        <Box

            bgImage={background}
            placeItems="center"
            position={"fixed"}
            minW={{ base: "100%", sm:"100%",md: "100%" }}
            minH={{ base: "100%",sm: "100%", md: "100%" }}
            bgPosition="center"
            
            
              
        >
            <Box
                
                justifyContent="right"
                // bgColor={"blue.500"}
                // alignItems={"right"}
                right='45%'
                minW={{ base: "100%", sm:"100%",md: "100%" }}
                minH={{ base: "100%",sm: "100%", md: "100%" }}
                
                >
           
                <Text
                // bgColor={"blackAlpha.600"}
                // fontWeight={'bold'}
                mt="5"
                fontSize="45px"
                fontFamily={"noto-serif"}
                color="black"
                w="100%"
                h="50px"
                // position="absolute"
                alignItems={"center"}
                textAlign="center"
                // top="0"
                // left="50%"
                // mt="10"
                // transform="translateX(85%)"
                
                >
                    Administrator
                </Text>
                <Image 
                    src={logo}
                    boxSize={{
                      base:"100px",
                        md:"80px",
                        lg:"100px"
                    }}
                    
                    float="right"
                    mr="2%"
                    mt={"-3.5%"}
                    // pl="-40%"
                    // right={"45%"}
                    
                >
                </Image>
            
         
                <Tabs 
                    // float="center"
                    align='center'
                   
                    size="lg"
                    mt="5%"
                    position="relative" 
                    variant="unstyled"
                    
                    isManual 
                    >
                    <TabList 
                        border={"none"}
                        // ml="2%"
                       
                    >
                        <Tab m={2}  >Update Status</Tab>
                        <Tab m={2} >Query</Tab>
                        <Tab m={2} >Template</Tab>
                    </TabList>
                    
                    <TabIndicator
                        mt="-1.5px"
                        
                        height="2px"
                        bg="#1A237E"
                        borderRadius="1px"
                    />
                    <TabPanels
                    bgColor="gray.600"
                    mt="5%"
                    // mr="5%"
                    // alignItems="center"
                    overflowY={"scroll"}
                    
                    // height="80vh"
                    h={{ base: "100%", md: "50vh" }}
                    w={{ base: "100%", md: "80%" }}
                    sx={{
                        '&::-webkit-scrollbar': {
                          width: '16px',
                          borderRadius: '8px',
                          backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                      }}
                    >
                        <TabPanel
                            w={{ base: "100%", md:"70%" }}
                            ml="-20%"
                            
                        >
                            <UpdateStatus />
                        </TabPanel>
                        <TabPanel>
                            <Query />
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>

                </Tabs>
           

            </Box>
          
        </Box>
       
       
    );
}

export default Home