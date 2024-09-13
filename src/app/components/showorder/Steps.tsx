import React from "react";
import { Steps } from "antd";
import { IEvent, IOrder } from "@app/interfaces";
import { DateField } from "@refinedev/antd";
import dayjs from "dayjs";

export default function ShowSteps({
  data,
  status,
}: {
  data: IEvent[];
  status: string;
}) {
  const description = "hey";

  const Step = data?.map((items) => {
    return {
      title: dayjs(items.date).format('YYYY-MM-DD h:mm:ss A'),
      description: items.status,
    };
  });
  const currentStatus = Step?.filter((item, index) => {
    if (status === item.description) {
      // console.log(item, index);
      return index;
    }
  });
  const CS = Step?.indexOf(currentStatus[0]);
  const Currentstatus = () => {
    switch (status) {
      case "Pending":
      case "Ready":
        return "wait";

      case "On The Way":
        return "process";

      case "Delivered":
        return "finish";

      default:
        return "error";
    }
  };
  // console.log(Currentstatus);
  return (
    <Steps
      direction="vertical"
      current={CS}
      status={Currentstatus()}
      items={Step}
    ></Steps>
  );
}
