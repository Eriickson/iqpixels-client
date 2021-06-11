import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { CustomFormControl } from "@/components";
import { useForm } from "react-hook-form";

export const MarketModal = () => {
  const { register } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<PlusSquareIcon />} colorScheme="blue" onClick={onOpen}>
        Nueva Bodega
      </Button>
      <Modal closeOnOverlayClick={false} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay rounded="none" />
        <ModalContent rounded="none" maxW="sm">
          <ModalHeader>
            <Box>
              <Text fontSize="2xl" fontWeight="semibold" lineHeight="none">
                Nueva bodega
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="medium">
                Agrega una nueva bodega.
              </Text>
            </Box>
          </ModalHeader>
          <ModalBody px="8">
            <CustomFormControl label="Nombre" name="name" register={register} />
            <CustomFormControl label="Dirección" name="name" register={register} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} colorScheme="red" rounded="none" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green" rounded="none">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
