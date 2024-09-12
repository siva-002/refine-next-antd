"use client";
import { HttpError, useTable } from "@refinedev/core";
import { List } from "@refinedev/antd";
import React from "react";
import type { IUser, IOrder, IOrderFilterVariables } from "../interfaces";
import { Table } from "antd";
export default function Order() {
  const { tableQuery } = useTable<IOrder, HttpError, IOrderFilterVariables>({
    syncWithLocation: false,
  });
  // get {data,isLoading}=tableQuery
  const { data, isLoading } = tableQuery;

  console.log(data?.data);
  return (
    <List>
      <Table dataSource={data?.data ?? []}>
        <Table.Column
          key={"status.text"}
          dataIndex={["status", "text"]}
          title="Status"
        />
        <Table.Column
          key={"store.title"}
          dataIndex={["store", "title"]}
          title="Store"
        />
      </Table>
    </List>
  );
}
