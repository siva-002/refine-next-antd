import React from "react";
import type { IOrderStatus } from "../interfaces";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

const OrderStatus = ({ id, text }: IOrderStatus) => {
  switch (id) {
    case 1:
      return (
        <Tag icon={<ExclamationCircleOutlined />} color="default">
          Pending
        </Tag>
      );
    case 2:
      return (
        <Tag icon={<ClockCircleOutlined />} color="warning">
          Ready
        </Tag>
      );
    case 3:
      return (
        <Tag icon={<SyncOutlined spin />} color="processing">
          On the way
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
        <Tag icon={<CloseCircleOutlined />} color="error">
          Cancelled
        </Tag>
      );
  }
};

export default OrderStatus;
