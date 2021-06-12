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
import { DeleteProduct } from "./DeleteProduct";
import { EditProduct } from "./EditProduct";
import { useSelector } from "@/store";

export const ProductTable = () => {
  const { products } = useSelector((store) => store.product);

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Precio</Th>
            <Th>Categoria</Th>
            <Th>Cantidad</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, i) => (
            <Tr
              key={i}
              cursor="pointer"
              onClick={() => {
                console.log("Hola a esta");
              }}
            >
              <Td>
                <Text width="max-content" fontWeight="medium">
                  {product.name}
                </Text>
              </Td>
              <Td>
                <Text width="max-content" fontWeight="medium">
                  {product.price}
                </Text>
              </Td>
              <Td>
                <Text width="max-content" fontWeight="medium">
                  {product.category}
                </Text>
              </Td>{" "}
              <Td>
                <Text width="max-content" fontWeight="medium">
                  {product.stock}
                </Text>
              </Td>
              <Td>
                <Box width="max-content">
                  <EditProduct product={product} />
                  <DeleteProduct idProduct={product._id} />
                </Box>
              </Td>
            </Tr>
          ))}
          {!products.length && (
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
