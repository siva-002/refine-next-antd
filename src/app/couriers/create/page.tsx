"use client";
import { CloudUploadOutlined } from "@ant-design/icons";
import { ICourier } from "@app/interfaces";
import { Create, Edit, getValueFromEvent, useForm } from "@refinedev/antd";
import { HttpError, useApiUrl, useSelect, useShow } from "@refinedev/core";
import type { BaseRecord } from "@refinedev/core";
import { Avatar, Button, Flex, Form, Input, Select, Upload, theme } from "antd";
export default function CreateCourier() {
  const apiUrl = useApiUrl();
  const { query } = useShow();
  const { formProps, saveButtonProps, formLoading, onFinish } =
    useForm<ICourier>({
      resource: "couriers",
      id: query?.data?.data.id, // when undefined, id will be read from the URL.
      action: "create",
    });
  const { isLoading } = query;
  const data = query?.data?.data;
  const vehicleProps = useSelect({
    resource: "vehicles",
    defaultValue: data?.vehicle?.id,
    optionLabel: "model",
    optionValue: "id",
  });
  const { options } = useSelect({
    resource: "stores",
    defaultValue: data?.store?.id,
  });
  // console.log("store", storeProps);

  //   for manually change values before updating and add onfinish attribute to form with this function
  //   const handleSubmit = (values: any) => {
  //     console.log("1", values);
  //     const val = {
  //       ...data,
  //       store: {
  //         ...data?.store,
  //         id: values?.store?.id,
  //       },
  //       vehicle: {
  //         ...data?.vehicle,
  //         model: values.vehicle?.model,
  //       },
  //     };
  //     console.log("final", val);
  //     onFinish(val);
  //   };
  const { token } = theme.useToken();
  const images = Form.useWatch("images", formProps.form);
  const image = images?.[0] || null;
  const previewImageURL = image?.url || image?.response?.url;

  return (
    <Create saveButtonProps={saveButtonProps} isLoading={isLoading}>
      <Form
        {...formProps}
        // onFinish={handleSubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        labelAlign="left"
      >
        <Form.Item
          name="images"
          getValueFromEvent={getValueFromEvent}
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Upload
            action={`${apiUrl}/media/upload`}
            // listType="picture-card"
            // onChange={onChange}
            // onPreview={onPreview}
            showUploadList={false}
            maxCount={1}
          >
            <Flex
              vertical
              align="center"
              justify="center"
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <Flex
                vertical
                align="center"
                justify="center"
                style={{
                  width: "200px",
                  height: "200px",
                  border: previewImageURL ? "" : "1px solid #44454770",
                }}
                className="position-relative d-flex align-items-center justify-content-center rounded-pill overflow-hidden p-0 m-0"
              >
                <Avatar
                  shape="square"
                  style={{
                    aspectRatio: 1,
                    objectFit: "contain",
                    width: previewImageURL ? "200px" : "100px",
                    height: previewImageURL ? "200px" : "100px",
                    marginTop: "auto",
                    transform: previewImageURL ? "" : "translateY(-50%)",
                  }}
                  src={
                    previewImageURL ||
                    "https://img.icons8.com/?size=100&id=kq0iMadL2AjZ&format=png&color=393939"
                  }
                  alt="Product Image"
                />
                <div
                  className="position-absolute d-flex align-items-center justify-content-center rounded-bottom p-1 fs-6"
                  style={{
                    bottom: "0",
                    width: "100%",
                    backgroundColor: token.volcano,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <CloudUploadOutlined className="fs-4 px-2" />{" "}
                  <span>{!previewImageURL ? "Upload" : "Change"}</span>
                </div>
              </Flex>
            </Flex>
          </Upload>
        </Form.Item>
        <Form.Item
          label={"Name"}
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Gsm"}
          name="gsm"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Address"}
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Account Number"}
          name="accountNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Store"}
          name={["store", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={options} />
        </Form.Item>
        <Form.Item
          label={"Vehicle"}
          name={["vehicle", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...vehicleProps} />
        </Form.Item>
        <Form.Item
          label={"Vehicle Id"}
          name="licensePlate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
}
