import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Box, Button } from "@chakra-ui/react";
import { auth } from "@/utils";

const HomePage: NextPage = () => {
  return (
    <Box>
      <Button>Click aqui</Button>
    </Box>
  );
};

export { indexServer as getServerSideProps } from "@/server";
export default HomePage;
