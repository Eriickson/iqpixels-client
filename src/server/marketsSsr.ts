import { GetServerSideProps } from "next";
import { api } from "@/api";
import { IMarket } from "@/shared";
import { auth } from "@/utils";

export interface MarketsPageProps {
  markets: IMarket[];
}

export const MarketsServer: GetServerSideProps = async (ctx) => {
  await auth(ctx);
  try {
    const { data } = await api.get("/market");
    const props: MarketsPageProps = {
      markets: data.markets,
    };
    return {
      props,
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {},
  };
};
