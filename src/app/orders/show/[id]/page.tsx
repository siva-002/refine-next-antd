"use client";
import OrderDetails from "@app/components/showorder/OrderDetails";
import ShowSteps from "@app/components/showorder/Steps";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Flex } from "antd";
import Card from "antd/es/card/Card";
import React from "react";

export default function OrdersShow() {
  const { query } = useShow();
  const data = query?.data?.data?.events;
  const status = query?.data?.data?.status.text;

  return (
    <Show>
      <Flex
        gap={"middle"}
        justify="space-around"
        className="d-flex flex-sm-row flex-md-column"
      >
        <Card className="w-sm-100 w-lg-25">
          <ShowSteps data={data} status={status} />
        </Card>
        <Card className="w-sm-100 w-lg-50">
          <OrderDetails record={query?.data?.data} />
        </Card>
      </Flex>
    </Show>
  );
}
