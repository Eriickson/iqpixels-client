import { MarketModal } from "@/components";
import { MarketModalFormOnSubmit } from "@/validations";
import React, { FC } from "react";
import { api } from "@/api";
import { useAction } from "@/store";

interface EditMarketProps {
  idMarket: string;
}

export const EditMarket: FC<EditMarketProps> = ({ idMarket }) => {
  const { updateMarket } = useAction();

  async function onSubmit(values: MarketModalFormOnSubmit) {
    try {
      const { data } = await api.put(`/market/${idMarket}`, values);
      updateMarket(data.market);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MarketModal
      type="EDIT"
      nameMarket="Bodega 1"
      direction="Calle principal Canabacoa"
      onSubmit={onSubmit}
    />
  );
};
