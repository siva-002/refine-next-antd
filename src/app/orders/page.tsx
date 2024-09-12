import { useTable } from "@refinedev/core";
import { List, Table } from "antd";
import React from "react";

export default function Order() {
  const { tableProps } = useTable({
    syncWithLocation: false,
  });

  console.log(tableProps);
  return (
    <List>
      <Table {...tableProps}>
        <Table.Column dataIndex={["status", "text"]} title="Status" />
        <Table.Column dataIndex={["store", "title"]} title="Store" />
      </Table>
    </List>
  );
}
