import { useList } from "@refinedev/core";
import { Table } from "antd";
import React from "react";

const DetailsTable = ({ id }: any) => {
  const { data } = useList({
    resource: "reviews",
    filters: [
      {
        field: "order.courier.id",
        operator: "eq",
        value: id,
      },
    ],
  });
  console.log("userid", id);
  console.log("courierdata", data);
  const columns = [
    {
      title: "Reviews",
      dataindex: "review",
      key: "review",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "review",
    },
    {
      title: "Order",
      dataindex: "order",
      key: "review",
    },
  ];
  const tabledata: any[] = [];
  return <Table columns={columns} dataSource={tabledata}></Table>;
};

export default DetailsTable;
