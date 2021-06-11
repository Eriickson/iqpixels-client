import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { MainDrawer } from "@/components";

interface MainLayoutProps {
  title?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <Box minHeight="100vh" bg="green.100">
      <Box shadow="md" bg="white" p="5" display="flex">
        <MainDrawer />
        <Text fontSize="2xl" fontWeight="semibold">
          {title ? title : "Administrador"}
        </Text>
      </Box>
      <Box mt="5" mx="5">
        {children}
      </Box>
    </Box>
  );
};
