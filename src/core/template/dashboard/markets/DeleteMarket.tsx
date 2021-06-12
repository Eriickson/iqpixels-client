import { ModalDialogDelete } from "@/components";
import React, { FC } from "react";

import { api } from "@/api";
import { useAction } from "@/store";

interface DeleteMarketProps {
  idMarket: string;
}

export const DeleteMarket: FC<DeleteMarketProps> = ({ idMarket }) => {
  const { removeMarket } = useAction();
  async function onDelete() {
    try {
      await api.delete(`/market/${idMarket}`);
      removeMarket(idMarket);
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
