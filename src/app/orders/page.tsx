"use client";

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CalculatePrice from "@app/components/CalculatePrice";
import OrderMenuButton from "@app/components/OrderMenuButton";
import OrderStatus from "@app/components/OrderStatus";
import { OrderTableColumnProducts } from "@app/components/OrderTableColumnProduct";
import Status from "@app/components/status";
import { IOrder, IOrderStatus } from "@app/interfaces";
import type HttpError from "@refinedev/core";
// import UserStatus from "@components/userstatus/page";
import {
  DateField,
  DeleteButton,
  EditButton,
  FilterDropdown,
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
  getDefaultFilter,
  useSelect,
  BaseOption,
  getDefaultSortOrder,
} from "@refinedev/core";
import { Input, MenuProps, Select, theme } from "antd";
import { Avatar, Button, Menu, Space, Table } from "antd";
import { Children, PropsWithChildren, useState } from "react";

export default function UsersList() {
  const { tableProps, filters, sorters } = useTable({
    syncWithLocation: true, //TableProps<BaseRecord>
  });
  const { token } = theme.useToken();

  // const go = useGo();

  // console.log(tableProps);

  // const { showUrl } = useNavigation();

  // const { options, defaultValueQuery, onSearch, query } =
  //   useSelect<IOrderStatus>({
  //     resource: "orderStatuses",
  //     optionLabel: "text",
  //     optionValue: "text",
  //     defaultValue: getDefaultFilter("status.text", filters, "in"),
  //   });

  const { selectProps }: any = useSelect<IOrderStatus>({
    resource: "orderStatuses",
    optionLabel: "text",
    optionValue: "text",
    defaultValue: getDefaultFilter("status.text", filters, "in"),
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="orderNumber"
          dataIndex={"orderNumber"}
          title={"Order Id"}
          sorter
          render={(orderid) => {
            return `#${orderid}`;
          }}
        />

        <Table.Column
          key="status"
          title={"Status"}
          dataIndex={"status"}
          sorter
          // defaultSortOrder={getDefaultSortOrder("status.text", sorters)}
          // defaultSortOrder={getDefaultSortOrder("status.text", sorters)}
          defaultFilteredValue={getDefaultFilter("status.text", filters, "in")}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select {...selectProps}></Select>
              {/* <Select
                options={options}
                onSearch={onSearch}
                placeholder="Select status to search"
                value={query}
              ></Select> */}
            </FilterDropdown>
          )}
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
          sorter
          render={(products) => {
            return <CalculatePrice product={products} />;
          }}
        />
        <Table.Column
          key="user.fullName"
          title={"Name"}
          dataIndex={["user", "fullName"]}
          filterIcon={(filtered) => (
            <SearchOutlined
              style={{
                color: filtered ? token.colorPrimary : undefined,
              }}
            />
          )}
          defaultFilteredValue={getDefaultFilter(
            "user.fullName",
            filters,
            "contains"
          )}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input placeholder={"Enter Customer Name"} />
            </FilterDropdown>
          )}
        />
        <Table.Column<IOrder>
          key="status"
          title="Actions"
          dataIndex={"status"}
          render={(_, record) => {
            return <OrderMenuButton record={record} />;
          }}
        />
      </Table>
    </List>
  );
}
