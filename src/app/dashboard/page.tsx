"use client";
import React from "react";
import { Row, Col, Card } from "antd";

const GridDesign = () => {
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
          <Card title="Column 4" bordered={false}>
            Content 4
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GridDesign;
