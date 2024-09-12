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
    syncWithLocation: true, //TableProps<BaseRecord>
  });

  const go = useGo();

  console.log(tableProps);

  const { showUrl } = useNavigation();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="orderNumber"
          dataIndex={"orderNumber"}
          title={"Order Id"}
        />

        <Table.Column
          key="status.text"
          title={"Status"}
          dataIndex={["status", "text"]}
        />
        <Table.Column
          key="store.title"
          title={"Store"}
          dataIndex={["store", "title"]}
        />
      </Table>
    </List>
  );
}
