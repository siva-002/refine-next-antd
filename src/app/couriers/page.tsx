"use client";
import { EyeOutlined } from "@ant-design/icons";
import CourierStatus from "@app/components/couriers/CourierStatus";
import Rating from "@app/components/couriers/Rating";
import { ICourier } from "@app/interfaces";
import { List, ShowButton, useTable } from "@refinedev/antd";
import { Avatar, Table } from "antd";
import React from "react";

export default function ShowCouriers() {
  const { tableProps } = useTable();
  return (
    <List>
      <Table {...tableProps}>
        <Table.Column dataIndex={"id"} title={"ID #"} />
        <Table.Column dataIndex={"name"} title={"Name"} />
        <Table.Column
          key={"avatar"}
          dataIndex={"avatar"}
          title={"Avatar"}
          render={(value) => (
            <Avatar //use value[0].url as the src
              src={
                "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              }
              alt="profile"
            />
          )}
        />
        <Table.Column dataIndex={"licensePlate"} title={"Vehicle id"} />
        <Table.Column dataIndex={"gsm"} title={"Gsm"} />
        <Table.Column
          key={"store.title"}
          dataIndex={["store", "title"]}
          title={"Store"}
        />
        <Table.Column<ICourier>
          dataIndex={""}
          title={"Rating"}
          render={(_, record) => {
            return <Rating record={record} />;
          }}
        />
        <Table.Column
          dataIndex={"status"}
          title={"Status"}
          render={(status) => {
            return <CourierStatus status={status} />;
          }}
        />
        <Table.Column
          dataIndex={""}
          title={"Actions"}
          fixed="right"
          render={() => {
            return <ShowButton icon={<EyeOutlined />} hideText />;
          }}
        />
      </Table>
    </List>
  );
}
