import { Header } from "@components/header";
import { CustomHeader } from "@components/sider-title";
import { authProviderServer } from "@providers/auth-provider";
import { Sider, ThemedLayoutV2 } from "@refinedev/antd";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.authenticated) {
    return redirect(data?.redirectTo || "/login");
  }

  return (
    <ThemedLayoutV2
      Header={Header}
      Title={CustomHeader}
      Sider={(props: any) => <Sider {...props} />}
    >
      {children}
    </ThemedLayoutV2>
  );
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
  };
}
