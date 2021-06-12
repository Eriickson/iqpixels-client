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
import { EditMarket } from "./EditMarket";
import { DeleteMarket } from "./DeleteMarket";

export const MarketTable = () => {
  return (
    <Box>
      <Table variant="simple">
        <TableCaption>
          Haga click sobre una fila para ver sus productos
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Dirección</Th>
            <Th>Productos</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Tr
              key={item}
              cursor="pointer"
              onClick={() => {
                console.log("Hola a esta");
              }}
            >
              <Td>
                <NextLink href="/dashboard/markets/1/products">
                  <Text fontWeight="medium">Bodega 1</Text>
                </NextLink>
              </Td>
              <Td>
                <NextLink href="/dashboard/markets/1/products">
                  <Text fontWeight="medium">Calle Principal Canabacoa</Text>
                </NextLink>
              </Td>
              <Td>
                <NextLink href="/dashboard/markets/1/products">
                  <Text fontWeight="medium">25</Text>
                </NextLink>
              </Td>
              <Td w="9rem">
                <EditMarket idMarket="60c3fc8fffca9e2e30c5c46b" />
                <DeleteMarket idMarket="60c3fc8fffca9e2e30c5c46b" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
