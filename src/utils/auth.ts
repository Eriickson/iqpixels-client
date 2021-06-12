import cookies from "next-cookies";
import { GetServerSidePropsContext } from "next";

export async function auth(ctx: GetServerSidePropsContext) {
  const { token } = cookies(ctx);

  if (!token) {
    ctx.res.setHeader("Location", "/login/signin");
    ctx.res.statusCode = 302;
    ctx.res.end();
    return;
  }
}
