"use client";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
const OrderMenuButton = () => {
  const [collapses, setcollapse] = useState(false);

  const menuitems: MenuItem[] = [
    {
      key: 1,
      icon: <CheckCircleOutlined />,
      label: "Accept",
      disabled: true,
      style: {
        color: "green",
      },
    },
    {
      key: 2,
      icon: <CloseCircleOutlined />,
      label: "Reject",
      disabled: true,
      style: {
        color: "red",
      },
    },
  ];

  console.log(collapses);
  return (
    <>
      <Button
        onClick={(collapses) => setcollapse(!collapses)}
        icon={<MoreOutlined />}
      />
      {collapses && <Menu items={menuitems} />}
    </>
  );
};

export default OrderMenuButton;
