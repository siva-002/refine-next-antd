"use client";
import React from "react";
import { Area } from "@ant-design/charts";
import dayjs from "dayjs";
import { useApiUrl, useCustom } from "@refinedev/core";
import { Spin, theme } from "antd";
const DailyRevenue = () => {
  const { token } = theme.useToken();
  const today = dayjs();
  const API_URL = useApiUrl();
  const dateWeekFilter = {
    start: today.subtract(6, "days").startOf("day").format(),
    end: today.endOf("day").format(),
  };

  const { data: customerData } = useCustom({
    url: `${API_URL}/dailyRevenue`,
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
      xAxis: {
        label: {
          formatter: (text: string) => text,
        },
      },
      yAxis: {
        style: {
          fill: "#fff", // Change the color of the X-axis labels
        },
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

      line: {
        style: {
          stroke: "#fa6d3e", // Set the line color
          lineWidth: 1, // Set the line width
          lineDash: [10, 10], // Solid line (use ['2', '2'] for dashed lines)
        },
      },
      point: {
        shape: "circle", // Change the shape of the points
        style: {
          fill: "#fa6d3e", // Set the color of the points
          r: 5, // Radius of the points
        },
      },
      areaStyle: {
        fill: "#fa6d3e", // Set the area color
        opacity: 0.3, // Adjust opacity for the area
      },
      smooth: true,
    };

    // console.log("plot", plotdata);
    return <Area {...config} colorField="#fa6d3ea3" />;
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

export default DailyRevenue;
