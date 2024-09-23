import { IOrder } from "@app/interfaces";
import { useList, useTable } from "@refinedev/core";
import { Flex, List, Pagination, Typography } from "antd";
import React, { useState } from "react";
import CalculatePrice from "../CalculatePrice";
import OrderMenuButton from "../OrderMenuButton";

const RecentOrder = () => {
  const [pageSize, setPageSize] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useList<IOrder>({
    resource: "orders",
    sorters: [
      {
        field: "createdAt",
        order: "desc",
      },
    ],
    pagination: {
      pageSize,
      current: currentPage,
    },
  });
  const OrdersData = data?.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <List
        style={{ width: "100%" }}
        dataSource={OrdersData}
        renderItem={(item) => {
          return (
            <List.Item style={{ width: "100%" }}>
              <Flex justify="space-between">
                <Typography.Text style={{ width: "10%", textAlign: "left" }}>
                  #{item?.orderNumber}
                </Typography.Text>
                <Flex vertical={true} style={{ width: "30%" }} justify="center">
                  <Typography.Text ellipsis>
                    #{item?.user?.fullName}
                  </Typography.Text>
                </Flex>
                <Flex vertical={true} style={{ width: "30%" }} justify="center">
                  <Typography.Text ellipsis>{"product"}</Typography.Text>
                </Flex>
                <Typography.Text style={{ width: "20%" }}>
                  <CalculatePrice product={item?.products} />
                </Typography.Text>
                <Flex style={{ width: "10%" }} justify="center">
                  <OrderMenuButton record={item} />
                </Flex>
              </Flex>
            </List.Item>
          );
        }}
      ></List>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePageChange}
        total={data?.total}
      />
    </>
  );
};

export default RecentOrder;
