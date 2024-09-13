"use client";

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import CalculatePrice from "@app/components/CalculatePrice";
import OrderStatus from "@app/components/OrderStatus";
import { OrderTableColumnProducts } from "@app/components/OrderTableColumnProduct";
import Status from "@app/components/status";
// import UserStatus from "@components/userstatus/page";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ListButton,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import {
  type BaseRecord,
  useMany,
  useGo,
  useNavigation,
} from "@refinedev/core";
import type { MenuProps } from "antd";
import { Avatar, Button, Menu, Space, Table } from "antd";
import { Children, PropsWithChildren } from "react";

export default function UsersList() {
  const { tableProps } = useTable({
    syncWithLocation: true, //TableProps<BaseRecord>
  });

  // const go = useGo();

  console.log(tableProps);

  // const { showUrl } = useNavigation();

  type MenuItem = Required<MenuProps>["items"][number];
  const menuitems: MenuItem[] = [
    {
      key: "menu-item",
      icon: <MoreOutlined />,
      children: [
        {
          key: 1,
          icon: <CheckCircleOutlined />,
          label: "Accept",
          disabled: true,
        },
        {
          key: 2,
          icon: <CloseCircleOutlined />,
          label: "Reject",
          disabled: true,
        },
      ],
    },
  ];
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="orderNumber"
          dataIndex={"orderNumber"}
          title={"Order Id"}
          render={(orderid) => {
            return `#${orderid}`;
          }}
        />

        <Table.Column
          key="status"
          title={"Status"}
          dataIndex={"status"}
          render={(status) => {
            return <OrderStatus id={status.id} text={status.text} />;
          }}
        />
        <Table.Column
          key="products"
          dataIndex="products"
          title={"products"}
          render={(record) => {
            return <OrderTableColumnProducts order={record} />;
          }}
        />
        <Table.Column
          key="store.title"
          title={"Store"}
          dataIndex={["store", "title"]}
        />
        <Table.Column
          key="products"
          title={"Amount"}
          dataIndex={"products"}
          render={(products) => {
            return <CalculatePrice product={products} />;
          }}
        />
        <Table.Column
          key="user.fullName"
          title={"Name"}
          dataIndex={["user", "fullName"]}
        />
        <Table.Column
          key="actions"
          render={() => {
            return <Menu items={menuitems} />;
          }}
        />
      </Table>
    </List>
  );
}
