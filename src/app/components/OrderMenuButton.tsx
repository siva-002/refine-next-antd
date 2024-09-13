"use client";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import type { MenuProps, DropDownProps } from "antd";

const OrderMenuButton = () => {
  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <CheckCircleOutlined />,
      label: "Accept",
      //   disabled: true,
      style: {
        color: "green",
      },
    },
    {
      key: 2,
      icon: <CloseCircleOutlined />,
      label: "Reject",
      //   disabled: true,
      style: {
        color: "red",
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} arrow={false}>
      <Button icon={<MoreOutlined />}></Button>
    </Dropdown>
  );
};

export default OrderMenuButton;
