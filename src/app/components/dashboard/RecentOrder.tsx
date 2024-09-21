import { useInfiniteList } from "@refinedev/core";
import { Flex, List, Spin } from "antd";
import { Typography } from "antd/lib";
import dayjs from "dayjs";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import relativeTime from "dayjs/plugin/relativeTime";
import OrderStatus from "../OrderStatus";
import { IOrder } from "@app/interfaces";
const RecentOrder = () => {
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteList<IOrder>({
      resource: "orders",
      sorters: [
        {
          field: "createdAt",
          order: "desc",
        },
      ],
      pagination: {
        pageSize: 10,
        current: 1,
      },
    });
  dayjs.extend(relativeTime);

  const orders = data?.pages.flatMap((page) => page.data) || [];

  return (
    <>
      {isLoading ? (
        <Spin spinning size="large" />
      ) : (
        <div id="ordersscroll" style={{ overflow: "auto", height: "300px" }}>
          <InfiniteScroll
            style={{ overflow: "none" }}
            dataLength={orders?.length}
            hasMore={hasNextPage || false}
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
                    <Flex style={{ width: "100%", margin: "0 10px" }}>
                      <Flex style={{ width: "40%" }} justify="center">
                        <OrderStatus record={item} />
                      </Flex>
                      <Typography.Text
                        style={{ width: "20%", textAlign: "center" }}
                      >
                        #{item?.orderNumber}
                      </Typography.Text>
                      <Typography.Text
                        type="secondary"
                        style={{ width: "40%", textAlign: "center" }}
                      >
                        {dayjs(item.createdAt)?.fromNow()}
                      </Typography.Text>
                    </Flex>
                  </List.Item>
                );
              }}
            ></List>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default RecentOrder;
