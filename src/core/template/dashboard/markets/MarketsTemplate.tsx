import { MainLayout } from "@/layouts";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { MarketsActions } from "./MarketsActions";
import { MarketTable } from "./MarketTable";

export const MarketsTemplate = () => {
  return (
    <MainLayout title="Bodegas" Actions={MarketsActions}>
      <Box bg="white" shadow="md" p="4">
        <MarketTable />
      </Box>
    </MainLayout>
  );
};
