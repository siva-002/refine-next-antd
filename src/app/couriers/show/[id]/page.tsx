"use client";
import { useShow } from "@refinedev/core";
import { Avatar, Flex, List, Space, Typography, theme } from "antd";
import React from "react";
// import CourierStatus fro../../../components/couriers/CourierStatustus";
import { ArrowRightOutlined, MobileOutlined } from "@ant-design/icons";
import CourierStatus from "@app/components/couriers/CourierStatus";

export default function ShowCourier() {
  const { query } = useShow();
  const courier = query?.data?.data;
  console.log(courier);
  const userData = [
    {
      label: "Status",
      icon: <ArrowRightOutlined />,
      value: <CourierStatus status={courier?.status} />,
    },
    {
      label: "Gsm",
      icon: <MobileOutlined />,
      value: courier?.gsm,
    },
  ];
  const { token } = theme.useToken();
  return (
    <>
      <Flex vertical={false}>
        <Avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
        <Typography>{query?.data?.data?.name}</Typography>
      </Flex>

      <List
        bordered
        dataSource={userData}
        renderItem={(item) => (
          <List.Item>
            <Flex gap={8}>
              <Space
                style={{
                  width: "120px",
                }}
              >
                <div
                  style={{
                    color: token.colorPrimary,
                  }}
                >
                  {item.icon}
                </div>
                <Typography.Text type="secondary">{item.label}</Typography.Text>
              </Space>
              <Typography.Text>{item.value}</Typography.Text>
            </Flex>
          </List.Item>
        )}
      />
    </>
  );
}
