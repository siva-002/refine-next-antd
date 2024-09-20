import { DevtoolsProvider } from "@providers/devtools";
import { useNotificationProvider } from "@refinedev/antd";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import "@refinedev/antd/dist/reset.css";
import i18nProvider from "@components/i18n/i18nProvider";
import { RiMotorbikeLine } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";

import "../../style/global.css";
import {
  ShopFilled,
  ShopOutlined,
  ShoppingOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body>
        <Suspense>
          {/* <GitHubBanner /> */}
          <RefineKbarProvider>
            <AntdRegistry>
              <ColorModeContextProvider defaultMode={defaultMode}>
                {/* <DevtoolsProvider> */}
                <Refine
                  routerProvider={routerProvider}
                  dataProvider={dataProvider}
                  notificationProvider={useNotificationProvider}
                  authProvider={authProvider}
                  i18nProvider={i18nProvider}
                  resources={[
                    {
                      name: "users",
                      list: "/users",
                      show: "/users/show/:id",
                      meta: {
                        icon: <UserOutlined />,
                      },
                    },
                    {
                      name: "orders",
                      list: "/orders",
                      show: "/orders/show/:id",
                      meta: {
                        icon: <ShoppingOutlined />,
                      },
                    },
                    {
                      name: "categories",
                      list: "/categories",
                      show: "/categoies/show/:id",
                      meta: {
                        icon: <TagsOutlined />,
                      },
                    },
                    {
                      name: "products",
                      list: "/products",
                      show: "/products/show/:id",
                      edit: "/products/edit/:id",
                      create: "products/create",
                    },
                    {
                      name: "stores",
                      list: "/stores",
                      show: "/stores/show/:id",
                      meta: {
                        icon: <ShopOutlined />,
                      },
                    },
                    {
                      name: "couriers",
                      list: "/couriers",
                      show: "/couriers/show/:id",
                      edit: "/couriers/edit/:id",
                      meta: {
                        icon: <RiMotorbikeLine />,
                      },
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "pMrfpJ-uo1R1T-OkWlNh",
                  }}
                >
                  {children}
                  <RefineKbar />
                </Refine>
                {/* </DevtoolsProvider> */}
              </ColorModeContextProvider>
            </AntdRegistry>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
