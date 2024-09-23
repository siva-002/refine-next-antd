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
    const plotdata =
      customerData?.data?.data?.map((item: any) => {
        return {
          timeText: dayjs(item?.date)?.format("ddd"),
          value: item?.value,
        };
      }) || [];
    const config = {
      data: plotdata,
      xField: "value",
      yField: "timeText",
      isGroup: true,
      xAxis: {
        label: {
          formatter: (text: string) => text,
        },
      },
      yAxis: {
        title: {
          text: "Customer Count", // Optional: add title for y-axis
        },
      },
      label: {
        position: "middle", // Shows values inside bars
        style: {
          fill: "#FFFFFF",
          opacity: 0.6,
        },
      },
    };

    console.log("plot", plotdata);
    return <Bar {...config} />;
  }

  return null;
  // return plotdata ? <Bar {...config} /> : null;
};

export default DailyCustomer;
