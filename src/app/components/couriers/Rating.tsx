import { ICourier } from "@app/interfaces";
import { useList } from "@refinedev/core";
import React from "react";
import type { BaseRecord } from "@refinedev/core";
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
    currentStar > 0 ? ((currentStar / totalStar) * 100) / 20 : currentStar;

  console.log("total", totalStar);
  console.log("current", currentStar);
  console.log("review", review);
  //   return <div>{data?.data?.data?.star}</div>;
  return <h3> </h3>;
};

export default Rating;
