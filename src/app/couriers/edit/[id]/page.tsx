"use client";
import { ICourier } from "@app/interfaces";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError, useSelect, useShow } from "@refinedev/core";
import type { BaseRecord } from "@refinedev/core";
import { Button, Form, Input, Select } from "antd";
export default function EditCourier() {
  const { query } = useShow();
  const { formProps, saveButtonProps, formLoading, onFinish } =
    useForm<ICourier>({
      resource: "couriers",
      id: query?.data?.data.id, // when undefined, id will be read from the URL.
      action: "edit",
    });

  const vehicleProps = useSelect({
    resource: "vehicles",
    optionLabel: "model",
    optionValue: "model",
  });

  const storeProps = useSelect({
    resource: "stores",
    optionLabel: "title",
    optionValue: "title",
  });
  const data = query?.data?.data;
  const handleSubmit = (values: any) => {
    console.log(values);
    // const val = {
    //   ...data,
    //   store: {
    //     ...data?.store,
    //     title: values?.store?.title,
    //   },
    //   vehicle: {
    //     ...data?.vehicle,
    //     model: values.vehicle?.model,
    //   },
    // };
    // console.log(val);
    // onFinish(values);
  };
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} onFinish={handleSubmit}>
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
          name={"title"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...storeProps} />
        </Form.Item>
        <Form.Item
          label={"Vehicle"}
          name={"model"}
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
    </Edit>
  );
}
