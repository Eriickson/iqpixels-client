import React from "react";
import {} from "next";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
