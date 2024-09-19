"use client";

import { List, useTable } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Table } from "antd";
import React from "react";

const StoreList = () => {
  const t = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  return (
    <List>
      <Table {...tableProps} rowKey={"id"}>
        <Table.Column dataIndex={"id"} title={t("stores.fields.id")} />
        <Table.Column dataIndex={"id"} title={t("stores.fields.id")} />
      </Table>
    </List>
  );
};

export default StoreList;
