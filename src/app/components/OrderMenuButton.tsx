"use client";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import type { MenuProps, DropDownProps } from "antd";
import type { IOrder } from "@app/interfaces";
import { useUpdate } from "@refinedev/core";

const OrderMenuButton = ({ record }: { record: IOrder }) => {
  const { mutate } = useUpdate({
    resource: "orders",
    id: record?.id,
  });
  const { id, text } = record?.status;
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
          text == "On The Way" ||
          text == "Delivered" ||
          text == "Cancelled" ||
          text == "Ready"
            ? "rgba(0,0,0,0.03)"
            : "none",
      },
      onClick: () => {
        mutate({
          values: {
            status: {
              id: 2,
              text: "Ready",
            },
          },
        });
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
            ? "rgba(0,0,0,0.03)"
            : "none",
        marginTop: "2px",
      },
      onClick: () => {
        mutate({
          values: {
            status: {
              id: 5,
              text: "Cancelled",
            },
          },
        });
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
