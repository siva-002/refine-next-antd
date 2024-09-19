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
        <Skeleton.Button size="default" active />
      </div>

      <Flex vertical={false} gap={"10px"} style={{ marginTop: "20px" }}>
        <Skeleton.Avatar
          size={"large"}
          style={{ width: "80px", height: "80px" }}
          active
        />
        <Skeleton.Input style={{ marginTop: "20px" }} />
      </Flex>

      <Row style={{ marginTop: "20px" }}>
        <Flex vertical={false} wrap gap={"10px"}>
          <Col xs={24} sm={12} md={10}>
            <Card>
              <Skeleton active paragraph={{ rows: 8 }} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Skeleton active paragraph={{ rows: 4 }} />
          </Col>
        </Flex>
      </Row>
    </>
  );
};

export default CourierLoading;
