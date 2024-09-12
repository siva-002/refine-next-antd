import React from "react";
import type { IOrderStatus } from "../interfaces";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

const OrderStatus = ({ id, text }: IOrderStatus) => {
  switch (id) {
    case 1:
    return (
      <Tag icon={<CheckCircleOutlined />} color="success">
        Delivered
      </Tag>
    );
    case 2:
      return <h1></h1>;
    case 3:
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Delivered
        </Tag>
      );
    case 4:
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Delivered
        </Tag>
      );
    default:
      return (
        <Tag icon={<CloseCircleOutlined />} color="success">
          Cancelled
        </Tag>
      );
  }
};

export default OrderStatus;
