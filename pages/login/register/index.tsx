import React from "react";

// NextJS
import { NextPage } from "next";
import { RegisterTemplate } from "@/templates";

const RegisterPage: NextPage = () => {
  return <RegisterTemplate />;
};

export { registerServer as getServerSideProps } from "@/server";
export default RegisterPage;
