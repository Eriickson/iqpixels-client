import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Tfoot,
  TableCaption,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { ModalDialogDelete } from "@/components";

export const MarketTable = () => {
  return (
    <Box>
      <Table variant="simple">
        <TableCaption>Haga click sobre una fila para ver sus productos</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Dirección</Th>
            <Th>Productos</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            cursor="pointer"
            onClick={() => {
              console.log("Hola a esta");
            }}
          >
            <Td>Bodega 1</Td>
            <Td>Calle Principal Canabacoa</Td>
            <Td>25</Td>
            <Td w="9rem">
              <IconButton colorScheme="orange" aria-label="editar bodega" mr="3">
                <EditIcon />
              </IconButton>
              <ModalDialogDelete
                title="Eliminar Bodega"
                description="Estás seguro de que quieres eliminar esta bodega?"
                onDelete={() => {
                  console.log("Eliminada");
                }}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
