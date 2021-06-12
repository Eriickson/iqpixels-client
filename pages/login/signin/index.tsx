import React from "react";
import { NextPage } from "next";

import { SigninTemplate } from "@/templates";

const SignInPage: NextPage = () => {
  return <SigninTemplate />;
};

export { signinServer as getServerSideProps } from "@/server";
export default SignInPage;
