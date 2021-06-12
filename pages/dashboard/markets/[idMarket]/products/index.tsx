import React from "react";

import { NextPage } from "next";

import { ProductsTemplate } from "@/templates";
import { ProductsPageProps } from "@/server";

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  console.log(products);

  return <ProductsTemplate />;
};

export { ProductsServer as getServerSideProps } from "@/server";
export default ProductsPage;
