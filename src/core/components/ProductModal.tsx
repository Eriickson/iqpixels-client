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
import {
  productModalFormResolver,
  ProductModalFormOnSubmit,
} from "@/validations";

interface ProductModalProps {
  type?: "EDIT" | "NEW";
  nameProduct?: string;
  direction?: string;
  defaultValues?: ProductModalFormOnSubmit;
  onSubmit: (values: ProductModalFormOnSubmit) => void;
}

export const ProductModal: FC<ProductModalProps> = ({
  type,
  nameProduct,
  direction,
  defaultValues,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductModalFormOnSubmit>({
    resolver: productModalFormResolver,
    defaultValues,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editMode = {
    ButtonOpen: (
      <IconButton
        rounded="none"
        colorScheme="orange"
        aria-label="editar producto"
        mr="3"
        onClick={onOpen}
      >
        <EditIcon />
      </IconButton>
    ),
    title: "Editar producto",
    subtitle: "Edita tu producto",
  };
  const newMode = {
    ButtonOpen: (
      <Button
        rounded="none"
        leftIcon={<PlusSquareIcon />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Nuevo Producto
      </Button>
    ),
    title: "Nuevo producto",
    subtitle: "Agrega un nuevo producto.",
  };
  const [mode] = useState(type === "NEW" ? newMode : editMode);

  return (
    <>
      {mode.ButtonOpen}
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay rounded="none" />
        <form
          onSubmit={handleSubmit((values) => {
            onSubmit(values);
            onClose();
          })}
        >
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
                error={errors}
                defaultValue={nameProduct}
              />
              <CustomFormControl
                label="Precio"
                name="price"
                type="number"
                register={register}
                error={errors}
                defaultValue={direction}
              />
              <CustomFormControl
                label="Categoria"
                name="category"
                register={register}
                error={errors}
                defaultValue={direction}
              />
              <CustomFormControl
                label="Cantidad"
                name="stock"
                register={register}
                error={errors}
                defaultValue={direction}
                type="number"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                mr={3}
                colorScheme="red"
                rounded="none"
                onClick={onClose}
              >
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
