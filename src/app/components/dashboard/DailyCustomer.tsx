"use client";
import React from "react";
import { Bar } from "@ant-design/charts";
import dayjs from "dayjs";
import { useApiUrl, useCustom } from "@refinedev/core";
const DailyCustomer = () => {
  const today = dayjs();
  const API_URL = useApiUrl();
  const dateWeekFilter = {
    start: today.subtract(6, "days").startOf("day").format(),
    end: today.endOf("day").format(),
  };

  const { data: customerData } = useCustom({
    url: `${API_URL}/newCustomers`,
    method: "get",
    config: {
      query: dateWeekFilter,
    },
  });

  if (customerData?.data) {
    console.log(customerData);
    console.log(customerData?.data?.data);
  }
  // const plotdata =
  //   customerData?.data?.data?.map((item: any) => {
  //     return {
  //       time: item?.date?.unix(),
  //       timeText: item?.date?.format("DD MMM YYYY"),
  //       value: item?.value,
  //     };
  //   }) || [];
  // console.log(customerData);

  // const config = {
  //   plotdata,
  //   xField: "timeText",
  //   yField: "value",
  // };

  return "";
  // return plotdata ? <Bar {...config} /> : null;
};

export default DailyCustomer;
