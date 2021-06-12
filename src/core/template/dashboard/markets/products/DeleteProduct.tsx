import { ModalDialogDelete } from "@/components";
import React, { FC } from "react";

import { api } from "@/api";
import { useAction } from "@/store";
import { useRouter } from "next/router";

interface DeleteProductProps {
  idProduct: string;
}

export const DeleteProduct: FC<DeleteProductProps> = ({ idProduct }) => {
  const { removeProduct } = useAction();
  const { query } = useRouter();
  async function onDelete() {
    try {
      await api.delete(`/product/${query.idMarket}/${idProduct}`);
      removeProduct(idProduct);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ModalDialogDelete
      title="Eliminar Producto"
      description="Estás seguro de que quieres eliminar este producto?"
      onDelete={onDelete}
    />
  );
};
