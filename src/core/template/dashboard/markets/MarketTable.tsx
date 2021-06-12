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
import { useSelector } from "@/store";

export const MarketTable = () => {
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
            <Th>Dirección</Th>
            <Th>Productos</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {markets.map((market, i) => (
            <Tr
              key={i}
              cursor="pointer"
              onClick={() => {
                console.log("Hola a esta");
              }}
            >
              <Td>
                <NextLink href={`/dashboard/markets/${market._id}/products`}>
                  <Text width="max-content" fontWeight="medium">
                    {market.name}
                  </Text>
                </NextLink>
              </Td>
              <Td>
                <NextLink href={`/dashboard/markets/${market._id}/products`}>
                  <Text width="max-content" fontWeight="medium">
                    {market.direction}
                  </Text>
                </NextLink>
              </Td>
              <Td>
                <NextLink href={`/dashboard/markets/${market._id}/products`}>
                  <Text width="max-content" fontWeight="medium">
                    {market.products.length}
                  </Text>
                </NextLink>
              </Td>
              <Td>
                <Box width="max-content">
                  <EditMarket market={market} />
                  <DeleteMarket idMarket={market._id} />
                </Box>
              </Td>
            </Tr>
          ))}
          {!markets.length && (
            <Tr>
              <Td colSpan={4}>
                <Text color="gray.400" textAlign="center">
                  No se han encontrado resultados
                </Text>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};
