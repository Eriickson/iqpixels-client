import React, { FC, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  useDisclosure,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { PlusSquareIcon, EditIcon } from "@chakra-ui/icons";
import { CustomFormControl } from "@/components";
import { useForm } from "react-hook-form";

interface MarketModalProps {
  type?: "EDIT" | "NEW";
  nameMarket?: string;
  direction?: string;
  onSubmit: (values: any) => void;
}

export const MarketModal: FC<MarketModalProps> = ({ type, nameMarket, direction, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editMode = {
    ButtonOpen: (
      <IconButton
        rounded="none"
        colorScheme="orange"
        aria-label="editar bodega"
        mr="3"
        onClick={onOpen}
      >
        <EditIcon />
      </IconButton>
    ),
    title: "Editar bodega",
    subtitle: "Edita tu bodega",
  };
  const newMode = {
    ButtonOpen: (
      <Button rounded="none" leftIcon={<PlusSquareIcon />} colorScheme="blue" onClick={onOpen}>
        Nueva Bodega
      </Button>
    ),
    title: "Nueva bodega",
    subtitle: "Agrega una nueva bodega.",
  };
  const [mode] = useState(type === "NEW" ? newMode : editMode);

  return (
    <>
      {mode.ButtonOpen}
      <Modal closeOnOverlayClick={false} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay rounded="none" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent rounded="none" maxW="sm">
            <ModalHeader>
              <Box>
                <Text fontSize="2xl" fontWeight="semibold" lineHeight="none">
                  {mode.title}
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="medium">
                  {mode.subtitle}
                </Text>
              </Box>
            </ModalHeader>
            <ModalBody px="8">
              <CustomFormControl
                label="Nombre"
                name="name"
                register={register}
                defaultValue={nameMarket}
              />
              <CustomFormControl
                label="Dirección"
                name="direction"
                register={register}
                defaultValue={direction}
              />
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} colorScheme="red" rounded="none" onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="green" rounded="none" type="submit">
                Guardar
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
