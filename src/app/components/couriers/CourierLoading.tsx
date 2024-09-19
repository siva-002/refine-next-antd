import { Card, Col, Flex, Row, Skeleton } from "antd";
import React from "react";

const CourierLoading = () => {
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid lightgray",
        }}
      >
        <Skeleton.Button
          size="default"
          active
          style={{ marginBottom: "20px" }}
        />
      </div>

      <Flex vertical={false} gap={"10px"} style={{ marginTop: "20px" }}>
        <Skeleton.Avatar
          size={"large"}
          style={{ width: "80px", height: "80px" }}
          active
        />
        <Skeleton.Input style={{ marginTop: "20px" }} />
      </Flex>

      <Flex vertical={false} wrap gap={"10px"}>
        <Card style={{ width: "40%" }}>
          <Skeleton active paragraph={{ rows: 8 }} />
        </Card>
        <Card style={{ width: "50%" }}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Card>
      </Flex>
    </>
  );
};

export default CourierLoading;
