import React from "react";

import { MarketModalFormOnSubmit } from "@/validations";
import { MarketModal } from "@/components";
import { api } from "@/api";

export const MarketsActions = () => {
  async function onSubmit(values: MarketModalFormOnSubmit) {
    try {
      const response = await api.post("/market", values);
      console.log(response);
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
