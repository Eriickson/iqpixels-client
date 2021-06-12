import { GetServerSideProps } from "next";
import { auth } from "@/utils";

export const indexServer: GetServerSideProps = async (ctx) => {
  await auth(ctx);

  return {
    props: {},
    // redirect: {
    //   destination: "/login/signin",
    // },
  };
};
