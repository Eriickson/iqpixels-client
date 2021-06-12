import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useStore } from "@/store";

const MyApp = ({ Component, pageProps }: any) => {
  const { store } = useStore();
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
};

export default MyApp;
