"use client";
import { useShow } from "@refinedev/core";
import { Avatar, Flex, List, Space, Typography, theme } from "antd";
import React from "react";
// import CourierStatus fro../../../components/couriers/CourierStatustus";
import {
  ArrowRightOutlined,
  BankOutlined,
  FileDoneOutlined,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import CourierStatus from "@app/components/couriers/CourierStatus";
import { Show, Title } from "@refinedev/antd";
import { RiMotorbikeLine } from "react-icons/ri";

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
    {
      label: "Email",
      icon: <MailOutlined />,
      value: courier?.email,
    },
    {
      label: "Address",
      icon: <HomeOutlined />,
      value: courier?.address,
    },
    {
      label: "Account No",
      icon: <BankOutlined />,
      value: courier?.accountNumber,
    },
    {
      label: "Store",
      icon: <ShopOutlined />,
      value: courier?.store.title,
    },
    {
      label: "Vehicle",
      icon: <RiMotorbikeLine />,
      value: courier?.vehicle?.model,
    },
    {
      label: "Vehicle Id",
      icon: <FileDoneOutlined />,
      value: courier?.licensePlate,
    },
  ];
  const { token } = theme.useToken();
  return (
    <Show headerButtons={null} title="" breadcrumb={null} goBack={null}>
      <Flex vertical={false} gap={"10px"}>
        <Avatar
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          size={"large"}
        />

        <Typography.Title level={2}>{query?.data?.data?.name}</Typography.Title>
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
    </Show>
  );
}
