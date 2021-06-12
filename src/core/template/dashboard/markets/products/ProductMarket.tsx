import { ModalDialogDelete } from "@/components";
import React, { FC } from "react";

import { api } from "@/api";
import { useAction } from "@/store";

interface DeleteProductProps {
  idProduct: string;
}

export const DeleteProduct: FC<DeleteProductProps> = ({ idProduct }) => {
  // const { removeProduct } = useAction();
  async function onDelete() {
    try {
      await api.delete(`/product/${idProduct}`);
      // removeProduct(idProduct);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ModalDialogDelete
      title="Eliminar Bodega"
      description="Estás seguro de que quieres eliminar esta bodega?"
      onDelete={onDelete}
    />
  );
};
