import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { MainDrawer } from "@/components";

interface MainLayoutProps {
  title?: string;
  Actions?: FC;
}

export const MainLayout: FC<MainLayoutProps> = ({ title, children, Actions }) => {
  return (
    <Box minHeight="100vh" bg="green.100">
      <Box shadow="md" bg="white" p="5">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <MainDrawer />
            <Text fontSize="2xl" fontWeight="semibold">
              {title ? title : "Administrador"}
            </Text>
          </Box>
          {Actions && <Actions />}
        </Box>
      </Box>
      <Box mt="5" mx="5">
        {children}
      </Box>
    </Box>
  );
};
