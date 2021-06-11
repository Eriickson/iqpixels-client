import React, { FC, useRef, useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface ModalDialogDeleteProps {
  title: string;
  description: string;
  onDelete: () => void;
  onCancel?: () => void;
}

export const ModalDialogDelete: FC<ModalDialogDeleteProps> = ({
  title,
  description,
  onDelete,
  onCancel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef<any>();
  return (
    <>
      <IconButton colorScheme="red" aria-label="eliminar bodega" onClick={() => setIsOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <AlertDialog isCentered isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent rounded="none">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>{description}</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                rounded="none"
                ref={cancelRef}
                variant="ghost"
                onClick={() => {
                  onCancel && onCancel();
                  onClose();
                }}
              >
                No, Cancel
              </Button>
              <Button
                rounded="none"
                colorScheme="red"
                onClick={() => {
                  onDelete();
                  onClose();
                }}
                ml={3}
              >
                Si, eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
