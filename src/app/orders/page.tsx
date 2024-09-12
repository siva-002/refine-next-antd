"use client";
import { HttpError, useTable } from "@refinedev/core";
import { List, Table } from "antd";
import React from "react";
import type { IUser, IOrder, IOrderFilterVariables } from "../interfaces";
export default function Order() {
  const { tableQuery } = useTable<IOrder, HttpError, IOrderFilterVariables>({
    syncWithLocation: false,
  });
  // get {data,isLoading}=tableQuery
  const { data } = tableQuery;

  console.log(data);
  return (
    <List>
      <Table {...data}>
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
