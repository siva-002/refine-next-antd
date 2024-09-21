"use client";
import React from "react";
import { Row, Col, Card, theme } from "antd";
import OrderHistory from "@app/components/dashboard/OrderHistory";
import { ClockCircleFilled } from "@ant-design/icons";

const GridDesign = () => {
  const { token } = theme.useToken();
  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]}>
        {" "}
        {/* 16px space between columns and rows */}
        {/* First row with 2 columns */}
        <Col span={12}>
          <Card title="Column 1" bordered={false}>
            Content 1
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Column 2" bordered={false}>
            Content 2
          </Card>
        </Col>
        {/* Second row with 2 columns */}
        <Col span={12}>
          <Card title="Column 3" bordered={false}>
            Content 3
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <span>
                <ClockCircleFilled color={token?.colorPrimary} /> Orders
                Timeline
              </span>
            }
            bordered={false}
          >
            <OrderHistory />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GridDesign;
