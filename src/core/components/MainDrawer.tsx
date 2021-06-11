import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Link from "next/link";

export const MainDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  const [linkList] = useState([
    {
      label: "Bodegas",
      href: "/dashboard/markets",
    },
    {
      label: "Productos",
      href: "/dashboard/products",
    },
  ]);

  return (
    <>
      <IconButton mr="3" colorScheme="green" aria-label="target menu" ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </IconButton>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {linkList.map((link, i) => (
              <Link key={i} href={link.href}>
                <Button
                  mb="3"
                  w="full"
                  onClick={() => {
                    onClose();
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button w="full" colorScheme="red">
              Cerrar Sesión
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
