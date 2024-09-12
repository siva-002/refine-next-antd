"use client";

import { EyeOutlined } from "@ant-design/icons";
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
import { Avatar, Button, Space, Table } from "antd";
import { Children, PropsWithChildren } from "react";

export default function UsersList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const go = useGo();

  const { showUrl } = useNavigation();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex={["events", "orderNumber"]}
          title={"Order Id"}
        />

        <Table.Column
          key="status.text"
          title={"Status"}
          dataIndex={["status", "text"]}
        />
        <Table.Column key="" title={"Store"} dataIndex={["store", "title"]} />
      </Table>
    </List>
  );
}
