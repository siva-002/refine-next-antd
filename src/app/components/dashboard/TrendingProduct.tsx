import { ITrendingProducts } from "@app/interfaces";
import { useSimpleList } from "@refinedev/antd";
import { Flex, List } from "antd";
import React from "react";

const TrendingProduct = () => {
  const { listProps } = useSimpleList<ITrendingProducts>({
    resource: "trendingProducts",
    pagination: { pageSize: 5, current: 1 },
    syncWithLocation: false,
  });
  // console.log(listProps?.dataSource);
  return (
    <List
      className="w-100"
      {...listProps}
      pagination={false}
      bordered={false}
      renderItem={(item, index) => {
        return (
          <Flex align="center" justify="space-between" className="w-100">
            <span>Rank : {item.id}</span>
            <span className="text-start w-50">{item.product.name}</span>
            <span>Order Count : {item.orderCount}</span>
          </Flex>
        );
      }}
    />
  );
};

export default TrendingProduct;
