import React from "react";
import { ProductModal } from "@/components";
import {
  productModalFormResolver,
  ProductModalFormOnSubmit,
} from "@/validations";

export const ProductsActions = () => {
  async function onSubmit(values: ProductModalFormOnSubmit) {
    console.log(values);
  }

  return (
    <>
      <ProductModal type="NEW" onSubmit={onSubmit} />
    </>
  );
};
