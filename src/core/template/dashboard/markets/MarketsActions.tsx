import React from "react";
import { MarketModal } from "@/components";

export const MarketsActions = () => {
  return (
    <>
      <MarketModal type="NEW" onSubmit={(data) => console.log(data)} />
    </>
  );
};
