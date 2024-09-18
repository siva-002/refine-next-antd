import { useShow } from "@refinedev/core";
import { Avatar, Flex, List, Space, Typography, theme } from "antd";
import React from "react";
import CourierStatus from "../../CourierStatus";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function ShowCourier() {
  const { query } = useShow();
  const courier = query?.data?.data;
  const userData = [
    {
      label: "Status",
      icon: <ArrowRightOutlined />,
      value: <CourierStatus status={courier?.status} />,
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
        header={<div>Header</div>}
        footer={<div>Footer</div>}
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
