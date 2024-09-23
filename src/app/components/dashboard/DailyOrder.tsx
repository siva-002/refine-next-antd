"use client";
import React from "react";
import { Column } from "@ant-design/charts";
import dayjs from "dayjs";
import { useApiUrl, useCustom } from "@refinedev/core";
import { Spin, theme } from "antd";
const DailyOrder = () => {
  const today = dayjs();
  const API_URL = useApiUrl();
  const {token} = theme.useToken()
  const dateWeekFilter = {
    start: today.subtract(6, "days").startOf("day").format(),
    end: today.endOf("day").format(),
  };

  const { data: customerData } = useCustom({
    url: `${API_URL}/dailyorders`,
    method: "get",
    config: {
      query: dateWeekFilter,
    },
  });

  if (customerData?.data) {
    // console.log(customerData);
    // console.log(customerData?.data?.data);
    const plotdata =
      customerData?.data?.data?.map((item: any) => {
        return {
          timeText: dayjs(item?.date)?.format("ddd"),
          value: item?.value,
        };
      }) || [];
    const config = {
      data: plotdata,
      xField: "timeText",
      yField: "value",
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
      axis: {
        x: {
          labelFill: token.colorTextBase,
        },
        y: {
          labelFill: token.colorTextBase,
        },
      },
    };

    // console.log("plot", plotdata);
    return <Column {...config} colorField="#fa6d3ea3"/>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spin size="default" />
    </div>
  );
  // return plotdata ? <Bar {...config} /> : null;
};

export default DailyOrder;
