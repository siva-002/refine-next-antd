import { useInfiniteList } from "@refinedev/core";
import { Flex, List, Spin } from "antd";
import { Typography } from "antd/lib";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const OrderHistory = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteList({
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
  console.log("before", data);
  const orders = data?.pages.flatMap((page) => page.data) || [];
  console.log("after", orders);
  return (
    <div id="ordersscroll" style={{ overflow: "auto", height: "400px" }}>
      <InfiniteScroll
        dataLength={orders?.length}
        hasMore={hasNextPage ?? false}
        next={fetchNextPage}
        loader={<Spin />}
        scrollableTarget="ordersscroll"
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Flex justify="space-between">
                  <Typography.Title>{item?.status?.text}</Typography.Title>
                  <Typography.Title>{item?.orderNumber}</Typography.Title>
                  <Typography.Title>{item?.createdAt}</Typography.Title>
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
