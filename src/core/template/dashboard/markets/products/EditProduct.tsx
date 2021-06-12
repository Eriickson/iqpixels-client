import { ProductModal } from "@/components";
import { ProductModalFormOnSubmit } from "@/validations";
import React, { FC } from "react";
import { api } from "@/api";
import { useAction } from "@/store";
import { IProduct } from "@/shared";

interface EditProductProps {
  product: IProduct;
}

export const EditProduct: FC<EditProductProps> = ({ product }) => {
  const { updateProduct } = useAction();

  async function onSubmit(values: ProductModalFormOnSubmit) {
    try {
      const { data } = await api.put(`/product/${product._id}`, values);
      updateProduct(data.product);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ProductModal type="EDIT" defaultValues={product} onSubmit={onSubmit} />
  );
};
