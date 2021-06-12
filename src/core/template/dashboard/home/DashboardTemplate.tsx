import React from "react";
import { MainLayout } from "@/layouts";
import { Text } from "@chakra-ui/react";

export const DashboardTemplate = () => {
  return (
    <MainLayout>
      <Text fontSize="3xl" fontWeight="semibold" textAlign="center">
        Bienvenido
      </Text>
    </MainLayout>
  );
};
