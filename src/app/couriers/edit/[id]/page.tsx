"use client";
import { ICourier } from "@app/interfaces";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError, useShow } from "@refinedev/core";
import type { BaseRecord } from "@refinedev/core";
import { Form, Input } from "antd";
export default function EditCourier() {
  const { query } = useShow();
  const { formProps, saveButtonProps, formLoading } = useForm<ICourier>({
    resource: "couriers",
    id: query?.data?.data.id, // when undefined, id will be read from the URL.
    action: "edit",
  });
  return (
    <Edit>
      <Form {...formProps}>
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
          name="store.title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Vehicle"}
          name="vehicle.model"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
