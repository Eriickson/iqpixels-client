import { ModalDialogDelete } from "@/components";
import React, { FC } from "react";

import { api } from "@/api";

interface DeleteMarketProps {
  idMarket: string;
}

export const DeleteMarket: FC<DeleteMarketProps> = ({ idMarket }) => {
  async function onDelete() {
    try {
      const { data } = await api.delete(`/market/${idMarket}`);
      console.log(data);
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
