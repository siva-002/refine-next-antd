<<<<<<< HEAD
=======

>>>>>>> 58304862a6ad49fa7ce7022296eac0c59967150d
import { Header } from "@components/header";
import { CustomHeader } from "@components/sider-title";
import { authProviderServer } from "@providers/auth-provider";
import { ThemedLayoutV2 } from "@refinedev/antd";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.authenticated) {
    return redirect(data?.redirectTo || "/login");
  }

  return (
<<<<<<< HEAD
    <ThemedLayoutV2 Header={Header} Title={CustomHeader}>
=======
    <ThemedLayoutV2
      Header={Header}
      Title={CustomHeader}
    >
>>>>>>> 58304862a6ad49fa7ce7022296eac0c59967150d
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
