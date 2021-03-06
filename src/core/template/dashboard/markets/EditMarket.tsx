import { MarketModal } from "@/components";
import { MarketModalFormOnSubmit } from "@/validations";
import React, { FC } from "react";
import { api } from "@/api";
import { useAction } from "@/store";
import { IMarket } from "@/shared";
import Cookies from "universal-cookie";

const cookies = new Cookies();

interface EditMarketProps {
  market: IMarket;
}

export const EditMarket: FC<EditMarketProps> = ({ market }) => {
  const { updateMarket } = useAction();

  async function onSubmit(values: MarketModalFormOnSubmit) {
    try {
      const { data } = await api.put(`/market/${market._id}`, values, {
        headers: {
          authorization: `Bearer ${cookies.get("token")}`,
        },
      });
      updateMarket(data.market);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MarketModal
      type="EDIT"
      nameMarket={market.name}
      direction={market.direction}
      onSubmit={onSubmit}
    />
  );
};
