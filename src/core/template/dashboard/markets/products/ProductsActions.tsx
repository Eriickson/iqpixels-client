import React from "react";
import { ProductModal } from "@/components";
import {
  productModalFormResolver,
  ProductModalFormOnSubmit,
} from "@/validations";
import { api } from "@/api";
import { useRouter } from "next/router";

export const ProductsActions = () => {
  const { query } = useRouter();
  async function onSubmit(values: ProductModalFormOnSubmit) {
    console.log(query);

    const { data } = await api.post(`/product/${query.idMarket}`, values);
    console.log(data);
  }

  return (
    <>
      <ProductModal type="NEW" onSubmit={onSubmit} />
    </>
  );
};
