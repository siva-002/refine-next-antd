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
        <Table.Column dataIndex={"id"} title={"ID"} />
        <Table.Column
          align="center"
          key="avatar"
          dataIndex={"avatar"}
          title={"Avatar"}
          render={(value) => (
            <Avatar
              src={
                "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              }
              alt="sadf"
            />
          )}
        />
        <Table.Column title={"Name"} dataIndex={"fullName"} />
        <Table.Column title={"Ph.no"} dataIndex={"gsm"} />
        <Table.Column
          key="createdAt"
          dataIndex="createdAt"
          title={"Created at"}
          render={(value) => <DateField value={value} format="LLL" />}
          sorter
        />
        <Table.Column
          dataIndex={"isActive"}
          title={"Status"}
          render={(value)=><Status value={value}/>}
        />
        <Table.Column
          fixed="right"
          title={"Actions"}
          render={(_, record) => (
            <Button
              icon={<EyeOutlined />}
              onClick={() => {
                return go({
                  to: `${showUrl("users", record.id)}`,
                });
              }}
            />
          )}
        />
      </Table>
    </List>
  );
}
