import { IOrder } from "@app/interfaces";
import { useList, useTable } from "@refinedev/core";
import { Flex, List, Typography } from "antd";
import React from "react";
import CalculatePrice from "../CalculatePrice";
import OrderMenuButton from "../OrderMenuButton";

const RecentOrder = () => {
  const { data, isLoading } = useList<IOrder>({
    resource: "orders",
    sorters: [
      {
        field: "createdAt",
        order: "desc",
      },
    ],
    pagination: {
      pageSize: 8,
      current: 1,
    },
  });
  const OrdersData = data?.data;

  return (
    <List
      dataSource={OrdersData}
      renderItem={(item) => {
        return (
          <List.Item>
            <Flex>
              <Typography.Title>#{item?.orderNumber}</Typography.Title>

              <Flex vertical={true}>
                <Typography.Text ellipsis>
                  #{item?.user?.fullName}
                </Typography.Text>
                <Typography.Text ellipsis>
                  #{item?.adress?.text}
                </Typography.Text>
              </Flex>
              <Typography.Text>
                <CalculatePrice product={item?.products} />
              </Typography.Text>
              <div>
                <OrderMenuButton record={item} />
              </div>
            </Flex>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default RecentOrder;
