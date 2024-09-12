"use client";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Avatar, Space, Table, Typography } from "antd";

export default function UsersList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

//   const { data: categoryData, isLoading: categoryIsLoading } = useMany({
//     resource: "categories",
//     ids:
//       tableProps?.dataSource
//         ?.map((item) => item?.category?.id)
//         .filter(Boolean) ?? [],
//     queryOptions: {
//       enabled: !!tableProps?.dataSource,
//     },
//   });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="id"
          dataIndex="id"
          title="ID #"
          render={(value) => (
            <Typography.Text
              style={{
                whiteSpace: "nowrap",
              }}
            >
              #{value}
            </Typography.Text>
          )}/> 
      
       <Table.Column
          align="center"
          key="avatar"
          dataIndex={["avatar"]}
          title="Avatar"
          render={(value) => <Avatar src={value[0].url} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
         <Table.Column
          key="fullName"
          dataIndex="fullName"
          title="Name"
        />
      </Table>
    </List>
  );
}
