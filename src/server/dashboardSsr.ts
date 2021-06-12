import { GetServerSideProps } from "next";
import { auth } from "@/utils";

export const dashboardServer: GetServerSideProps = async (ctx) => {
  await auth(ctx);

  return {
    props: {},
  };
};
