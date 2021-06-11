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
import { MarketModal, ModalDialogDelete } from "@/components";
import NextLink from "next/link";

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
                <MarketModal
                  type="EDIT"
                  nameMarket="Bodega 1"
                  direction="Calle principal Canabacoa"
                  onSubmit={(data) => console.log(data)}
                />
                <ModalDialogDelete
                  title="Eliminar Bodega"
                  description="Estás seguro de que quieres eliminar esta bodega?"
                  onDelete={() => {
                    console.log("Eliminada");
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
