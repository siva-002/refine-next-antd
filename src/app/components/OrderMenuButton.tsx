"use client";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import type { MenuProps, DropDownProps } from "antd";
import type { IOrderStatus } from "@app/interfaces";

type Istatus = {
  status: IOrderStatus;
};
const OrderMenuButton = ({ status }: Istatus) => {
  const { id, text } = status;
  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <CheckCircleOutlined />,
      label: "Accept",
      disabled:
        text == "Delivered" ||
        text == "Cancelled" ||
        text == "Ready" ||
        text == "On The Way",
      style: {
        color: "green",
        backgroundColor:
          text == "Delivered" || text == "Cancelled" || text == "Ready"
            ? "gray"
            : "none",
      },
    },
    {
      key: 2,
      icon: <CloseCircleOutlined />,
      label: "Reject",
      disabled:
        text == "Cancelled" || text == "On The Way" || text == "Delivered",
      style: {
        color: "red",
        backgroundColor:
          text == "Cancelled" || text == "On The Way" || text == "Delivered"
            ? "gray"
            : "none",
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
