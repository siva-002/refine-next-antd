import React from "react";
import { Steps } from "antd";

export default function ShowSteps() {
  const description = "hey";
  return (
    <Steps
      direction="vertical"
      current={1}
      status="error"
      items={[
        {
          title: "Finished",
          description,
        },
        {
          title: "In Process",
          description,
        },
        {
          title: "Waiting",
          description,
        },
      ]}
    ></Steps>
  );
}
