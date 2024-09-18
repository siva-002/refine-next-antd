import { ICourier } from "@app/interfaces";
import { useList } from "@refinedev/core";
import React from "react";
import type { BaseRecord } from "@refinedev/core";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { RiStarFill, RiStarLine } from "react-icons/ri";
const Rating = ({ record }: { record: ICourier }) => {
  const { data } = useList({
    resource: "reviews",
    filters: [
      {
        field: "order.courier.id",
        operator: "eq",
        value: record?.id,
      },
    ],
  });
  //   console.log(data?.data);

  const totalStar = data?.data ? data?.data?.length * 5 : 5;
  let currentStar = 0;
  data?.data?.map((item) => {
    currentStar += item.star;
  });

  const review =
    currentStar > 0
      ? Math.floor(((currentStar / totalStar) * 100) / 20)
      : currentStar;
  let stars = [];
  for (let i = 0; i < review; i++) {
    stars.push(
      <RiStarFill style={{ color: "goldenrod", fontSize: "1.2rem" }} />
    );
  }
  for (let i = review; i < 5; i++) {
    stars.push(<RiStarLine style={{ fontSize: "1.2rem" }} />);
  }

  //   return <div>{data?.data?.data?.star}</div>;
  return <Flex gap={"5px"}>{stars.map((item) => item)}</Flex>;
};

export default Rating;
