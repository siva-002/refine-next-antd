"use client";
import { HttpError, useTable } from "@refinedev/core";
import { List, Table } from "antd";
import React from "react";
import type { IUser, IOrder, IOrderFilterVariables } from "../interfaces";
export default function Order() {
  const { tableQuery } = useTable<IOrder, HttpError, IOrderFilterVariables>({
    syncWithLocation: false,
  });

  const data = tableQuery.data;

  // console.log(tableQuery);
  return (
    <List>
      <Table {...data}>
        <Table.Column dataIndex={["status", "text"]} title="Status" />
        <Table.Column dataIndex={["store", "title"]} title="Store" />
      </Table>
    </List>
  );
}
