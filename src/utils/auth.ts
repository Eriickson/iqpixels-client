import cookies from "next-cookies";
import { GetServerSidePropsContext } from "next";

type AccessType = "PRIVATE" | "PUBLIC";

interface Options {
  redirect?: Record<AccessType, string>;
}

export async function auth(
  ctx: GetServerSidePropsContext,
  access: AccessType = "PRIVATE",
  options: Options = {
    redirect: { PRIVATE: "/dashboard", PUBLIC: "/login/signin" },
  }
) {
  const { redirect } = options;
  const { token } = cookies(ctx);

  const isAuth = !!token;

  // Verificar que la ruta sea publica
  if (isAuth && access === "PUBLIC") {
    ctx.res.setHeader("Location", String(redirect?.PRIVATE));
    ctx.res.statusCode = 302;
    ctx.res.end();
    return;
  }
  // Verificar que la ruta sea privada
  if (!isAuth && access === "PRIVATE") {
    ctx.res.setHeader("Location", String(redirect?.PUBLIC));
    ctx.res.statusCode = 302;
    ctx.res.end();
    return;
  }
}
