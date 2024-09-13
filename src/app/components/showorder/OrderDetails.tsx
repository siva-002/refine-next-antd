import {
  ClockCircleOutlined,
  HistoryOutlined,
  PhoneOutlined,
  ShopOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import { Flex, List, Space, Typography, theme } from "antd";
import dayjs from "dayjs";
import React, { useMemo } from "react";

const OrderDetails = ({ record }: { record: any }) => {
  const t = useTranslate();
  const { token } = theme.useToken();
  console.log(record);
  const details = useMemo(() => {
    const list: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[] = [
      {
        icon: <ClockCircleOutlined />,
        title: t("orders.fields.deliveryTime"),
        // description: dayjs(record.events[0]?.date)
        //   .add(60, "minutes")
        //   .format("hh:mm A"),
        description: "sdfa",
      },
      {
        icon: <ShopOutlined />,
        title: t("orders.fields.store"),
        // description: record.store.title,
        description: "sdfa",
      },
      {
        icon: <TruckOutlined />,
        title: t("orders.fields.courier"),
        // description: record.courier?.name,
        description: "sdfa",
      },
      {
        icon: <PhoneOutlined />,
        title: t("orders.fields.phone"),
        // description: record.courier?.gsm,
        description: "sdfa",
      },
      {
        icon: <UserOutlined />,
        title: t("orders.fields.customer"),
        // description: `${record.user.firstName} ${record.user.lastName}`,
        description: "sdfa",
      },
      {
        icon: <HistoryOutlined />,
        title: t("orders.fields.createdAt"),
        // description: record.createdAt,
        description: "sdfa",
      },
    ];

    return list;
  }, [record]);
  return (
    <List
      size="large"
      dataSource={details}
      style={{
        borderTop: `1px solid ${token.colorBorderSecondary}`,
      }}
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
              <Typography.Text type="secondary">{item.title}</Typography.Text>
            </Space>
            <Typography.Text>{item.description}</Typography.Text>
          </Flex>
        </List.Item>
      )}
    />
  );
};

export default OrderDetails;
