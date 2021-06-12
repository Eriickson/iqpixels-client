import React from "react";
import { ProductModal } from "@/components";
import {
  productModalFormResolver,
  ProductModalFormOnSubmit,
} from "@/validations";
import { api } from "@/api";
import { useRouter } from "next/router";
import { useAction } from "@/store";

export const ProductsActions = () => {
  const { addProduct } = useAction();
  const { query } = useRouter();
  async function onSubmit(values: ProductModalFormOnSubmit) {
    console.log(query);

    const { data } = await api.post(`/product/${query.idMarket}`, values);
    addProduct(data.product);
  }

  return (
    <>
      <ProductModal type="NEW" onSubmit={onSubmit} />
    </>
  );
};
