import React from "react";

import { NextPage } from "next";

import { ProductsTemplate } from "@/templates";
import { ProductsPageProps } from "@/server";

import { useAction } from "@/store";

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  const { setProducts } = useAction();

  setProducts(products);

  return <ProductsTemplate />;
};

export { ProductsServer as getServerSideProps } from "@/server";
export default ProductsPage;
