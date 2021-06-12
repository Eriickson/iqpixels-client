import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";

import Cookies from "universal-cookie";

// My Components
import { SigninForm } from "./SigninForm";
import { SignInFormOnSubmit } from "@/validations";
import { api } from "@/api";
import Router from "next/router";

const cookies = new Cookies();

export const SigninTemplate = () => {
  async function onSubmit(values: SignInFormOnSubmit) {
    try {
      const { data } = await api.post("/login/signin", values);
      console.log(data);

      cookies.set("token", data.token, { path: "/" });
      Router.push("/dashboard");
    } catch (err) {}
  }

  return (
    <Box
      bg="green.100"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" p="8" shadow="md" maxWidth="sm" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="none">
            Iniciar Sesión
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="medium">
            Ingresa a nuestra página web.
          </Text>
        </Box>
        <Divider my="3" />
        <SigninForm onSubmit={onSubmit} />
      </Box>
    </Box>
  );
};
