import { ICourier } from "@app/interfaces";
import { useList, useShow } from "@refinedev/core";
import React from "react";

const Rating = ({ record }: { record: ICourier }) => {
  const { query } = useShow({
    resource: "reviews",
    id: record?.id,
  });
  console.log(query.data?.data);
  return <div>{query.data?.data?.star}</div>;
};

export default Rating;
