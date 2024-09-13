"use client";
import ShowSteps from "@app/components/showorder/Steps";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import React from "react";

export default function OrdersShow() {
  const { query } = useShow();

  return (
    <Show>
      <ShowSteps />
    </Show>
  );
}
