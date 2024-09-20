"use client";
import { ShopOutlined } from "@ant-design/icons";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import React from "react";

const StoreShow = () => {
  const { query } = useShow();
  //   console.log(query?.data?.data);
  return (
    <Show isLoading={query.isLoading}>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
        <span className="display-1">
          <ShopOutlined />
        </span>
        <br />
        <span>Comming Soon...</span>
      </div>
    </Show>
  );
};

export default StoreShow;
