import { GetServerSideProps } from "next";
import { auth } from "@/utils";

export const signinServer: GetServerSideProps = async (ctx) => {
  await auth(ctx, "PUBLIC");

  return {
    props: {},
  };
};
