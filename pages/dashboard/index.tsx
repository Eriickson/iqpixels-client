import React from "react";
import { NextPage } from "next";
import { DashboardTemplate } from "@/templates";

const DashboardPage: NextPage = () => {
  return <DashboardTemplate />;
};

export { dashboardServer as getServerSideProps } from "@/server";
export default DashboardPage;
