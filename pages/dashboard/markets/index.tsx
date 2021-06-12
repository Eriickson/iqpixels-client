import { MarketsPageProps } from "@/server";
import { MarketsTemplate } from "@/templates";
import { NextPage } from "next";
import React from "react";
import { useAction } from "@/store";

const MarketsPage: NextPage<MarketsPageProps> = ({ markets }) => {
  const { setMarkets } = useAction();
  setMarkets(markets);

  return <MarketsTemplate />;
};

export { MarketsServer as getServerSideProps } from "@/server";
export default MarketsPage;
