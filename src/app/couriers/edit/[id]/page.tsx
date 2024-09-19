import { Edit } from "@refinedev/antd";
import { useForm, useShow } from "@refinedev/core";
import type { BaseRecord } from "@refinedev/core";
import { Form, Input } from "antd";
import type { UseFormProps } from "@refinedev/core";
export default function EditCourier() {
  const { query } = useShow();
  //   const { formProps, saveButtonProps, formLoading } = useForm<UseFormProps>({
  //     resource: "reviews",
  //     id: query?.data?.data.id, // when undefined, id will be read from the URL.
  //     action: "edit",
  //     redirect: false,
  //   });
  return (
    <Edit>
      <Form>
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
      </Form>
    </Edit>
  );
}
