import React from "react";

import { MainLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";

import { ProductsActions } from "./ProductsActions";
import { ProductTable } from "./ProductTable";

export const ProductsTemplate = () => {
  return (
    <MainLayout title="Productos" Actions={ProductsActions}>
      <Box bg="white">
        <ProductTable />
      </Box>
    </MainLayout>
  );
};
