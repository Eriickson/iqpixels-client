import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
// import { EditMarket } from "./EditMarket";
// import { DeleteMarket } from "./DeleteMarket";
import { useSelector } from "@/store";

export const ProductTable = () => {
  const { markets } = useSelector((store) => store.market);

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <TableCaption>
          Haga click sobre una fila para ver sus productos
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Precio</Th>
            <Th>Categoria</Th>
            <Th>Cantidad</Th>
            <Th></Th>
          </Tr>
        </Thead>
      </Table>
    </Box>
  );
};
