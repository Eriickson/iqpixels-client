import React from "react";

import { MarketModalFormOnSubmit } from "@/validations";
import { MarketModal } from "@/components";
import { api } from "@/api";
import { useAction } from "@/store";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const MarketsActions = () => {
  const { addMarket } = useAction();
  async function onSubmit(values: MarketModalFormOnSubmit) {
    try {
      const { data } = await api.post("/market", values, {
        headers: {
          authorization: `Bearer ${cookies.get("token")}`,
        },
      });
      addMarket(data.market);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <MarketModal type="NEW" onSubmit={onSubmit} />
    </>
  );
};
