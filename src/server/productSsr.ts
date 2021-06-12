import { GetServerSideProps } from "next";
import { api } from "@/api";
import { IProduct } from "@/shared";
import { auth } from "@/utils";

export interface ProductsPageProps {
  products: IProduct[];
}

export const ProductsServer: GetServerSideProps = async (ctx) => {
  await auth(ctx);

  try {
    const { data } = await api.get(`/product/${ctx.query.idMarket}`);
    const props: ProductsPageProps = {
      products: data.products,
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
