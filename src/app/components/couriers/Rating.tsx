import { ICourier } from "@app/interfaces";
import { useList } from "@refinedev/core";
import React from "react";
import type { BaseRecord } from "@refinedev/core";
const Rating = ({ record }: { record: ICourier }) => {
  const { data } = useList({
    resource: "reviews",
    filters: [
      {
        field: "id",
        operator: "eq",
        value: record?.id,
      },
    ],
  });
  console.log(data?.data);
  //   return <div>{data?.data?.data?.star}</div>;
  return <h3></h3>;
};

export default Rating;
