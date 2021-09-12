import { Box, Flex, Image } from "@chakra-ui/react";
// import { FC } from "react";
// import { Header } from "./Header";
import Head from "next/head";

export const Layout = ({ children }) => (
    <Box backgroundColor="gray.200" minHeight="100vh">
        {/* <Header /> */}
        <Flex height="70" bgColor="white" alignItems="center" px={30}>
            {/* <Box h="30" w="40" bgColor="green.100" bgImage = "logo" ></Box> */}
            <Image 
            src="/headerlogo.png"
            h="42" w="46" marginLeft="50" /> 
        </Flex>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Box mx="auto" mt={30} maxW="1000px" >
            {children}
        </Box>
    </Box>
);
