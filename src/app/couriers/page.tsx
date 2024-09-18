"use client";
import { EyeOutlined } from "@ant-design/icons";
import CourierStatus from "@app/components/couriers/CourierStatus";
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
            <Avatar
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
        <Table.Column dataIndex={""} title={"Rating"} />
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
          render={() => {
            return <ShowButton icon={<EyeOutlined />} />;
          }}
        />
      </Table>
    </List>
  );
}
