"use client";
import { useGo, useNavigation, useShow } from "@refinedev/core";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  List,
  Row,
  Space,
  Spin,
  Table,
  Typography,
  theme,
} from "antd";
import React from "react";
// import CourierStatus fro../../../components/couriers/CourierStatustus";
import {
  ArrowRightOutlined,
  BankOutlined,
  FileDoneOutlined,
  HomeOutlined,
  LeftOutlined,
  MailOutlined,
  MobileOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import CourierStatus from "@app/components/couriers/CourierStatus";
import { Show, Title } from "@refinedev/antd";
import { RiMotorbikeLine } from "react-icons/ri";
import DetailsTable from "@app/components/couriers/DetailsTable";

export default function ShowCourier() {
  const { query } = useShow();
  const { isLoading } = query;
  const courier = query?.data?.data;
  // console.log(courier);
  const userData = [
    {
      label: "Status",
      icon: <ArrowRightOutlined />,
      value: <CourierStatus status={courier?.status} />,
    },
    {
      label: "Gsm",
      icon: <MobileOutlined />,
      value: courier?.gsm,
    },
    {
      label: "Email",
      icon: <MailOutlined />,
      value: courier?.email,
    },
    {
      label: "Address",
      icon: <HomeOutlined />,
      value: courier?.address,
    },
    {
      label: "Account No",
      icon: <BankOutlined />,
      value: courier?.accountNumber,
    },
    {
      label: "Store",
      icon: <ShopOutlined />,
      value: courier?.store.title,
    },
    {
      label: "Vehicle",
      icon: <RiMotorbikeLine />,
      value: courier?.vehicle?.model,
    },
    {
      label: "Vehicle Id",
      icon: <FileDoneOutlined />,
      value: courier?.licensePlate,
    },
  ];
  const { list } = useNavigation();
  const { token } = theme.useToken();
  const go = useGo();
  return (
    // <Show
    //   headerButtons={null}
    //   title=""
    //   breadcrumb={null}
    //   goBack={null}
    //   canEdit={false}
    //   canDelete={false}
    // >
    <>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <div
            style={{
              borderBottom: "1px solid lightgray",
            }}
          >
            <Button
              icon={<LeftOutlined />}
              onClick={() => list("couriers")}
              style={{
                marginBottom: "20px",
              }}
            >
              Couriers
            </Button>
          </div>
          <Flex vertical={false} gap={"10px"} style={{ marginTop: "20px" }}>
            <Avatar
              src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              size={"large"}
              style={{ width: "200px" }}
            />
            <Typography.Title level={2}>
              {query?.data?.data?.name}
            </Typography.Title>
          </Flex>
          <Card>
            <Row>
              <Flex vertical={false} wrap gap={"10px"}>
                <Col xs={24} sm={12} md={10}>
                  <List
                    bordered
                    dataSource={userData}
                    renderItem={(item) => (
                      <List.Item>
                        <Flex gap={8}>
                          <Space
                            style={{
                              width: "120px",
                            }}
                          >
                            <div
                              style={{
                                color: token.colorPrimary,
                              }}
                            >
                              {item.icon}
                            </div>
                            <Typography.Text type="secondary">
                              {item.label}
                            </Typography.Text>
                          </Space>
                          <Typography.Text>{item.value}</Typography.Text>
                        </Flex>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <DetailsTable id={query?.data?.data?.id} />
                </Col>
              </Flex>
            </Row>
          </Card>
        </>
      )}
    </>
    // </Show>
  );
}
