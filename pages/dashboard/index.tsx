import React from "react";
import { NextPage } from "next";
import { Box, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DashboardTemplate } from "@/templates";

const DashboardPage: NextPage = () => {
  return <DashboardTemplate />;
};

export default DashboardPage;
