import { GetServerSideProps } from "next";
import { auth } from "@/utils";

export const registerServer: GetServerSideProps = async (ctx) => {
  await auth(ctx, "PUBLIC");

  return {
    props: {},
  };
};
