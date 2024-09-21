import { useInfiniteList } from "@refinedev/core";
import { Flex, List, Spin } from "antd";
import { Typography } from "antd/lib";
import dayjs from "dayjs";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import relativeTime from "dayjs/plugin/relativeTime";
import OrderStatus from "../OrderStatus";
import { IOrder } from "@app/interfaces";
const OrderHistory = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteList<IOrder>({
    resource: "orders",
    sorters: [
      {
        field: "createdAt",
        order: "desc",
      },
    ],
    pagination: {
      pageSize: 5,
      current: 1,
    },
  });
  dayjs.extend(relativeTime);
  console.log("before", data);
  const orders = data?.pages.flatMap((page) => page.data) || [];
  console.log("after", orders);
  return (
    <div id="ordersscroll" style={{ overflow: "auto", height: "300px" }}>
      <InfiniteScroll
        dataLength={orders?.length}
        hasMore={hasNextPage ?? false}
        next={fetchNextPage}
        loader={
          <span style={{ display: "flex", justifyContent: "center" }}>
            <Spin />
          </span>
        }
        scrollableTarget="ordersscroll"
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Flex justify="space-between">
                  <OrderStatus record={item} />
                  <Typography.Text>{item?.orderNumber}</Typography.Text>
                  <Typography.Text>
                    {dayjs(item.createdAt)?.fromNow()}
                  </Typography.Text>
                </Flex>
              </List.Item>
            );
          }}
        ></List>
      </InfiniteScroll>
    </div>
  );
};

export default OrderHistory;
